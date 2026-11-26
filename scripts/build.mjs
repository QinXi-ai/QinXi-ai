// Generates the profile README artwork in assets/ (light + dark variants).
// Usage: node scripts/build.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "assets");
mkdirSync(OUT, { recursive: true });

// ---------------------------------------------------------------- content

const STATS = {
  asOf: "RESEARCH & OPEN SOURCE · 25 NOV 2026",
  items: [
    ["4", "research papers", "1 accepted · 3 preprints"],
    ["98", "public PRs merged", "GPU kernels → agents"],
    ["28", "repositories", "outside personal namespace"],
    ["4", "competition awards", "incl. 2 first prizes"],
  ],
};

const STACK = ["Rust", "Python", "Mojo", "Lean 4", "TypeScript", "C", "MoonBit", "openvela · LVGL"];

const SECTIONS = {
  research: ["01", "SELECTED RESEARCH", "Questions, made precise.", "Ad fontes", "BACK TO THE SOURCES"],
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
  { cat: "GPU & MOJO", owner: "dllm-labs", repo: "mojo-dllm", n: 175, title: "Calibrate DiffusionGemma parity on fixed reference inputs", proof: "Fixed-reference parity · cached path checks", add: 10825, del: 129, files: 20, date: "2026-11-24" },
  { cat: "AGENT SECURITY", owner: "lacs-project", repo: "sysknife", n: 786, title: "Export both audit chains and verify them offline", proof: "Tamper-detection · offline chain audit", add: 306, del: 28, files: 11, date: "2026-11-15" },
  { cat: "QUERY ENGINES", owner: "apache", repo: "datafusion", n: 25988, title: "Add opt-in native grouped integer DISTINCT counts", proof: "SQL logic tests · accumulator benchmarks", add: 779, del: 12, files: 21, date: "2026-11-08" },
  { cat: "GPU & MOJO", owner: "dllm-labs", repo: "mojo-dllm", n: 73, title: "Batch long GQA loads without changing softmax order", proof: "Order-preserving numerical checks", add: 7108, del: 82, files: 12, date: "2026-11-04" },
  { cat: "GPU & MOJO", owner: "dllm-labs", repo: "mojo-dllm", n: 71, title: "Tune Q4_K tile dispatch for RTX Blackwell", proof: "RTX PRO 6000D benchmarks · kernel parity", add: 5739, del: 14, files: 19, date: "2026-11-03" },
  { cat: "QUERY ENGINES", owner: "apache", repo: "datafusion", n: 25765, title: "Serialize lazy generators through hooks", proof: "Wire compatibility · round-trip execution", add: 804, del: 240, files: 11, date: "2026-10-19" },
  { cat: "DEVELOPER TOOLS", owner: "microsoft", repo: "vscode-eslint", n: 2227, title: "Keep linting inside the workspace", proof: "Opt-in boundary · virtual-file support", add: 229, del: 73, files: 8, date: "2026-10-16" },
  { cat: "SCIENTIFIC PYTHON", owner: "pydata", repo: "xarray", n: 11552, title: "Bring apply_ufunc to DataTree", proof: "323 targeted tests · tree regressions", add: 151, del: 6, files: 4, date: "2026-09-09" },
];

const WORK = [
  { name: "identity-testing-lean", lang: "LEAN 4", desc: "530-module Lean 4 formalization of instance-optimal identity testing at the original TV radius, with certified rational interval evaluation.", url: "https://github.com/QinXi-ai/identity-testing-lean" },
  { name: "Pocket MOSS Image", lang: "PYTHON / PYTORCH", desc: "Low-memory MOSS-Image inference: the original 9B text encoder with packed INT6 weights and a streamed, fused INT8 DiT. No retraining or replacement encoder.", url: "https://github.com/QinXi-ai/pocket-moss-image" },
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
.rise,.fade,.grow,.draw,.blink{opacity:1;transform:none;stroke-dashoffset:0}
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
  const W = 900, H = 400;
  return svg(W, H, t, `
<rect width="${W}" height="${H}" rx="8" fill="${t.bg}"/>
<g class="fade" ${d(0)}>
  <text x="40" y="42" class="serif ink" font-size="22" font-style="italic">XQ</text>
  <text x="85" y="40" class="mono ink" font-size="12">XI QIN</text>
  <text x="${W - 40}" y="40" text-anchor="end" class="cap">RESEARCH · OPEN SOURCE · 2026</text>
  <line x1="40" y1="62" x2="${W - 40}" y2="62" stroke="${t.rule}"/>
</g>
<text x="40" y="104" class="cap">WUHAN UNIVERSITY</text>
<g class="rise" ${d(.1)}><text x="38" y="171" class="serif ink" font-size="58" letter-spacing="-1.5">From first <tspan class="accent" font-style="italic">principles</tspan></text></g>
<g class="rise" ${d(.25)}><text x="38" y="235" class="serif ink" font-size="58" letter-spacing="-1.5">to working code.</text></g>
<g class="fade" ${d(.4)}>
  <text x="40" y="286" class="serif muted" font-size="18">Learning theory. Reproducible AI evaluation.</text>
  <text x="40" y="312" class="serif muted" font-size="18">Open-source systems that put ideas to work.</text>
</g>
<g transform="translate(590 75)" fill="none" stroke="${t.ink}" stroke-width="1">
  <circle cx="130" cy="130" r="112" opacity=".2"/>
  <circle cx="130" cy="130" r="76" opacity=".1"/>
  <path d="M0 130H260M130 0V260" opacity=".15"/>
  <path d="M130 18 23 188 237 188Z M130 18 130 243 23 188 M130 243 237 188" class="draw" opacity=".7" ${d(.3)}/>
  <path d="M130 18V243 M23 188 130 130 237 188" stroke-dasharray="4 5" opacity=".35"/>
  <path d="M130 18 23 188 237 188Z" fill="${t.accent}" fill-opacity=".06" stroke="none"/>
  ${[[130,18],[23,188],[237,188],[130,243]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="${t.bg}" stroke="${t.accent}" stroke-width="1.5"/>`).join("")}
  <circle cx="130" cy="130" r="4" fill="${t.accent}" stroke="none"/>
</g>
<line x1="40" y1="344" x2="860" y2="344" stroke="${t.rule}"/>
<text x="40" y="375" class="serif accent" font-size="18" font-style="italic">Omnes montes tandem flectentur.</text>
<text x="860" y="374" text-anchor="end" class="cap">IDEAS WORTH PROVING. SYSTEMS WORTH BUILDING.</text>
`, "Xi Qin — From first principles to working code. Omnes montes tandem flectentur.");
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
  body += `<text x="${W - 40}" y="22" text-anchor="end" class="cap" font-size="9">${esc(STATS.asOf)}</text>`;
  return svg(W, H, t, body, STATS.items.map(([n, label]) => `${n} ${label}`).join(" · "));
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

const MERGED = "https://github.com/search?q=is%3Apr+author%3AQinXi-ai+is%3Amerged+is%3Apublic+-user%3AQinXi-ai&type=pullrequests";
const pic = (name, alt, w = "100%") =>
  `<picture><source media="(prefers-color-scheme: dark)" srcset="assets/${name}-dark.svg"><img src="assets/${name}-light.svg" alt="${esc(alt)}" width="${w}"></picture>`;
const link = (href, inner) => `<a href="${href}">${inner}</a>`;
// Cards go two per line; a newline between them would render as <br>.
const pairs = (cards) => cards.reduce((rows, c, i) => (i % 2 ? (rows[rows.length - 1] += " " + c) : rows.push(c), rows), []).join("\n\n");

const README = `<!-- Artwork is generated: edit scripts/build.mjs, then run \`node scripts/build.mjs\`. -->

${link("https://qinxi-ai.github.io/", pic("hero", "Xi Qin at Wuhan University — From first principles to working code. Learning theory, reproducible AI evaluation, and open-source engineering. Omnes montes tandem flectentur."))}

<p align="center">
  <a href="https://qinxi-ai.github.io/"><b>Personal website</b></a> &nbsp;·&nbsp;
  <a href="#failure-steps-are-not-repair-intents">Latest paper</a> &nbsp;·&nbsp;
  <a href="${MERGED}">Merged pull requests</a> &nbsp;·&nbsp;
  <a href="mailto:3624951962qx@gmail.com">Email</a>
</p>

${link(MERGED, pic("stats", STATS.items.map(([n, l]) => `${n} ${l}`).join(", ")))}
<p align="center"><sub>Research &amp; open-source snapshot updated 25 November 2026 · Public merged PRs outside my personal namespace</sub></p>

## 01 / Selected research

<a id="failure-steps-are-not-repair-intents"></a>

### Failure Steps Are Not Repair Intents: Measuring Actionable Ambiguity in Multi-Agent System Diagnosis

**WSDM 2027 Findings · Accepted · First author: Xi Qin**

Do different blamed execution steps imply different repairs? We study expert-recommended actions from MP-Bench through a prediction-blind, human-audited model-assisted analysis of **96 multi-agent traces** and **1,436 actions**.

In the primary analysis, **85.1% of traces** contain fewer distinct repair intents than blamed steps, while top repair-set alignment reaches **95.7%**. The findings show how step-level evaluation can overstate actionable diversity while often preserving the first repair priority.

### [Instance-Optimal Identity Testing at the Original Total-Variation Radius: Resolving Canonne's 2024 Open Question 1](https://zenodo.org/records/23584756)

**Latest preprint · Distribution testing · 23 October 2026**

How many samples are needed to test whether an unknown distribution equals a specified reference—at the total-variation radius actually given? I give an explicit characterization, up to universal constants, for every finite or countable reference distribution at the original radius.

The preprint resolves **Canonne's COLT 2024 Open Question 1** in the countable-alphabet model, with matching upper and lower bounds and a polynomial-time factor-two approximation for explicit rational input.

[Read the paper ↗](https://zenodo.org/records/23584756/files/instance_optimal_identity_testing_v1.pdf) · [LaTeX source ↓](https://zenodo.org/records/23584756/files/instance_optimal_identity_testing_v1_source.zip) · [Lean 4 proof (530 modules) ↗](https://github.com/QinXi-ai/identity-testing-lean) · [DOI: 10.5281/zenodo.23584756](https://doi.org/10.5281/zenodo.23584756)

### [Exact Three-Example Selection in Every Dimension](https://zenodo.org/records/23119254)

**Preprint · Learning theory · 3 October 2026**

How much can you lose by keeping just three examples? I determine the exact worst-case risk inflation for mean regression when selecting three support points, with repetition allowed, and predicting their equally weighted mean—in every dimension.

The result resolves the **n = 3 column** of the data-selection question posed at COLT 2025, with sharp constants and a characterization of the extremal geometry.

[Read the paper ↗](https://zenodo.org/records/23119254/files/exact-three-example-selection.pdf) · [Source & verification scripts ↓](https://zenodo.org/records/23119254/files/exact-three-example-selection-source-v1.0.zip) · [DOI: 10.5281/zenodo.23119254](https://doi.org/10.5281/zenodo.23119254)

### [What Does an Evaluation License?](https://arxiv.org/abs/2608.19269)

**Preprint · AI evaluation · arXiv:2608.19269 · v3**

*A Commit-Bound Census of Claim-Relative Inference in Inspect Evals.*
A framework for connecting evaluation artifacts to the claims they support. The census records **124 eligible units**, **14 deterministic analyses**, and **110 typed stops** that identify missing evidence.

[Read on arXiv ↗](https://arxiv.org/abs/2608.19269) · [Code ↗](https://github.com/QinXi-ai/evalspec-audit)

## 02 / Open-source contributions

**31 PRs merged since 20 October.** Selected work across Blackwell GPU kernels, query engines, developer tools, scientific computing, and agent security.

| Project | Contribution | Merged |
| :--- | :--- | :--- |
${PRS.map(p => `| **${p.owner}/${p.repo}** | [${p.title} · #${p.n}](https://github.com/${p.owner}/${p.repo}/pull/${p.n}) | ${p.date} |`).join("\n")}

Also recently merged: [SysKnife #828 — pin MCP publisher and scan all CI workflows](https://github.com/lacs-project/sysknife/pull/828) (20 Nov) · [mojo-dllm #133 — Q5_0/Q8_0 CPU tiles and grouped MoE](https://github.com/dllm-labs/mojo-dllm/pull/133) (4 Nov).

[Browse all ${STATS.items[1][0]} public merged PRs →](${MERGED})

## 03 / Selected projects

${WORK.map(w => `**[${w.name}](${w.url})** · \`${w.lang}\`<br>\n${w.desc}`).join("\n\n")}

## 04 / Recognition

| 2026 competition / 竞赛 | Award / 奖项 |
| :--- | :--- |
${AWARDS.map(a => `| ${a.comp} · ${a.track}<br>${a.trackCn} | **${a.prize}**<br>${a.cn} |`).join("\n")}

[Competition background & details / 赛事介绍 →](https://qinxi-ai.github.io/#recognition)

---

**Works in** Rust · Python · Mojo · Lean 4 · TypeScript · C · MoonBit · openvela / LVGL

*Nihil ultra testimonium.* — Nothing beyond the evidence.

<p align="center"><sub><i>Nullius in verba.</i> &nbsp;·&nbsp; <a href="https://qinxi-ai.github.io/">qinxi-ai.github.io</a></sub></p>
`;
writeFileSync(join(OUT, "..", "README.md"), README);
console.log("wrote", OUT, "and README.md");

