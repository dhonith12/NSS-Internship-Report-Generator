# NSS Internship Report Generator

<div align="center">

## 🎓 NSS Community Service Internship Report Generator

**A single-page web app that generates a professional, print-ready A4 internship report — live, offline, and free.**

[![GitHub Repo](https://img.shields.io/badge/GitHub-dhonith12%2FNSS--Internship--Report--Generator-0d9488?style=for-the-badge&logo=github)](https://github.com/dhonith12/NSS-Internship-Report-Generator)
[![Live Demo](https://img.shields.io/badge/Live-Demo-2dd4bf?style=for-the-badge&logo=githubpages&logoColor=white)](https://dhonith12.github.io/NSS-Internship-Report-Generator/)
[![Made with HTML5](https://img.shields.io/badge/HTML5-✓-e34f26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-✓-1572b6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-✓-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Frameworks](https://img.shields.io/badge/Frameworks-None-brightgreen?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Offline Ready](https://img.shields.io/badge/Works-100%25%20Offline-2dd4bf?style=for-the-badge)]()

**✦ No server · No installation · No internet required — loads instantly & works fully offline after the first visit ✦**

> 🌐 **Try it live:** [dhonith12.github.io/NSS-Internship-Report-Generator](https://dhonith12.github.io/NSS-Internship-Report-Generator/)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [📄 Document Formatting](#-document-formatting)
- [🚀 Getting Started](#-getting-started)
- [🛠️ How It Works](#️-how-it-works)
- [🧰 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🌗 Themes](#-themes)
- [🖨️ Exporting the PDF](#️-exporting-the-pdf)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

| | Feature | Why it matters |
|---|---|---|
| ⚡ | **Real-time Live Preview** | Every keystroke instantly rebuilds the A4 document on the right panel — no render button needed |
| 📄 | **Complete Report Structure** | Cover, certificate, acknowledgement, table of contents, introduction, objectives, community profile, village map, occupations, internship activities, photo evidence, learning outcomes, challenges, social impact, conclusion & annexures |
| 📐 | **College-Format A4 Layout** | Every section fits on a **single A4 page** — Times New Roman 12pt body, 16pt bold main headings, 14pt bold subheadings, 1.5 line spacing, justified text and page numbers at the bottom |
| 🏷️ | **Effective Day-Caption Frames** | Every photo page shows a **DAY 1 / DAY 2** caption — by default as **3 photo frames + 1 caption textbox**; when all 4 photos are filled, the caption moves into a bar below the 2×2 grid |
| 📜 | **Standard Certificate Format** | Auto-generated certificate follows the official 3-paragraph NSS format — student, activities, and programme focus — filled from your data |
| 📑 | **Multiple Annexures / Certificates** | Add any number of certificate images — each one renders on its own A4 page, centred and scaled to fit the page |
| ✏️ | **In-Preview Edit Mode** | Click **✏ Edit** to edit the document text directly in the preview — like a PDF editor, with auto-update paused while you type |
| 👤 | **Cover Name Auto-fill** | The cover-page name is auto-filled with your initials + surname (e.g. `T.V.N.S. DHONI`) from Student Details — fully editable |
| 👥 | **Village Population Field** | Enter the village population (default `500`) and it appears in the community profile findings |
| 🖼️ | **Smart Photo Frames** | Photos auto-stretch to **fill the frame** completely — the whole image is always visible, whatever the resolution |
| 🔍 | **Zoom & Pan Photos** | Adjust any evidence photo inside its frame with + / − / reset, or drag it into place |
| 📐 | **Uniform Image Boxes** | All four photo boxes on a page are identical in size, **including** the caption bar |
| 🏷️ | **Figure Numbers Outside Images** | `Fig. 1`, `Fig. 2`… rendered cleanly below each frame |
| 💾 | **Silent Auto-save (local + cookies)** | Every keystroke is saved **on this device only** — in `localStorage` **and** chunked **cookies** — and restored automatically on the next visit, even in private / offline browsing. No profile selector, no user action needed |
| 📶 | **Instant Offline (Service Worker)** | After the site loads once, a service worker caches the whole app so it opens **instantly and works 100% offline** with no internet — perfect for GitHub Pages / mobile |
| 🚀 | **Fast Photo Uploads** | Uploaded photos are auto-compressed & resized on-device (max 1800px JPEG), so images embed, render and save **fast and reliably**, fully offline |
| 📄 | **Smart PDF Filename** | Saving a PDF suggests `<StudentName>_Nss_Report.pdf` automatically |
| 🌗 | **Light / Dark / Auto themes** | Dark mode keeps the document preview crisp and identical to light mode |
| 📁 | **"Choose File" → "Reupload File"** | Upload slots show the selected file name (e.g. `1.jpg`) instead of a bulky preview |
| 🧪 | **Load Demo & Reset** | One click demo data for trying the generator, plus a full reset |
| 👋 | **Smart Welcome Toast** | A friendly 2-second greeting on mobile / tablet views; skipped automatically on desktop |
| 🖨️ | **Save As → Print to PDF** | A clean **Save As** dialog (or `Ctrl+P`) with print-ready `@page A4` styles |

---

## 📄 Document Formatting

The generated report follows a standard college report format out of the box:

- **Page size** — A4 (`@page A4`)
- **Font** — Times New Roman, 12 pt body
- **Headings** — 16 pt bold main headings, 14 pt bold subheadings
- **Spacing** — 1.5 line spacing, justified paragraphs
- **Margins** — 1" top / bottom / right, 1.25" left
- **Page numbers** — centred at the bottom of every page
- **One page per section** — each report section is sized to fill exactly one A4 page

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/dhonith12/NSS-Internship-Report-Generator.git

# 2. Open the app — that's it!
#    Just double-click index.html (or open it in any modern browser)
```

> 🛡️ **Tip:** For the smoothest experience open the app in **Desktop Mode** on a laptop/PC, and use a browser like **Microsoft Edge** or **Google Chrome**.

No build step. No package manager. No internet connection. Just open and start typing.

---

## 🛠️ How It Works

```
 ┌─────────────────────────────┐        ┌──────────────────────────────┐
 │   FORM PANEL (left)         │  ────▶ │   LIVE PREVIEW (right)       │
 │  • Cover page data          │        │   Re-renders A4 document     │
 │  • Student details          │        │   the moment you type        │
 │  • Village / community      │        │                              │
 │  • Community profile        │        │   Cover → Profile → Maps     │
 │  • Village map image        │        │   → Activities → Photos      │
 │  • Activities & 4 photos    │        │   → Certificates             │
 │  • Certificates / annexures │        │                              │
 └─────────────────────────────┘        └──────────────────────────────┘
```

1. **Fill in the details** on the left — theme, branch, student name, registration number, internship period, and village details. The community profile, occupations and social issues use built-in standard content.
2. **Upload your images** — village map, activity evidence (up to 4 photos per day × 2 days), and one or more certificates / annexures (each on its own page). The button switches to **Reupload File** and shows the filename. The cover page uses a built-in design, so there is no cover image upload.
3. **Watch the preview** — the right panel builds the full A4 report live as you type.
4. **Fine-tune photos** — use the on-frame **+ / − / reset** buttons or drag to pan each photo inside its frame.
5. **Edit text directly** — click **✏ Edit** to type right into the document pages; images and headers stay locked.
6. **Save as PDF** — click **📄 Save As** (or press `Ctrl+P`), choose *Save as PDF* in the print dialog — the suggested filename is `<StudentName>_Nss_Report.pdf`.
7. **Keeps editing later** — everything you type is auto-saved silently **on this device** (localStorage + cookies), so a refresh continues right where you left off.
8. **Works offline too** — after the first full load the service worker caches everything, so the site opens instantly and keeps working with no internet.

> 💡 The document page is scaled to **fit the preview pane** (`--docscale`) so you always see the *whole* page, while the actual printed output stays true-to-size A4.

---

## 🧰 Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| **Markup** | HTML5 | Semantic structure, inline SVG icons, forms |
| **Styling** | CSS3 | Custom properties (themes), flexbox & grid, `@media` queries, `@page A4` print rules, `zoom` fit-to-width |
| **Logic** | Vanilla JavaScript (ES5/ES6) | No frameworks — live DOM rendering, `FileReader` for uploads, `<canvas>` image processing (black-frame stripping + auto-compress), `localStorage` + cookie auto-save |
| **Output** | Browser Print → PDF | Zero external dependencies |
| **Offline** | Service Worker (`sw.js`) | Caches the full app after first load — instant start and 100% offline on GitHub Pages / mobile |
| **Images** | Embedded base64 | College logo, cover art, default map & certificate baked into `js/app.js` — fully offline |

---

## 📁 Project Structure

```
NSS-Internship-Report-Generator/
│
├── 📄 index.html          # App markup & layout (HTML only)
│
├── 🎨 css/
│   └── styles.css         # All styling: layout, themes, preview & A4 print rules
│
├── ⚙️  js/
│    └── app.js            # All logic: state, live render, photo adjust, theme, demo, uploads, auto-save
│
├── ⚡ sw.js               # Service worker — offline cache (works after the first load)
│
└── 📘 README.md           # This file
```

*Separated HTML / CSS / JS for a clean, maintainable codebase.*

---

## 🌗 Themes

Click the theme button in the top-right to cycle through:

- ☀️ **Light** — bright, clean workspace
- 🌙 **Dark** — easy on the eyes, with the document preview staying crisp and white as a printed page
- 🌀 **Auto** — follows your operating system's setting

Your choice is remembered automatically between visits.

---

## 🖨️ Exporting the PDF

1. Click **📄 Save As** (or press `Ctrl + P`).
2. In the **Save As** dialog choose **Save as PDF**.
3. In the print dialog choose **Save as PDF** as the destination and enable **Background graphics** for the full look.
4. Save — the generator's UI is automatically hidden from the printout, leaving only the clean A4 report.

---

## 💾 Saving & Data

- **Silent auto-save (local + cookies)** — every keystroke is stored in this browser under the entered student name and restored automatically on the next visit. Data is written to **both** `localStorage` and chunked **cookies**, so it keeps working in private browsing, on mobile, or when local storage is blocked. No profile selector, no messages — it just works. Photos are re-uploaded each session.

- **On-close save** — your work is also saved when you close the tab / switch apps (`pagehide` / `beforeunload`), so nothing is lost.

---

## 📶 Offline & Performance (Service Worker)

- After the first full load, a **service worker** (`sw.js`) caches `index.html`, `css/styles.css`, `js/app.js` and all PDF-export libraries.
- Every later visit loads **instantly from cache** and works **fully offline** — including **Save as PDF** — even with no internet.
- Uploaded photos are compressed/resized on-device (max 1800px JPEG) before embedding, which keeps uploads **fast and reliable** and reduces saved-file size.

---

## 🤝 Contributing

Found a bug or have an idea? Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/awesome-thing`
3. Commit your changes: `git commit -m 'Add awesome thing'`
4. Push: `git push origin feature/awesome-thing`
5. Open a **Pull Request** 🚀

Or simply [open an issue](https://github.com/dhonith12/NSS-Internship-Report-Generator/issues) — every report helps!

---

## 📜 License

This project is open for educational use. © 2026 — **Created by [Dhoni Tirumalasetti](https://www.linkedin.com/in/dhonitirumalasetti/)**.

<div align="center">

*Made with 💚 for NSS volunteers and their communities.*

</div>
