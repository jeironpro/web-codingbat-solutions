# web-codingbat-solutions

## Descripción
Este proyecto forma parte de mi portafolio personal.
El objetivo es demostrar buenas prácticas de programación, organización y documentación en GitHub.

Contiene **mis soluciones** a ejercicios de [CodingBat](https://codingbat.com/) en **Java** y **Python**,
y una **web estática** (HTML, CSS y JavaScript, sin dependencias) que las muestra con su
enunciado, ejemplos y código.

### Autoría de las soluciones
Las soluciones de este repositorio son **propias y no oficiales**: no son las soluciones absolutas
ni las que publica CodingBat, aunque alguna puede coincidir con las de CodingBat. Cada solución
es simplemente una forma de resolver el ejercicio, no la única ni la correcta por defecto.

## Estructura

```
├── index.html              # Página principal de la web
├── tokens.css              # Tokens del tema (sistema Hallmark · tema Cobalt)
├── icons/favicon.svg       # Favicon del sitio
├── css/style.css           # Estilos (tema Cobalt, responsive)
├── js/app.js               # Tarjetas, ver solución, búsqueda, filtros, paginación y paleta ⌘K
├── js/data.js              # Datos de los ejercicios (generado, no editar a mano)
├── tools/
│   ├── generate-data.py    # Genera js/data.js desde los archivos de soluciones (normaliza indentación)
│   └── smoke-test.js       # Smoke test de la web (Node)
├── coding-bat-java/        # Soluciones en Java
└── coding-bat-python/      # Soluciones en Python
```

## Web

Diseñada con la skill **Hallmark** (macrostructure Portfolio Grid · theme Cobalt: papel frío,
acento azul eléctrico, Space Grotesk + Inter + JetBrains Mono). La web muestra los 222 ejercicios
en una rejilla de tarjetas; el botón **Ver solución** abre un **modal** con el enunciado, los
ejemplos de entrada/salida, la solución con resaltado de sintaxis (indentación normalizada a
4 espacios) y botón para copiarla.

Incluye búsqueda, filtros por lenguaje y categoría, paginación (10 por página) y una **paleta de
comandos ⌘K** (pulsa `⌘K` o `Ctrl+K` para buscar y saltar a cualquier ejercicio por teclado).
En móvil, el modal y la paleta se abren a pantalla completa.

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
node --check js/app.js
node tools/smoke-test.js
```

## Licencia
Este proyecto está bajo la licencia **MIT**.
Consulta el archivo [LICENSE](LICENSE) para más detalles.
