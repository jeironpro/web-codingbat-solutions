/* ============================================================
   CodingBat Soluciones — lógica del frontend
   Renderizado de ejercicios, búsqueda, filtros, copiado y
   resaltado de sintaxis. Sin dependencias externas.
   ============================================================ */

'use strict';

const EXERCISES = window.EXERCISES || [];
const resultsEl = document.getElementById('results');
const emptyEl = document.getElementById('empty');
const countEl = document.getElementById('count');
const statsEl = document.getElementById('stats');
const searchEl = document.getElementById('search');
const clearEl = document.getElementById('clear');
const langChipsEl = document.getElementById('lang-chips');
const catChipsEl = document.getElementById('cat-chips');

const state = { q: '', lang: 'all', cat: 'all' };

/* ---------- Utilidades ---------- */

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
}

/* ---------- Resaltado de sintaxis ---------- */

const KEYWORDS = {
  java: 'abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while true false null String Integer Boolean Character Long Double Float Math List ArrayList Map HashMap Set',
  python: 'and as assert async await break class continue def del elif else except False finally for from global if import in is lambda None nonlocal not or pass raise return True try while with yield print len range abs str int float bool list dict set tuple sorted sum min max',
};

function tokenRules(lang) {
  const kw = new RegExp('\\b(' + KEYWORDS[lang].split(' ').join('|') + ')\\b');
  const comment = lang === 'java'
    ? /\/\/[^\n]*|\/\*[\s\S]*?\*\//
    : /#[^\n]*|"""[\s\S]*?"""/;
  return [
    { cls: 'c', re: comment },
    { cls: 's', re: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/ },
    { cls: 'k', re: kw },
    { cls: 'n', re: /\b\d+(?:\.\d+)?\b/ },
    { cls: 'f', re: /\b[A-Za-z_]\w*(?=\s*\()/ },
  ];
}

function highlight(code, lang) {
  const rules = tokenRules(lang);
  const combined = new RegExp(rules.map(r => '(' + r.re.source + ')').join('|'), 'g');
  let out = '';
  let pos = 0;
  let m;
  while ((m = combined.exec(code)) !== null) {
    out += escapeHtml(code.slice(pos, m.index));
    let cls = 'k';
    for (let i = 0; i < rules.length; i++) {
      if (m[i + 1] !== undefined) { cls = rules[i].cls; break; }
    }
    out += '<span class="tok ' + cls + '">' + escapeHtml(m[0]) + '</span>';
    pos = m.index + m[0].length;
  }
  out += escapeHtml(code.slice(pos));
  return out;
}

/* ---------- Renderizado ---------- */

function rowHtml(ex, idx) {
  const stmt = ex.statement
    ? ex.statement.split(/\n{2,}/)
        .map(p => '<p>' + escapeHtml(p).replace(/\n/g, '<br>') + '</p>')
        .join('')
    : '<p><em>Sin enunciado disponible.</em></p>';

  const examples = ex.examples.length
    ? '<div class="examples"><h4>Ejemplos</h4><ul>' +
      ex.examples.map(x =>
        '<li><code>' + escapeHtml(x).replace('→', '<span class="arrow">→</span>') + '</code></li>'
      ).join('') +
      '</ul></div>'
    : '';

  return (
    '<article class="row" id="ex-' + idx + '">' +
      '<header class="row-head">' +
        '<h2 class="row-title">' + escapeHtml(ex.name) + '()</h2>' +
        '<div class="row-meta">' +
          '<span class="lang lang-' + ex.lang + '">' + ex.lang + '</span>' +
          ' · ' + escapeHtml(ex.category.toLowerCase()) +
          ' · ' + escapeHtml(ex.level.toLowerCase()) +
          ' · ' + escapeHtml(ex.file) +
        '</div>' +
      '</header>' +
      '<div class="statement">' + stmt + '</div>' +
      examples +
      '<div class="code">' +
        '<div class="code-head">' +
          '<span class="code-head__label">solución</span>' +
          '<button class="copy" type="button" data-idx="' + idx + '">copiar</button>' +
        '</div>' +
        '<pre><code>' + highlight(ex.code, ex.lang) + '</code></pre>' +
      '</div>' +
    '</article>'
  );
}

function render() {
  const q = state.q.trim().toLowerCase();
  const list = EXERCISES.filter(ex =>
    (state.lang === 'all' || ex.lang === state.lang) &&
    (state.cat === 'all' || ex.category === state.cat) &&
    (!q ||
      ex.name.toLowerCase().includes(q) ||
      ex.statement.toLowerCase().includes(q) ||
      ex.code.toLowerCase().includes(q))
  );

  resultsEl.innerHTML = list.map((ex, i) => rowHtml(ex, i)).join('');
  emptyEl.hidden = list.length > 0;
  countEl.textContent = list.length === EXERCISES.length
    ? EXERCISES.length + ' ejercicios'
    : list.length + ' de ' + EXERCISES.length + ' ejercicios';
}

/* ---------- Filtros (chips) ---------- */

function makeChip(label, value, active) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'chip' + (active ? ' active' : '');
  btn.textContent = label;
  btn.dataset.value = value;
  return btn;
}

function renderChips() {
  langChipsEl.innerHTML = '';
  for (const [value, label] of [['all', 'todos'], ['java', 'java'], ['python', 'python']]) {
    langChipsEl.appendChild(makeChip(label, value, state.lang === value));
  }

  const order = ['Calentamiento', 'Cadenas', 'Lógica', 'Matrices', 'Listas'];
  const cats = order.filter(c => EXERCISES.some(e => e.category === c));
  const extras = [...new Set(EXERCISES.map(e => e.category))].filter(c => !order.includes(c)).sort();
  catChipsEl.innerHTML = '';
  catChipsEl.appendChild(makeChip('todas', 'all', state.cat === 'all'));
  for (const c of cats.concat(extras)) {
    catChipsEl.appendChild(makeChip(c.toLowerCase(), c, state.cat === c));
  }
}

langChipsEl.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  state.lang = chip.dataset.value;
  renderChips();
  render();
});

catChipsEl.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  state.cat = chip.dataset.value;
  renderChips();
  render();
});

/* ---------- Búsqueda ---------- */

let debounce;
searchEl.addEventListener('input', () => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    state.q = searchEl.value;
    render();
  }, 250);
});

/* ---------- Limpiar filtros ---------- */

clearEl.addEventListener('click', () => {
  state.q = '';
  state.lang = 'all';
  state.cat = 'all';
  searchEl.value = '';
  renderChips();
  render();
});

/* ---------- Nav N8 (flags) ---------- */

document.querySelectorAll('.nav-flag[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.lang = btn.dataset.lang;
    state.q = '';
    searchEl.value = '';
    renderChips();
    render();
    document.getElementById('buscar').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ---------- Copiar solución ---------- */

resultsEl.addEventListener('click', async e => {
  const btn = e.target.closest('.copy');
  if (!btn) return;
  const ex = EXERCISES[Number(btn.dataset.idx)];
  if (!ex) return;
  await copyText(ex.code);
  btn.classList.add('is-copied');
  btn.textContent = 'copiado';
  setTimeout(() => {
    btn.classList.remove('is-copied');
    btn.textContent = 'copiar';
  }, 2500);
});

/* ---------- Inicio ---------- */

function renderStats() {
  const files = new Set(EXERCISES.map(e => e.file));
  const langs = new Set(EXERCISES.map(e => e.lang));
  const cats = new Set(EXERCISES.map(e => e.category));
  const java = EXERCISES.filter(e => e.lang === 'java').length;
  const python = EXERCISES.filter(e => e.lang === 'python').length;
  const year = new Date().getFullYear();
  statsEl.textContent =
    EXERCISES.length + ' ejercicios · ' + java + ' java · ' + python + ' python · ' +
    cats.size + ' categorías · ' + files.size + ' archivos · ' + year;
}

renderStats();
renderChips();
render();
