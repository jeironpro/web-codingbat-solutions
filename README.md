# web-codingbat-solutions

## 📌 Descripción
Este proyecto forma parte de mi portafolio personal.
El objetivo es demostrar buenas prácticas de programación, organización y documentación en GitHub.

Contiene soluciones a ejercicios de [CodingBat](https://codingbat.com/) en **Java** y **Python**,
y una **web estática** (HTML, CSS y JavaScript, sin dependencias) que las muestra con su
enunciado, ejemplos y código.

## 🗂️ Estructura

```
├── index.html              # Página principal de la web
├── css/style.css           # Estilos (sistema Hallmark · tema Terminal, responsive)
├── js/app.js               # Renderizado, búsqueda, filtros y resaltado de sintaxis
├── js/data.js              # Datos de los ejercicios (generado, no editar a mano)
├── tools/
│   ├── generate-data.py    # Genera js/data.js desde los archivos de soluciones
│   └── smoke-test.js       # Smoke test de la web (Node)
├── coding-bat-java/        # Soluciones en Java
└── coding-bat-python/      # Soluciones en Python
```

## 🌐 Web

La web muestra los 222 ejercicios con su enunciado, ejemplos de entrada/salida, la solución
con resaltado de sintaxis y botón para copiarla. Incluye búsqueda y filtros por lenguaje y
categoría.

Para verla en local, sirve la raíz del proyecto con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

También se puede publicar directamente en **GitHub Pages** (rama `main`, carpeta raíz).

### Regenerar los datos

Si se añaden o modifican ejercicios en `coding-bat-java/` o `coding-bat-python/`:

```bash
python3 tools/generate-data.py
```

### Verificación

```bash
node tools/smoke-test.js
```

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**.
Consulta el archivo [LICENSE](LICENSE) para más detalles.
