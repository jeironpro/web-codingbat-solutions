/*
 * Smoke test de la web (sin navegador).
 * Comprueba que js/data.js contiene los ejercicios y que js/app.js
 * renderiza las estadísticas, los chips, las filas y el estado vacío
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

function load() {
  const elements = {};
  Object.defineProperty(global, 'window', { value: {}, configurable: true, writable: true });
  Object.defineProperty(global, 'navigator', { value: {}, configurable: true, writable: true });
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
  return { elements, data: global.window.EXERCISES };
}

const { elements, data } = load();
const resultsHtml = elements['results'].innerHTML;
const statsText = elements['stats'].textContent;
const countText = elements['count'].textContent;
const langChipLabels = elements['lang-chips'].children.map(c => c.textContent);
const catChipLabels = elements['cat-chips'].children.map(c => c.textContent);

const failures = [];
function check(name, cond) {
  console.log((cond ? '  OK   ' : '  FAIL ') + name);
  if (!cond) failures.push(name);
}

console.log('Smoke test');
check('se cargaron los ejercicios (222)', data.length === 222);
check('las estadísticas del hero muestran el total', statsText.includes('222'));
check('los chips de lenguaje se renderizan', langChipLabels.join(',') === 'todos,java,python');
check('los chips de categoría se renderizan', catChipLabels.includes('todas') && catChipLabels.includes('cadenas') && catChipLabels.includes('lógica'));
check('el contador muestra el total', countText.includes('222 ejercicios'));
check('los resultados contienen el primer ejercicio', resultsHtml.includes(data[0].name + '()'));
check('los resultados incluyen el código resaltado', resultsHtml.includes('class="tok '));
check('los resultados incluyen botón de copiar', resultsHtml.includes('copiar'));
check('los ejemplos usan la flecha de acento', resultsHtml.includes('class="arrow"'));
check('cada ejercicio tiene lenguaje válido', data.every(e => ['java', 'python'].includes(e.lang)));
check('cada ejercicio tiene categoría y nivel', data.every(e => e.category && e.level));

/* Búsqueda: ejecutar el handler de input con una consulta */
global.setTimeout = fn => fn();
const searchEl = elements['search'];
searchEl.value = 'fizz';
searchEl.listeners['input'][0]();
check('la búsqueda filtra resultados',
  elements['count'].textContent.includes(' de ') &&
  elements['results'].innerHTML.toLowerCase().includes('fizz'));

/* Filtro de lenguaje: hacer clic en el chip Java */
function fakeChipClick(container, index) {
  container.listeners['click'][0]({ target: { closest: sel => (sel === '.chip' ? container.children[index] : null) } });
}
fakeChipClick(elements['lang-chips'], 1); // chip java
check('el filtro Java muestra solo ejercicios de Java',
  elements['count'].textContent.includes(' de 222') &&
  elements['lang-chips'].children.some(c => c.textContent === 'java' && c.className.includes('active')));

/* Estado vacío y limpiar filtros */
searchEl.value = 'zzznadaexiste';
searchEl.listeners['input'][0]();
check('la búsqueda sin coincidencias muestra el estado vacío', elements['empty'].hidden === false);
elements['clear'].listeners['click'][0]();
check('limpiar filtros restablece el listado completo',
  elements['count'].textContent.includes('222 ejercicios') &&
  elements['empty'].hidden === true &&
  searchEl.value === '');

if (failures.length) {
  console.error('\nFALLOS: ' + failures.join(', '));
  process.exit(1);
}
console.log('\nSmoke test OK');
