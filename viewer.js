const $ = id => document.getElementById(id);
const slider = $('slider'), previous = $('previous'), next = $('next'), status = $('status');
let charts = [], current = 0, ticket = 0, visible = null;
const cache = new Map();
function image(url) {
  if (!cache.has(url)) {
    const pending = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => img.decode().then(() => resolve(img)).catch(reject);
      img.onerror = () => reject(new Error('Could not load chart image.'));
      img.src = url;
    }).catch(error => { cache.delete(url); throw error; });
    cache.set(url, pending);
    while (cache.size > 8) cache.delete(cache.keys().next().value);
  }
  return cache.get(url);
}
function fit() {
  if (!visible) return;
  const boxes = [$('left'), $('right')];
  const scale = Math.min(1, ...visible.map((img, i) => boxes[i].clientWidth / img.naturalWidth),
    ...visible.map((img, i) => boxes[i].clientHeight / img.naturalHeight));
  visible.forEach(img => { img.style.width = img.naturalWidth * scale + 'px'; img.style.height = img.naturalHeight * scale + 'px'; });
}
async function show(index) {
  current = Math.max(0, Math.min(charts.length - 1, index));
  const turn = ++ticket, chart = charts[current];
  slider.value = current;
  slider.setAttribute('aria-valuetext', chart.id);
  previous.disabled = current === 0; next.disabled = current === charts.length - 1;
  $('number').textContent = chart.id.slice(3);
  $('position').textContent = (current + 1) + ' / ' + charts.length;
  history.replaceState(null, '', '#' + chart.id);
  status.textContent = 'Loading…';
  // Hide the old pair immediately so its images are never labeled as a new chart.
  $('comparison').style.visibility = 'hidden';
  try {
    const pair = await Promise.all([image(chart.vegaLite), image(chart.ggaction)]);
    if (turn !== ticket) return;
    pair[0].alt = 'Vega-Lite chart ' + chart.id.slice(3);
    pair[1].alt = 'ggaction chart ' + chart.id.slice(3);
    $('left').replaceChildren(pair[0]); $('right').replaceChildren(pair[1]);
    visible = pair; fit(); $('comparison').style.visibility = 'visible';
    $('comparison').dataset.chart = chart.id; status.textContent = '';
    for (const neighbor of [charts[current - 1], charts[current + 1]]) if (neighbor) {
      image(neighbor.vegaLite).catch(() => {}); image(neighbor.ggaction).catch(() => {});
    }
  } catch (error) { if (turn === ticket) status.textContent = error.message; }
}
function fromHash() { const i = charts.findIndex(chart => chart.id === location.hash.slice(1)); return i < 0 ? 0 : i; }
previous.addEventListener('click', () => show(current - 1));
next.addEventListener('click', () => show(current + 1));
slider.addEventListener('input', () => show(Number(slider.value)));
window.addEventListener('hashchange', () => show(fromHash()));
window.addEventListener('resize', fit);
document.addEventListener('keydown', event => {
  if (!charts.length || event.target === slider || event.altKey || event.ctrlKey || event.metaKey) return;
  const index = {ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: charts.length - 1}[event.key];
  if (index !== undefined) { event.preventDefault(); show(index); }
});
try {
  const response = await fetch('manifest.json');
  if (!response.ok) throw new Error('Could not load chart list.');
  const manifest = await response.json(); charts = manifest.charts;
  if (!charts.length) throw new Error('No charts available.');
  slider.max = charts.length - 1; slider.disabled = false;
  await show(fromHash());
} catch (error) { status.textContent = error.message; }
