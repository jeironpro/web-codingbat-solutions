#!/usr/bin/env python3
"""
Genera `js/data.js` con los ejercicios de CodingBat extraídos de los
archivos de soluciones en `coding-bat-java/` y `coding-bat-python/`.

Uso:
    python3 tools/generate-data.py

Cada ejercicio incluye: nombre, lenguaje, categoría, nivel, archivo
de origen, enunciado, ejemplos y el código de la solución.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JAVA_DIR = ROOT / "coding-bat-java"
PYTHON_DIR = ROOT / "coding-bat-python"
OUTPUT = ROOT / "js" / "data.js"

COMMENT_RE = re.compile(r"/\*(.*?)\*/", re.S)
METHOD_RE = re.compile(r"\bpublic\s+(?:static\s+)?[\w<>\[\]]+\s+(\w+)\s*\(")
DOC_RE = re.compile(r'"""\s*(.*?)\s*"""', re.S)
DEF_RE = re.compile(r"^(\s*)def\s+(\w+)\s*\(", re.M)


def normalize(text):
    """Normaliza saltos de línea y quita BOM."""
    return text.replace("\ufeff", "").replace("\r\n", "\n").replace("\r", "\n")


def clean_comment(text):
    """Limpia un comentario: dedenta y recorta líneas en blanco."""
    lines = text.split("\n")
    non_empty = [ln for ln in lines if ln.strip()]
    if not non_empty:
        return ""
    indent = min(len(ln) - len(ln.lstrip()) for ln in non_empty)
    lines = [ln[indent:] if ln.strip() else "" for ln in lines]
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    return "\n".join(lines)


def split_examples(comment, lang):
    """Separa el enunciado de las líneas de ejemplos (contienen '→')."""
    examples = []
    rest = []
    for ln in comment.split("\n"):
        if "→" in ln:
            examples.append(ln.strip())
        else:
            if lang == "java" and ln.lstrip().startswith("//"):
                ln = ln.lstrip()[2:].lstrip()
            rest.append(ln)
    return "\n".join(rest).strip(), examples


def brace_match(text, open_idx):
    """Devuelve el índice de la llave que cierra la que está en open_idx."""
    depth = 0
    in_str = False
    j = open_idx
    while j < len(text):
        c = text[j]
        if in_str:
            if c == "\\":
                j += 2
                continue
            if c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return j
        j += 1
    return -1


def category_of(filename):
    name = filename.lower()
    if "cadena" in name:
        return "Cadenas"
    if "logico" in name:
        return "Lógica"
    if "matriz" in name:
        return "Matrices"
    if "lista" in name:
        return "Listas"
    return "Calentamiento"


def level_of(filename):
    stem = filename.rsplit(".", 1)[0]
    return "Intermedio" if stem.endswith("2") else "Básico"


def nearest_comment(text, method_start):
    """Devuelve el comentario más cercano antes del método (solo espacios entre ambos)."""
    best = None
    for cm in COMMENT_RE.finditer(text):
        if cm.end() > method_start:
            break
        between = text[cm.end():method_start]
        if between.strip() == "":
            best = cm
    return best


def parse_java(path):
    text = normalize(path.read_text(encoding="utf-8", errors="replace"))
    exercises = []
    for m in METHOD_RE.finditer(text):
        name = m.group(1)
        brace = text.find("{", m.end())
        if brace == -1:
            continue
        close = brace_match(text, brace)
        if close == -1:
            continue
        code = text[m.start():close + 1].strip()
        cm = nearest_comment(text, m.start())
        statement, examples = "", []
        if cm:
            statement, examples = split_examples(clean_comment(cm.group(1)), "java")
        exercises.append({
            "name": name,
            "lang": "java",
            "category": category_of(path.name),
            "level": level_of(path.name),
            "file": path.name,
            "statement": statement,
            "examples": examples,
            "code": code,
        })
    return exercises


def extract_py_body(text, def_start):
    """Extrae la función completa (def + cuerpo) según su indentación."""
    lines = text[def_start:].split("\n")
    first = lines[0]
    indent = len(first) - len(first.lstrip())
    body = [first.rstrip()]
    for ln in lines[1:]:
        if ln.strip() == "":
            body.append("")
            continue
        ind = len(ln) - len(ln.lstrip())
        if ind > indent:
            body.append(ln.rstrip())
        else:
            break
    while body and body[-1] == "":
        body.pop()
    return "\n".join(body)


def parse_python(path):
    text = normalize(path.read_text(encoding="utf-8", errors="replace"))
    docs = list(DOC_RE.finditer(text))
    exercises = []
    for df in DEF_RE.finditer(text):
        name = df.group(2)
        # Docstring más cercano que termine antes del def, con solo espacios/comentarios entre ambos
        candidate = None
        for d in docs:
            if d.end() <= df.start():
                candidate = d
            else:
                break
        statement, examples = "", []
        if candidate:
            between = text[candidate.end():df.start()]
            if all(ln.strip() == "" or ln.strip().startswith("#") for ln in between.split("\n")):
                statement, examples = split_examples(clean_comment(candidate.group(1)), "python")
        code = extract_py_body(text, df.start())
        exercises.append({
            "name": name,
            "lang": "python",
            "category": category_of(path.name),
            "level": level_of(path.name),
            "file": path.name,
            "statement": statement,
            "examples": examples,
            "code": code,
        })
    return exercises


def main():
    exercises = []
    for path in sorted(JAVA_DIR.glob("*.java")):
        exercises.extend(parse_java(path))
    for path in sorted(PYTHON_DIR.glob("*.py")):
        exercises.extend(parse_python(path))

    header = (
        "/*\n"
        " * Datos de los ejercicios de CodingBat (Java y Python).\n"
        " * Generado automáticamente por tools/generate-data.py — no editar a mano.\n"
        " * Para regenerar: python3 tools/generate-data.py\n"
        " */\n\n"
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        header + "window.EXERCISES = " +
        json.dumps(exercises, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )

    by_lang = {}
    no_statement = []
    for ex in exercises:
        by_lang[ex["lang"]] = by_lang.get(ex["lang"], 0) + 1
        if not ex["statement"]:
            no_statement.append(ex["file"] + "::" + ex["name"])
    print(f"Generados {len(exercises)} ejercicios → {OUTPUT.relative_to(ROOT)}")
    print("  Java:   " + str(by_lang.get("java", 0)))
    print("  Python: " + str(by_lang.get("python", 0)))
    if no_statement:
        print("  Sin enunciado (sin comentario/docstring previo):")
        for item in no_statement:
            print("    - " + item)
    return 0


if __name__ == "__main__":
    sys.exit(main())
