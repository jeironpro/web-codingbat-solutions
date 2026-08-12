/*
 * Smoke test de la web (sin navegador).
 * Comprueba que js/data.js contiene los ejercicios y que js/app.js
 * renderiza estadísticas, chips, paginación, copiado y estado vacío
 * sin errores, usando un stub mínimo del DOM.
 *
 * Uso: node tools/smoke-test.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

class El {
  constructor(tag) {
    this.tagName = tag;
    this.children = [];
    this.listeners = {};
    this.dataset = {};
    this.hidden = false;
    this.textContent = '';
    this.value = '';
    this._innerHTML = '';
  }
  set innerHTML(v) { this._innerHTML = v; this.children = []; }
  get innerHTML() { return this._innerHTML; }
  addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); }
  appendChild(child) { this.children.push(child); }
  querySelectorAll() { return []; }
  scrollIntoView() {}
}

const failures = [];
function check(name, cond) {
  console.log((cond ? '  OK   ' : '  FAIL ') + name);
  if (!cond) failures.push(name);
}

function fakeClick(el, listenersKey, selector, node) {
  el.listeners[listenersKey][0]({ target: { closest: sel => (sel === selector ? node : null) } });
}

async function main() {
  let copied = null;
  const elements = {};
  Object.defineProperty(global, 'window', { value: {}, configurable: true, writable: true });
  Object.defineProperty(global, 'navigator', {
    value: { clipboard: { writeText: async t => { copied = t; } } },
    configurable: true, writable: true,
  });
  global.document = {
    getElementById: id => (elements[id] ||= new El('div')),
    querySelectorAll: () => [],
    createElement: tag => new El(tag),
    body: new El('body'),
    execCommand: () => true,
  };

  const dataSrc = fs.readFileSync(path.join(__dirname, '..', 'js', 'data.js'), 'utf8');
  const appSrc = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
  eval(dataSrc);
  eval(appSrc);

  const data = global.window.EXERCISES;
  const resultsHtml = () => elements['results'].innerHTML;
  const countText = () => elements['count'].textContent;
  const paginationHtml = () => elements['pagination-top'].innerHTML;

  console.log('Smoke test');
  check('se cargaron los ejercicios (222)', data.length === 222);
  check('las estadísticas del hero muestran el total', elements['stats'].textContent.includes('222'));
  check('los chips de lenguaje se renderizan', elements['lang-chips'].children.map(c => c.textContent).join(',') === 'todos,java,python');
  check('los chips de categoría se renderizan',
    elements['cat-chips'].children.some(c => c.textContent === 'todas') &&
    elements['cat-chips'].children.some(c => c.textContent === 'cadenas') &&
    elements['cat-chips'].children.some(c => c.textContent === 'lógica'));
  check('el contador muestra el total', countText().includes('222 ejercicios'));

  /* Paginación inicial */
  const firstPageRows = (resultsHtml().match(/<article/g) || []).length;
  check('la página 1 muestra 10 ejercicios', firstPageRows === 10);
  check('la paginación muestra página 1 de 23', paginationHtml().includes('página 1 de 23'));
  check('el botón anterior está deshabilitado en la página 1', paginationHtml().includes('data-page="prev" disabled'));
  check('los resultados contienen el primer ejercicio', resultsHtml().includes(data[0].name + '()'));
  check('los resultados incluyen el código resaltado', resultsHtml().includes('class="tok '));
  check('cada ejercicio tiene lenguaje válido', data.every(e => ['java', 'python'].includes(e.lang)));
  check('cada ejercicio tiene categoría y nivel', data.every(e => e.category && e.level));

  /* Siguiente página */
  const pagTop = elements['pagination-top'];
  fakeClick(pagTop, 'click', '.page-btn', { disabled: false, dataset: { page: 'next' } });
  check('la página 2 empieza en el ejercicio 11', resultsHtml().includes(data[10].name + '()'));
  check('la paginación muestra página 2 de 23', paginationHtml().includes('página 2 de 23'));

  /* Copiar con filtro de python (verifica que el índice apunta al ejercicio correcto) */
  fakeClick(elements['lang-chips'], 'click', '.chip', elements['lang-chips'].children[2]); // chip python
  const firstPythonIdx = data.findIndex(e => e.lang === 'python');
  const firstCopyIdx = Number(resultsHtml().match(/data-idx="(\d+)"/)[1]);
  check('el filtro python reinicia a la página 1', paginationHtml().includes('página 1 de 8'));
  check('el primer ejercicio python tiene el índice correcto', firstCopyIdx === firstPythonIdx);
  await resultsElClickCopy(firstPythonIdx);
  check('copiar guarda el código del ejercicio correcto', copied === data[firstPythonIdx].code);

  /* Búsqueda: filtra y reinicia la página (con el filtro de lenguaje en 'todos') */
  fakeClick(elements['lang-chips'], 'click', '.chip', elements['lang-chips'].children[0]); // chip todos
  global.setTimeout = fn => fn();
  const searchEl = elements['search'];
  searchEl.value = 'fizz';
  searchEl.listeners['input'][0]();
  check('la búsqueda filtra resultados',
    countText().includes(' de ') &&
    resultsHtml().toLowerCase().includes('fizz') &&
    paginationHtml().includes('página 1 de'));

  /* Estado vacío y limpiar filtros */
  searchEl.value = 'zzznadaexiste';
  searchEl.listeners['input'][0]();
  check('la búsqueda sin coincidencias muestra el estado vacío', elements['empty'].hidden === false);
  check('la paginación se oculta sin resultados', elements['pagination-top'].hidden === true);
  elements['clear'].listeners['click'][0]();
  check('limpiar filtros restablece el listado completo',
    countText().includes('222 ejercicios') &&
    elements['empty'].hidden === true &&
    searchEl.value === '' &&
    paginationHtml().includes('página 1 de 23'));

  async function resultsElClickCopy(idx) {
    await elements['results'].listeners['click'][0]({
      target: {
        closest: sel => (sel === '.copy'
          ? { dataset: { idx: String(idx) }, classList: { add() {}, remove() {} }, textContent: '' }
          : null),
      },
    });
  }

  if (failures.length) {
    console.error('\nFALLOS: ' + failures.join(', '));
    process.exit(1);
  }
  console.log('\nSmoke test OK');
}

main().catch(err => { console.error(err); process.exit(1); });
