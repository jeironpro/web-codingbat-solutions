/*
 * Smoke test de la web (sin navegador).
 * Comprueba que js/data.js contiene los ejercicios y que js/app.js
 * renderiza las estadísticas, los chips y las tarjetas sin errores,
 * usando un stub mínimo del DOM.
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
const statsHtml = elements['stats'].innerHTML;
const countText = elements['count'].textContent;
const langChipsHtml = elements['lang-chips'].innerHTML;
const catChipsHtml = elements['cat-chips'].innerHTML;

const failures = [];
function check(name, cond) {
  console.log((cond ? '  OK   ' : '  FAIL ') + name);
  if (!cond) failures.push(name);
}

console.log('Smoke test');
check('se cargaron los ejercicios (222)', data.length === 222);
check('las estadísticas muestran el total', statsHtml.includes('222'));
const langChipLabels = elements['lang-chips'].children.map(c => c.textContent);
const catChipLabels = elements['cat-chips'].children.map(c => c.textContent);
check('los chips de lenguaje se renderizan', langChipLabels.join(',') === 'Todos,Java,Python');
check('los chips de categoría se renderizan', catChipLabels.includes('Todas') && catChipLabels.includes('Cadenas') && catChipLabels.includes('Lógica'));
check('el contador muestra el total', countText.includes('222'));
check('los resultados contienen el primer ejercicio', resultsHtml.includes(data[0].name));
check('los resultados incluyen el código resaltado', resultsHtml.includes('class="tok '));
check('los resultados incluyen botón de copiar', resultsHtml.includes('Copiar'));
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
function fakeClick(chip) {
  elements['lang-chips'].listeners['click'][0]({ target: { closest: sel => (sel === '.chip' ? chip : null) } });
}
fakeClick(elements['lang-chips'].children[1]); // chip Java
check('el filtro Java muestra solo ejercicios de Java',
  elements['count'].textContent.includes('de 222') &&
  elements['lang-chips'].children.some(c => c.textContent === 'Java' && c.className.includes('active')));

/* Restablecer búsqueda y filtros para el estado inicial */
searchEl.value = '';
searchEl.listeners['input'][0]();
fakeClick(elements['lang-chips'].children[0]); // chip Todos
check('se restablece el listado completo', elements['count'].textContent.includes('222 ejercicios'));

if (failures.length) {
  console.error('\nFALLOS: ' + failures.join(', '));
  process.exit(1);
}
console.log('\nSmoke test OK');
