// Generates the profile README artwork in assets/ (light + dark variants).
// Usage: node scripts/build.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "assets");
mkdirSync(OUT, { recursive: true });

// ---------------------------------------------------------------- content

const STATS = {
  asOf: "OCT 2026",
  items: [
    ["1", "arXiv paper", "v3 · 2026"],
    ["58", "upstream PRs merged", "query engines → agents"],
    ["27", "external repositories", "Rust · Python · TS · C"],
    ["4", "national awards", "incl. 2 first prizes"],
  ],
};

const STACK = ["Rust", "Python", "TypeScript", "C", "MoonBit", "openvela · LVGL", "LLM evaluation"];

const SECTIONS = {
  research: ["01", "FEATURED RESEARCH", "Claim-relative inference", "Ad fontes", "BACK TO THE SOURCES"],
  contrib: ["02", "OPEN-SOURCE CONTRIBUTIONS", "Changes that landed", "Res ipsa loquitur", "THE WORK SPEAKS FOR ITSELF"],
  work: ["03", "SELECTED WORK", "Research tools & systems", "Festina lente", "MAKE HASTE SLOWLY"],
  awards: ["04", "SELECTED RECOGNITION", "Competitions & awards", "Per aspera", "THROUGH THE HARD PARTS"],
};

const PAPER = {
  id: "ARXIV:2608.19269",
  meta: "2026 · V3",
  title: "What Does an Evaluation License? A Commit-Bound Census of Claim-Relative Inference in Inspect Evals",
  abstract:
    "Evaluation artifacts produce scores. They do not automatically bind the historical evidence or alternative semantics needed to replay the claim attached to that score.",
  author: "XI QIN · WUHAN UNIVERSITY",
  triad: [
    ["D", "Frozen substrate", "Versioned inputs, traces, state."],
    ["F", "Grounded family", "Admissible readings + review."],
    ["q", "Claim query", "Score, winner, order, relation."],
  ],
  units: 124,
  done: 14,
  stops: 110,
};

const PRS = [
  { cat: "QUERY ENGINES", owner: "apache", repo: "datafusion", n: 25150, title: "Skip hashing for fully ordered group keys", proof: "Differential tests · cross-batch coverage", add: 779, del: 2, files: 7, date: "2026-10-01" },
  { cat: "SCIENTIFIC PYTHON", owner: "pydata", repo: "xarray", n: 11552, title: "Bring apply_ufunc to DataTree", proof: "323 targeted tests · tree regressions", add: 151, del: 6, files: 4, date: "2026-09-09" },
  { cat: "NUMERICAL METHODS", owner: "awslabs", repo: "stickler", n: 284, title: "Replace sklearn metrics with NumPy", proof: "130 oracle tests · 1,947 portable tests", add: 269, del: 66, files: 10, date: "2026-08-28" },
  { cat: "AGENT SECURITY", owner: "lacs-project", repo: "sysknife", n: 514, title: "Keep credentials out of language-model planning", proof: "1,883 Linux CI tests · parser regressions", add: 305, del: 32, files: 11, date: "2026-10-01" },
  { cat: "DATA SYSTEMS", owner: "AndreaBozzo", repo: "dataprof", n: 655, title: "Read and profile only selected columns", proof: "Rust + 353 Python tests · byte ranges", add: 934, del: 133, files: 24, date: "2026-09-01" },
  { cat: "GEOMETRY", owner: "3b1b", repo: "manim", n: 2501, title: "Fix batched 2D vector rotation", proof: "2D/3D regressions · VectorField repro", add: 53, del: 2, files: 2, date: "2026-08-17" },
];

const WORK = [
  { name: "evalspec-audit", lang: "PYTHON", desc: "Reproducible audits of how evaluation choices affect scores, rankings, and the claims a benchmark supports.", url: "https://github.com/QinXi-ai/evalspec-audit" },
  { name: "FastRead", lang: "PYTHON / TS", desc: "A paper-reading workspace with page-linked evidence, reports, notes, and conversations grounded in the original PDF.", url: "https://github.com/FastR-D/FastRead" },
  { name: "MoonCat · 月薪喵", lang: "C / OPENVELA", desc: "An openvela wearable recovery coach: LVGL interface, scheduled reminders, and on-device INT8 intent routing.", url: "https://github.com/open-vela/contest2026_477_smartband" },
  { name: "moonguard", lang: "MOONBIT", desc: "Public API compatibility checks and semantic-versioning safeguards for MoonBit libraries.", url: "https://github.com/QinXi-ai/moonguard" },
  { name: "AstroTwin", lang: "JAVASCRIPT", desc: "A browser-based astronomy research demo with TESS evidence snapshots, guided analyses, and Qwen-assisted planning.", url: "https://github.com/QinXi-ai/astrotwin-demo" },
  { name: "openvela-smarthome-agent", lang: "C / OPENVELA", desc: "A smart-home agent with simulated devices, a DeepSeek tool-calling loop, and a reproducible offline mode.", url: "https://github.com/QinXi-ai/openvela-smarthome-agent" },
];

const AWARDS = [
  { rank: "I", prize: "First Prize", cn: "一等奖", comp: "CCF Open Source Innovation Competition", track: "openvela Smart Band Track", trackCn: "CCF 开源创新大赛 · 智能手环赛道" },
  { rank: "I", prize: "First Prize", cn: "一等奖", comp: "CCF Quantum Computing Programming Challenge", track: "Origin Quantum Cup", trackCn: "CCF 量子计算编程挑战赛 · 本源杯" },
  { rank: "II", prize: "Second Prize", cn: "二等奖", comp: "National Electrical Mathematical Modeling", track: "CSEE Cup · “Diangong Cup”", trackCn: "全国大学生电工数学建模竞赛 · 电工杯" },
  { rank: "III", prize: "Third Prize", cn: "三等奖", comp: "CCF Open Source Innovation Competition", track: "openvela Smart Home Track", trackCn: "CCF 开源创新大赛 · 智能家居赛道" },
];

const PRINCIPLES = [
  ["Lex me quoque ligat.", "THE LAW BINDS ME TOO."],
  ["In dubio, siste.", "WHEN IN DOUBT, STOP."],
  ["Nihil ultra testimonium.", "NOTHING BEYOND THE EVIDENCE."],
];

// ---------------------------------------------------------------- theme

const THEMES = {
  light: { bg: "#F3F0E8", card: "#F7F5EF", ink: "#1B1D1B", muted: "#6E6B62", rule: "#D8D1C1", line: "#E9E4D8", accent: "#8B2F25", accentBg: "#8B2F2514" },
  dark: { bg: "#151613", card: "#1A1B18", ink: "#ECE7DA", muted: "#9D998C", rule: "#36362F", line: "#1D1E1A", accent: "#D97C69", accentBg: "#D97C691F" },
};

const SERIF = "Georgia, 'Times New Roman', 'Songti SC', 'STSong', SimSun, serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";
const CJK = "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function wrap(text, max) {
  const lines = [];
  let cur = "";
  for (const w of text.split(" ")) {
    if (cur && (cur + " " + w).length > max) { lines.push(cur); cur = w; }
    else cur = cur ? cur + " " + w : w;
  }
  if (cur) lines.push(cur);
  return lines;
}

function svg(w, h, t, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">
<title>${esc(title)}</title>
<style>
.serif{font-family:${SERIF}}
.mono{font-family:${MONO}}
.cjk{font-family:${CJK}}
.ink{fill:${t.ink}}.muted{fill:${t.muted}}.accent{fill:${t.accent}}
.cap{font-family:${MONO};font-size:11px;letter-spacing:2.2px;fill:${t.muted}}
.rise{opacity:0;animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards}
.fade{opacity:0;animation:fade 1.2s ease forwards}
.grow{transform-box:fill-box;transform-origin:left center;transform:scaleX(0);animation:grow 1.4s cubic-bezier(.6,0,.2,1) forwards}
.draw{stroke-dasharray:1000;stroke-dashoffset:1000;animation:draw 2s cubic-bezier(.6,0,.2,1) forwards}
.blink{animation:blink 1.1s steps(1) infinite}
@keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes fade{to{opacity:1}}
@keyframes grow{to{transform:scaleX(1)}}
@keyframes draw{to{stroke-dashoffset:0}}
@keyframes blink{50%{opacity:0}}
@media (prefers-reduced-motion:reduce){.rise,.fade,.grow,.draw,.blink{animation:none;opacity:1;transform:none;stroke-dashoffset:0}}
</style>
${body}
</svg>
`;
}

const d = (s) => `style="animation-delay:${s}s"`;
const frame = (w, h, t) => `<rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="6" fill="${t.card}" stroke="${t.rule}"/>`;
const ruled = (w, h, t, step = 32, from = 0) => {
  let s = "";
  for (let y = from; y < h; y += step) s += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${t.line}" stroke-width="1"/>`;
  return s;
};

// ---------------------------------------------------------------- pieces

function hero(t) {
  const W = 900, H = 380;
  const lead = ["I build research systems that turn ambitious AI", "claims into reproducible, inspectable evidence."];
  return svg(W, H, t, `
<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>
${ruled(W, H, t, 32, 96)}
<line x1="64" y1="64" x2="64" y2="${H}" stroke="${t.accent}" stroke-opacity=".22"/>
<g class="fade" ${d(0)}>
  <text x="40" y="42" class="serif ink" font-size="22" font-style="italic">XQ</text>
  <text x="${W - 40}" y="40" text-anchor="end" class="cap">RESEARCH · OPEN SOURCE · WUHAN UNIVERSITY</text>
  <line x1="40" y1="62" x2="${W - 40}" y2="62" stroke="${t.rule}"/>
</g>
<g class="rise" ${d(0.15)}><text x="88" y="114" class="cap">XI QIN  /  RESEARCH ENGINEER<tspan class="blink" fill="${t.accent}"> ▍</tspan></text></g>
<g class="rise" ${d(0.3)}><text x="86" y="186" class="serif ink" font-size="60" letter-spacing="-1.2">Research should survive</text></g>
<g class="rise" ${d(0.5)}><text x="86" y="254" class="serif ink" font-size="60" letter-spacing="-1.2">contact with <tspan class="accent" font-style="italic">evidence.</tspan></text></g>
<line x1="88" y1="282" x2="168" y2="282" stroke="${t.accent}" stroke-width="2" class="draw" ${d(0.9)}/>
<g class="rise" ${d(0.8)}>
  <text x="88" y="318" class="serif ink" font-size="18">${esc(lead[0])}</text>
  <text x="88" y="344" class="serif ink" font-size="18">${esc(lead[1])}</text>
</g>
<g class="rise" ${d(1.0)}>
  <line x1="630" y1="300" x2="630" y2="352" stroke="${t.accent}" stroke-width="1.5"/>
  <text x="648" y="322" class="serif ink" font-size="21" font-style="italic">Nullius in verba.</text>
  <text x="648" y="346" class="cap" font-size="10">TAKE NOBODY'S WORD FOR IT.</text>
</g>`, "Xi Qin — Research should survive contact with evidence.");
}

function stats(t) {
  const W = 900, H = 132, col = (W - 80) / 4;
  let body = `<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>
<line x1="40" y1="0.5" x2="${W - 40}" y2="0.5" stroke="${t.rule}"/>
<line x1="40" y1="${H - 0.5}" x2="${W - 40}" y2="${H - 0.5}" stroke="${t.rule}"/>`;
  STATS.items.forEach(([n, label, sub], i) => {
    const x = 40 + i * col;
    if (i) body += `<line x1="${x}" y1="28" x2="${x}" y2="${H - 28}" stroke="${t.rule}"/>`;
    body += `<g class="rise" ${d(0.1 + i * 0.12)}>
  <text x="${x + (i ? 24 : 0)}" y="70" class="serif ${i === 1 ? "accent" : "ink"}" font-size="46" letter-spacing="-1">${n}</text>
  <text x="${x + (i ? 24 : 0)}" y="94" class="mono ink" font-size="12" letter-spacing=".4">${esc(label)}</text>
  <text x="${x + (i ? 24 : 0)}" y="112" class="mono muted" font-size="10.5">${esc(sub)}</text>
</g>`;
  });
  body += `<text x="${W - 40}" y="22" text-anchor="end" class="cap" font-size="9">AS OF ${STATS.asOf}</text>`;
  return svg(W, H, t, body, "1 arXiv paper · 58 upstream PRs merged · 27 external repositories · 4 national awards");
}

function stack(t) {
  const W = 900, H = 64, cw = 7.25;
  let x = 120, body = `<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>
<text x="40" y="37" class="cap" font-size="10">WORKS IN</text>`;
  STACK.forEach((s, i) => {
    const w = s.length * cw + 26;
    body += `<g class="rise" ${d(0.05 * i)}><rect x="${x}" y="18" width="${w}" height="28" rx="14" fill="${i === 0 ? t.accentBg : "none"}" stroke="${i === 0 ? t.accent : t.rule}"/>
<text x="${x + w / 2}" y="36.5" text-anchor="middle" class="mono ${i === 0 ? "accent" : "ink"}" font-size="12">${esc(s)}</text></g>`;
    x += w + 8;
  });
  return svg(W, H, t, body, "Works in: " + STACK.join(", "));
}

function section(t, key) {
  const [num, cap, title, latin, gloss] = SECTIONS[key];
  const W = 900, H = 112;
  return svg(W, H, t, `
<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>
<g class="rise">
  <text x="40" y="40" class="mono accent" font-size="12" letter-spacing="2">${num}</text>
  <line x1="66" y1="36" x2="96" y2="36" stroke="${t.accent}"/>
  <text x="106" y="40" class="cap">${esc(cap)}</text>
  <text x="40" y="86" class="serif ink" font-size="36" letter-spacing="-.6">${esc(title)}</text>
</g>
<g class="fade" ${d(0.3)}>
  <text x="${W - 40}" y="66" text-anchor="end" class="serif accent" font-size="18" font-style="italic">${esc(latin)}</text>
  <text x="${W - 40}" y="86" text-anchor="end" class="cap" font-size="9">${esc(gloss)}</text>
</g>
<line x1="40" y1="${H - 1}" x2="${W - 40}" y2="${H - 1}" stroke="${t.rule}" class="draw" ${d(0.2)}/>`, `${num} ${cap} — ${title}`);
}

function paper(t) {
  const W = 900, P = PAPER;
  const title = wrap(P.title, 52), abs = wrap(P.abstract, 92);
  let body = `
<g class="fade">
  <text x="44" y="46" class="mono accent" font-size="12" letter-spacing="1.5">${P.id}  ·  ${P.meta}</text>
  <text x="${W - 40}" y="46" text-anchor="end" class="cap" font-size="10">READ ON ARXIV ↗</text>
</g>`;
  title.forEach((l, i) => (body += `<g class="rise" ${d(0.1 + i * 0.1)}><text x="44" y="${92 + i * 36}" class="serif ink" font-size="28" letter-spacing="-.3">${esc(l)}</text></g>`));
  let y = 92 + title.length * 36 + 6;
  abs.forEach((l, i) => (body += `<text x="44" y="${y + i * 24}" class="serif muted fade" font-size="15.5" font-style="italic" ${d(0.4)}>${esc(l)}</text>`));
  y += abs.length * 24 + 12;
  body += `<text x="44" y="${y}" class="cap" font-size="10">${P.author}</text>`;
  y += 26;
  body += `<line x1="44" y1="${y}" x2="${W - 40}" y2="${y}" stroke="${t.rule}"/>`;
  const cw = (W - 84) / 3;
  P.triad.forEach(([g, h, s], i) => {
    const x = 44 + i * cw;
    body += `<g class="rise" ${d(0.5 + i * 0.12)}>
  <text x="${x}" y="${y + 56}" class="serif accent" font-size="40" font-style="italic">${g}</text>
  <text x="${x + 42}" y="${y + 38}" class="serif ink" font-size="17">${esc(h)}</text>
  <text x="${x + 42}" y="${y + 58}" class="mono muted" font-size="10.5">${esc(s)}</text>
</g>`;
    if (i < 2) body += `<text x="${x + cw - 22}" y="${y + 50}" class="mono muted" font-size="14">→</text>`;
  });
  y += 84;
  body += `<line x1="44" y1="${y}" x2="${W - 40}" y2="${y}" stroke="${t.rule}"/>`;
  // census bar: 14 completed vs 110 typed stops out of 124 eligible units
  const bx = 44, bw = W - 84, by = y + 74, done = (bw * P.done) / P.units;
  body += `
<g class="fade" ${d(0.7)}>
  <text x="${bx}" y="${y + 44}" class="serif ink" font-size="30">${P.units}</text>
  <text x="${bx + 62}" y="${y + 43}" class="cap" font-size="9.5">MECHANICALLY ELIGIBLE UNITS</text>
  <text x="${bx + 380}" y="${y + 44}" class="serif accent" font-size="30">${P.done}</text>
  <text x="${bx + 418}" y="${y + 43}" class="cap" font-size="9.5">ANALYSES</text>
  <text x="${bx + 560}" y="${y + 44}" class="serif ink" font-size="30">${P.stops}</text>
  <text x="${bx + 616}" y="${y + 43}" class="cap" font-size="9.5">TYPED STOPS</text>
</g>
<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="${t.muted}" stroke-opacity=".45" stroke-width="2"/></pattern></defs>
<rect x="${bx}" y="${by}" width="${bw}" height="14" rx="2" fill="${t.line}" stroke="${t.rule}"/>
<rect x="${bx + done}" y="${by}" width="${bw - done}" height="14" fill="url(#hatch)" class="grow" ${d(1.1)}/>
<rect x="${bx}" y="${by}" width="${done}" height="14" rx="2" fill="${t.accent}" class="grow" ${d(0.8)}/>
<text x="${bx}" y="${by + 36}" class="mono muted" font-size="10.5">Every unit gets a terminal record. A STOP is not a zero score — it names the first missing object.</text>`;
  const H = by + 58;
  return svg(W, H, t, `${frame(W, H, t)}
<rect x="0" y="0" width="5" height="${H}" rx="2" fill="${t.accent}"/>` + body, `${P.id}: ${P.title}`);
}

function diffBlocks(add, del, x, y, t) {
  const total = add + del, blocks = 5;
  const a = del === 0 ? blocks : Math.max(1, Math.min(blocks - 1, Math.round((add / total) * blocks)));
  let s = "";
  for (let i = 0; i < blocks; i++) s += `<rect x="${x + i * 10}" y="${y}" width="8" height="8" rx="1.5" fill="${i < a ? t.ink : t.accent}"/>`;
  return s;
}

function prCard(t, p, i) {
  const W = 440, H = 216;
  const lines = wrap(p.title, 33).slice(0, 2);
  let body = `${frame(W, H, t)}
<g class="fade">
  <text x="26" y="36" class="mono accent" font-size="11" letter-spacing="1.5">${String(i + 1).padStart(2, "0")}</text>
  <text x="52" y="36" class="cap" font-size="9.5">${esc(p.cat)}</text>
  <rect x="${W - 96}" y="21" width="70" height="21" rx="10.5" fill="${t.accentBg}" stroke="${t.accent}" stroke-opacity=".6"/>
  <circle cx="${W - 83}" cy="31.5" r="3" fill="${t.accent}"/>
  <text x="${W - 54}" y="35.5" text-anchor="middle" class="mono accent" font-size="9.5" letter-spacing="1.2">MERGED</text>
</g>
<text x="26" y="70" class="mono ink" font-size="12.5">${esc(p.owner)} / <tspan font-weight="700">${esc(p.repo)}</tspan><tspan class="muted"> #${p.n}</tspan></text>`;
  lines.forEach((l, j) => (body += `<g class="rise" ${d(0.1 + j * 0.08)}><text x="26" y="${106 + j * 28}" class="serif ink" font-size="22" letter-spacing="-.2">${esc(l)}</text></g>`));
  body += `
<text x="26" y="${lines.length > 1 ? 160 : 132}" class="mono muted" font-size="10">${esc(p.proof)}</text>
<line x1="26" y1="178" x2="${W - 26}" y2="178" stroke="${t.rule}"/>
<text x="26" y="200" class="mono ink" font-size="11">+${p.add.toLocaleString("en")}<tspan class="accent"> −${p.del}</tspan><tspan class="muted"> · ${p.files} files</tspan></text>
${diffBlocks(p.add, p.del, 26 + 150, 192, t)}
<text x="${W - 26}" y="200" text-anchor="end" class="mono muted" font-size="10">${p.date}</text>`;
  return svg(W, H, t, body, `${p.owner}/${p.repo}#${p.n} — ${p.title} (merged ${p.date})`);
}

function workCard(t, w, i) {
  const W = 440, H = 176;
  const desc = wrap(w.desc, 56).slice(0, 3);
  let body = `${frame(W, H, t)}
<text x="26" y="36" class="mono accent" font-size="11" letter-spacing="1.5">${String(i + 1).padStart(2, "0")}</text>
<text x="${W - 26}" y="36" text-anchor="end" class="cap" font-size="9.5">${esc(w.lang)}</text>
<g class="rise"><text x="26" y="74" class="serif ink" font-size="23" letter-spacing="-.2">${esc(w.name)}<tspan class="accent" font-size="16"> ↗</tspan></text></g>`;
  desc.forEach((l, j) => (body += `<text x="26" y="${106 + j * 21}" class="serif muted fade" font-size="14.5" ${d(0.2)}>${esc(l)}</text>`));
  return svg(W, H, t, body, `${w.name} — ${w.desc}`);
}

function awards(t) {
  const W = 900, row = 92, top = 20, H = top + AWARDS.length * row + 46;
  let body = `<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>`;
  AWARDS.forEach((a, i) => {
    const y = top + i * row;
    const first = a.rank === "I";
    body += `<g class="rise" ${d(0.1 + i * 0.12)}>
  <circle cx="72" cy="${y + 44}" r="26" fill="${first ? t.accentBg : "none"}" stroke="${first ? t.accent : t.rule}" stroke-width="1.5"/>
  <text x="72" y="${y + 51}" text-anchor="middle" class="serif ${first ? "accent" : "ink"}" font-size="20" font-style="italic">${a.rank}</text>
  <text x="124" y="${y + 40}" class="serif ${first ? "accent" : "ink"}" font-size="21" font-style="italic">${esc(a.prize)}</text>
  <text x="124" y="${y + 64}" class="cjk muted" font-size="13">${esc(a.cn)}</text>
  <text x="290" y="${y + 38}" class="serif ink" font-size="18.5">${esc(a.comp)}</text>
  <text x="290" y="${y + 62}" class="mono muted" font-size="11">${esc(a.track)}<tspan class="cjk" font-size="12.5">  ·  ${esc(a.trackCn)}</tspan></text>
  <text x="${W - 40}" y="${y + 38}" text-anchor="end" class="mono muted" font-size="11" letter-spacing="1.5">2026</text>
</g>`;
    body += `<line x1="40" y1="${y + row - 0.5}" x2="${W - 40}" y2="${y + row - 0.5}" stroke="${t.rule}"/>`;
  });
  body += `<text x="40" y="${H - 16}" class="mono muted" font-size="10">CCF Open Source Innovation Competition 2026 · 586 valid entries · 34 first prizes across all tracks</text>`;
  return svg(W, H, t, body, "Awards: CCF Open Source Innovation Competition first and third prizes, CCF Quantum Computing Challenge first prize, National Electrical Math Modeling second prize (2026)");
}

function principles(t) {
  const W = 900, H = 300, col = (W - 80) / 3;
  let body = `<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>
${ruled(W, H, t, 32, 32)}
<text x="40" y="44" class="cap">THREE OPERATING PRINCIPLES</text>
<text x="40" y="90" class="serif ink" font-size="34" letter-spacing="-.5">Bound by the record</text>`;
  PRINCIPLES.forEach(([la, en], i) => {
    const x = 40 + i * col;
    body += `<g class="rise" ${d(0.15 + i * 0.15)}>
  <line x1="${x}" y1="124" x2="${x + col - 24}" y2="124" stroke="${t.ink}"/>
  <text x="${x}" y="150" class="mono accent" font-size="11" letter-spacing="1.5">0${i + 1}</text>
  <text x="${x}" y="186" class="serif ink" font-size="21" font-style="italic">${esc(la)}</text>
  <text x="${x}" y="210" class="cap" font-size="9">${esc(en)}</text>
</g>`;
  });
  body += `
<line x1="40" y1="244" x2="${W - 40}" y2="244" stroke="${t.rule}"/>
<text x="40" y="276" class="serif accent" font-size="20" font-style="italic">Festina lente.</text>
<text x="190" y="275" class="cap" font-size="9">MAKE HASTE SLOWLY.</text>
<text x="${W - 40}" y="275" text-anchor="end" class="mono ink" font-size="11.5" letter-spacing="1">LET'S COMPARE NOTES <tspan class="accent">→</tspan></text>`;
  return svg(W, H, t, body, "Principles: Lex me quoque ligat. In dubio, siste. Nihil ultra testimonium. Festina lente.");
}

// ---------------------------------------------------------------- write

for (const [name, t] of Object.entries(THEMES)) {
  const put = (file, s) => writeFileSync(join(OUT, `${file}-${name}.svg`), s);
  put("hero", hero(t));
  put("stats", stats(t));
  put("stack", stack(t));
  for (const k of Object.keys(SECTIONS)) put(`section-${k}`, section(t, k));
  put("paper", paper(t));
  PRS.forEach((p, i) => put(`pr-${i + 1}`, prCard(t, p, i)));
  WORK.forEach((w, i) => put(`work-${i + 1}`, workCard(t, w, i)));
  put("awards", awards(t));
  put("principles", principles(t));
}

// ---------------------------------------------------------------- README

const MERGED = "https://github.com/search?q=is%3Apr+author%3AQinXi-ai+is%3Amerged+is%3Apublic&type=pullrequests";
const pic = (name, alt, w = "100%") =>
  `<picture><source media="(prefers-color-scheme: dark)" srcset="assets/${name}-dark.svg"><img src="assets/${name}-light.svg" alt="${esc(alt)}" width="${w}"></picture>`;
const link = (href, inner) => `<a href="${href}">${inner}</a>`;
// Cards go two per line; a newline between them would render as <br>.
const pairs = (cards) => cards.reduce((rows, c, i) => (i % 2 ? (rows[rows.length - 1] += " " + c) : rows.push(c), rows), []).join("\n\n");

const README = `<!-- Artwork is generated: edit scripts/build.mjs, then run \`node scripts/build.mjs\`. -->

${link("https://qinxi-ai.github.io/", pic("hero", "Xi Qin — Research should survive contact with evidence. I build research systems that turn ambitious AI claims into reproducible, inspectable evidence."))}

<p align="center">
  <a href="https://qinxi-ai.github.io/"><b>Research archive</b></a> &nbsp;·&nbsp;
  <a href="https://arxiv.org/abs/${PAPER.id.split(":")[1]}">arXiv paper</a> &nbsp;·&nbsp;
  <a href="${MERGED}">Merged pull requests</a> &nbsp;·&nbsp;
  <a href="mailto:3624951962qx@gmail.com">Email</a>
</p>

${link(MERGED, pic("stats", STATS.items.map(([n, l]) => `${n} ${l}`).join(", ")))}
${pic("stack", "Works in " + STACK.join(", "))}

<br>

${pic("section-research", "01 Featured research — Claim-relative inference")}

${link(`https://arxiv.org/abs/${PAPER.id.split(":")[1]}`, pic("paper", `${PAPER.id} — ${PAPER.title}. ${PAPER.units} eligible units, ${PAPER.done} deterministic analyses, ${PAPER.stops} typed stops.`))}

<br>

${pic("section-contrib", "02 Open-source contributions — Changes that landed")}

${pairs(PRS.map((p, i) => link(`https://github.com/${p.owner}/${p.repo}/pull/${p.n}`, pic(`pr-${i + 1}`, `${p.owner}/${p.repo}#${p.n}: ${p.title}`, "49%"))))}

<p align="right"><a href="${MERGED}"><code>All ${STATS.items[1][0]} merged pull requests →</code></a></p>

${pic("section-work", "03 Selected work — Research tools and systems")}

${pairs(WORK.map((w, i) => link(w.url, pic(`work-${i + 1}`, `${w.name}: ${w.desc}`, "49%"))))}

<br>

${pic("section-awards", "04 Selected recognition — Competitions and awards")}

${link("https://qinxi-ai.github.io/#recognition", pic("awards", "2026 — " + AWARDS.map((a) => `${a.comp}, ${a.track}: ${a.prize}`).join("; ")))}

<br>

${link("mailto:3624951962qx@gmail.com", pic("principles", "Bound by the record: " + PRINCIPLES.map(([la]) => la).join(" ") + " Festina lente. Let's compare notes."))}

<p align="center"><sub><i>Nullius in verba.</i> &nbsp;·&nbsp; <a href="https://qinxi-ai.github.io/">qinxi-ai.github.io</a></sub></p>
`;
writeFileSync(join(OUT, "..", "README.md"), README);
console.log("wrote", OUT, "and README.md");
