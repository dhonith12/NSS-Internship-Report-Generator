# NSS Internship Report Generator

<div align="center">

## 🎓 NSS Community Service Internship Report Generator

**A single-page web app that generates a professional, print-ready A4 internship report — live, offline, and free.**

[![GitHub Repo](https://img.shields.io/badge/GitHub-dhonith12%2FNSS--Internship--Report--Generator-0d9488?style=for-the-badge&logo=github)](https://github.com/dhonith12/NSS-Internship-Report-Generator)
[![Made with HTML5](https://img.shields.io/badge/HTML5-✓-e34f26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-✓-1572b6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-✓-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Frameworks](https://img.shields.io/badge/Frameworks-None-brightgreen?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Offline Ready](https://img.shields.io/badge/Works-100%25%20Offline-2dd4bf?style=for-the-badge)]()

**✦ No server · No installation · No internet required ✦**

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
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
| 📄 | **Complete Report Structure** | Cover page, student details, community profile, village map, activity pages, photo evidence, certificates & annexures |
| 🖼️ | **Smart Photo Frames** | Photos auto-stretch to **fill the frame** completely — the whole image is always visible, whatever the resolution |
| 🔍 | **Zoom & Pan Photos** | Adjust any evidence photo inside its frame with + / − / reset, or drag it into place |
| 📐 | **Uniform Image Boxes** | All four photo boxes on a page are identical in size, **including** the caption text box |
| 🏷️ | **Figure Numbers Outside Images** | `Fig. 1`, `Fig. 2`… rendered cleanly below each frame |
| 🌗 | **Light / Dark / Auto themes** | Dark mode keeps the document preview crisp and identical to light mode |
| 📁 | **"Choose File" → "Reupload File"** | Upload slots show the selected file name (e.g. `1.jpg`) instead of a bulky preview |
| 🧪 | **Load Demo & Reset** | One click demo data for trying the generator, plus a full reset |
| 👋 | **Welcome Toast** | Friendly 2-second greeting on entry, reminding you that Desktop Mode is the best experience |
| 🖨️ | **Print → Save as PDF** | Print-ready `@page A4` styles; just use the browser's *Save as PDF* |

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

1. **Fill in the details** on the left — theme, branch, student name, registration number, internship period, village, community profile, occupations and social issues.
2. **Upload your images** — cover photo, village map, activity evidence (up to 4 photos per day × 2 days), and the certificate. The button switches to **Reupload File** and shows the filename.
3. **Watch the preview** — the right panel builds the full A4 report live as you type.
4. **Fine-tune photos** — use the on-frame **+ / − / reset** buttons or drag to pan each photo inside its frame.
5. **Download as PDF** — hit **Download PDF** and choose *Save as PDF* in the print dialog.

> 💡 The document page is scaled to **fit the preview pane** (`--docscale`) so you always see the *whole* page, while the actual printed output stays true-to-size A4.

---

## 🧰 Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| **Markup** | HTML5 | Semantic structure, inline SVG icons, forms |
| **Styling** | CSS3 | Custom properties (themes), flexbox & grid, `@media` queries, `@page A4` print rules, `zoom` fit-to-width |
| **Logic** | Vanilla JavaScript (ES5/ES6) | No frameworks — live DOM rendering, `FileReader` for uploads, `<canvas>` image processing (black-frame stripping), `localStorage` for theme |
| **Output** | Browser Print → PDF | Zero external dependencies |
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
│    └── app.js            # All logic: state, live render, photo adjust, theme, demo, uploads
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

1. Click **📄 Download PDF** (or press `Ctrl + P`).
2. In the print dialog choose **Save as PDF** as the destination.
3. Make sure **Background graphics** are enabled for the full look.
4. Save — the generator's UI is automatically hidden from the printout, leaving only the clean A4 report.

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
