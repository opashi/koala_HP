const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const pages = ['index', 'company', 'message', 'services', 'strength', 'news', 'seitai', 'rebody', 'lp-tool', 'contact', 'privacy'];

test('motion is progressive, finite and respects reduced motion', () => {
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  assert.match(app, /prefers-reduced-motion: reduce/);
  assert.match(app, /observer\.unobserve\(element\)/);
  assert.match(app, /preference\.addEventListener\('change', updateMotion\)/);
  assert.match(app, /document\.addEventListener\('focusin'/);
  assert.match(css, /prefers-reduced-motion: no-preference/);
  assert.doesNotMatch(css, /\binfinite\b/);
});

test('navigation has dedicated pages and nested company and service links', () => {
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  for (const [name, renderer] of [['services', 'servicesPage'], ['strength', 'strengthPage'], ['news', 'newsPage']]) {
    assert.ok(app.includes(`pageName === '${name}.html') content = ${renderer}()`));
    assert.ok(app.includes(`href: '${name}.html'`));
  }
  assert.match(app, /id: 'company', children:/);
  assert.match(app, /id: 'services', children:/);
  assert.match(app, /title: '社長あいさつ', href: 'message.html'/);
  assert.match(app, /aria-expanded="false" aria-controls="submenu-/);
  assert.doesNotMatch(app, /href="index\.html#(?:services|strength|news)"/);
});

test('president message is routed and linked with the confirmed representative', () => {
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(app, /pageName === 'message\.html'\) content = presidentMessage\(\)/);
  assert.match(app, /class="company-message-link" href="message\.html"/);
  assert.match(app, /title: '社長あいさつ', href: 'message.html'/);
  assert.match(app, /<dt>代表者<\/dt><dd>代表取締役社長　丸山 拓海<\/dd>/);
  assert.match(app, /class="president-signature">.*<strong>丸山 拓海<\/strong>/);
  assert.match(app, /src="images\/maruyama\.jpeg" alt="代表取締役社長 丸山 拓海"/);
  assert.ok(fs.statSync(path.join(root, 'images', 'maruyama.jpeg')).size > 0);
  const server = fs.readFileSync(path.join(root, 'server.js'), 'utf8');
  assert.match(server, /'\.jpeg': 'image\/jpeg'/);
});

test('company profile and history show the planned establishment date', () => {
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(app, /<dt>設立<\/dt><dd><time datetime="2026-11">2026年11月<\/time>（予定）/);
  assert.match(app, /<h2 id="history-title">沿革<\/h2>/);
  assert.match(app, /<ol class="history-timeline">/);
  assert.match(app, /<time class="history-date" datetime="2026-11" aria-label="2026年11月">/);
  assert.match(app, /<h3>株式会社こあら設立予定<\/h3>/);
});

test('all pages have Japanese metadata and shared assets', () => {
  for (const page of pages) {
    const html = fs.readFileSync(path.join(root, `${page}.html`), 'utf8');
    assert.match(html, /<html lang="ja">/);
    assert.match(html, /name="viewport"/);
    assert.match(html, /name="description"/);
    assert.match(html, /src="app\.js" defer/);
    assert.match(html, /href="styles\.css"/);
  }
});

test('all local stylesheet images exist', () => {
  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  for (const [, image] of css.matchAll(/url\("([^"]+)"\)/g)) {
    assert.ok(fs.existsSync(path.join(root, image)), `Missing image: ${image}`);
  }
  for (const image of ['logo.png', 'icon.png']) {
    assert.ok(fs.statSync(path.join(root, 'images', image)).size > 0);
  }
});

test('service navigation targets exist and no external runtime resources are used', () => {
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  for (const [, target] of app.matchAll(/href: '([^']+\.html)'/g)) {
    assert.ok(fs.existsSync(path.join(root, target)), `Missing page: ${target}`);
  }
  assert.doesNotMatch(app, /fetch\(|https?:\/\//);
  assert.match(app, /入力内容はサーバーに送信・保存されません/);
});
