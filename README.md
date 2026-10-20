<!-- Artwork is generated: edit scripts/build.mjs, then run `node scripts/build.mjs`. -->

<a href="https://qinxi-ai.github.io/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.svg"><img src="assets/hero-light.svg" alt="Xi Qin at Wuhan University — From first principles to working code. Learning theory, reproducible AI evaluation, and open-source engineering." width="100%"></picture></a>

<p align="center">
  <a href="https://qinxi-ai.github.io/"><b>Personal website</b></a> &nbsp;·&nbsp;
  <a href="https://zenodo.org/records/23119254">Latest paper</a> &nbsp;·&nbsp;
  <a href="https://github.com/search?q=is%3Apr+author%3AQinXi-ai+is%3Amerged+is%3Apublic+-user%3AQinXi-ai&type=pullrequests">Merged pull requests</a> &nbsp;·&nbsp;
  <a href="mailto:3624951962qx@gmail.com">Email</a>
</p>

<a href="https://github.com/search?q=is%3Apr+author%3AQinXi-ai+is%3Amerged+is%3Apublic+-user%3AQinXi-ai&type=pullrequests"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/stats-dark.svg"><img src="assets/stats-light.svg" alt="2 research preprints, 67 public PRs merged, 27 repositories, 4 competition awards" width="100%"></picture></a>
<p align="center"><sub>Public merged PRs outside my personal namespace · Verified 20 October 2026</sub></p>

## 01 / Selected research

### [Exact Three-Example Selection in Every Dimension](https://zenodo.org/records/23119254)

**Latest preprint · Learning theory · 3 October 2026**

How much can you lose by keeping just three examples? I determine the exact worst-case risk inflation for mean regression when selecting three support points, with repetition allowed, and predicting their equally weighted mean—in every dimension.

The result resolves the **n = 3 column** of the data-selection question posed at COLT 2025, with sharp constants and a characterization of the extremal geometry.

[Read the paper ↗](https://zenodo.org/records/23119254/files/exact-three-example-selection.pdf) · [Source & verification scripts ↓](https://zenodo.org/records/23119254/files/exact-three-example-selection-source-v1.0.zip) · [DOI: 10.5281/zenodo.23119254](https://doi.org/10.5281/zenodo.23119254)

### [What Does an Evaluation License?](https://arxiv.org/abs/2608.19269)

**Preprint · AI evaluation · arXiv:2608.19269 · v3**

*A Commit-Bound Census of Claim-Relative Inference in Inspect Evals.*
A framework for connecting evaluation artifacts to the claims they support. The census records **124 eligible units**, **14 deterministic analyses**, and **110 typed stops** that identify missing evidence.

[Read on arXiv ↗](https://arxiv.org/abs/2608.19269) · [Code ↗](https://github.com/QinXi-ai/evalspec-audit)

## 02 / Open-source contributions

**14 PRs merged since 2 October.** Selected work across query engines, developer tools, scientific computing, and agent security.

| Project | Contribution | Merged |
| :--- | :--- | :--- |
| **apache/datafusion** | [Serialize lazy generators through hooks · #25765](https://github.com/apache/datafusion/pull/25765) | 2026-10-19 |
| **microsoft/vscode-eslint** | [Keep linting inside the workspace · #2227](https://github.com/microsoft/vscode-eslint/pull/2227) | 2026-10-16 |
| **lacs-project/sysknife** | [Redact credentials from tool context · #573](https://github.com/lacs-project/sysknife/pull/573) | 2026-10-12 |
| **apache/datafusion** | [Skip hashing for fully ordered group keys · #25150](https://github.com/apache/datafusion/pull/25150) | 2026-10-01 |
| **pydata/xarray** | [Bring apply_ufunc to DataTree · #11552](https://github.com/pydata/xarray/pull/11552) | 2026-09-09 |
| **awslabs/stickler** | [Replace sklearn metrics with NumPy · #284](https://github.com/awslabs/stickler/pull/284) | 2026-08-28 |
| **AndreaBozzo/dataprof** | [Read and profile only selected columns · #655](https://github.com/AndreaBozzo/dataprof/pull/655) | 2026-09-01 |
| **3b1b/manim** | [Fix batched 2D vector rotation · #2501](https://github.com/3b1b/manim/pull/2501) | 2026-08-17 |

Also just merged: [SysKnife #612 — detect credentials after escaped boundaries](https://github.com/lacs-project/sysknife/pull/612) · 19 October.

[Browse all 67 public merged PRs →](https://github.com/search?q=is%3Apr+author%3AQinXi-ai+is%3Amerged+is%3Apublic+-user%3AQinXi-ai&type=pullrequests)

## 03 / Selected projects

**[Pocket MOSS Image](https://github.com/QinXi-ai/pocket-moss-image)** · `PYTHON / PYTORCH`<br>
Low-memory MOSS-Image inference: the original 9B text encoder with packed INT6 weights and a streamed, fused INT8 DiT. No retraining or replacement encoder.

**[evalspec-audit](https://github.com/QinXi-ai/evalspec-audit)** · `PYTHON`<br>
Reproducible audits of how evaluation choices affect scores, rankings, and the claims a benchmark supports.

**[FastRead](https://github.com/FastR-D/FastRead)** · `PYTHON / TS`<br>
A paper-reading workspace with page-linked evidence, reports, notes, and conversations grounded in the original PDF.

**[MoonCat · 月薪喵](https://github.com/open-vela/contest2026_477_smartband)** · `C / OPENVELA`<br>
An openvela wearable recovery coach: LVGL interface, scheduled reminders, and on-device INT8 intent routing.

**[moonguard](https://github.com/QinXi-ai/moonguard)** · `MOONBIT`<br>
Public API compatibility checks and semantic-versioning safeguards for MoonBit libraries.

**[AstroTwin](https://github.com/QinXi-ai/astrotwin-demo)** · `JAVASCRIPT`<br>
A browser-based astronomy research demo with TESS evidence snapshots, guided analyses, and Qwen-assisted planning.

**[openvela-smarthome-agent](https://github.com/QinXi-ai/openvela-smarthome-agent)** · `C / OPENVELA`<br>
A smart-home agent with simulated devices, a DeepSeek tool-calling loop, and a reproducible offline mode.

## 04 / Recognition

| 2026 competition / 竞赛 | Award / 奖项 |
| :--- | :--- |
| CCF Open Source Innovation Competition · openvela Smart Band Track<br>CCF 开源创新大赛 · 智能手环赛道 | **First Prize**<br>一等奖 |
| CCF Quantum Computing Programming Challenge · Origin Quantum Cup<br>CCF 量子计算编程挑战赛 · 本源杯 | **First Prize**<br>一等奖 |
| National Electrical Mathematical Modeling · CSEE Cup · “Diangong Cup”<br>全国大学生电工数学建模竞赛 · 电工杯 | **Second Prize**<br>二等奖 |
| CCF Open Source Innovation Competition · openvela Smart Home Track<br>CCF 开源创新大赛 · 智能家居赛道 | **Third Prize**<br>三等奖 |

[Competition background & details / 赛事介绍 →](https://qinxi-ai.github.io/#recognition)

---

**Works in** Rust · Python · TypeScript · C · MoonBit · openvela / LVGL

*Nihil ultra testimonium.* — Nothing beyond the evidence.

<p align="center"><sub><i>Nullius in verba.</i> &nbsp;·&nbsp; <a href="https://qinxi-ai.github.io/">qinxi-ai.github.io</a></sub></p>
