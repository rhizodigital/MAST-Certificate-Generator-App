# MAST Security — Certificate Generator

A web-based tool for creating and downloading professional recognition certificates for MAST Security LTD staff. Built with Astro.js, Tailwind CSS v4, and deployed on Netlify.

---

## Features

- **3 certificate templates** — Recognition, Prestige, and Classic styles
- **Live preview** — changes update the certificate in real time
- **PDF export** — downloads a print-ready A4 PDF named after the recipient
- **Dual signatories** — supports two named signatories per certificate
- **Password protected** — login required before accessing the generator
- **Auto cert ID** — unique `MAST-YYYY-XXXXXX` reference on every certificate

---

## Templates

| Template | Style | Best for |
|---|---|---|
| **Recognition** | Dark navy header + white body | Employee of Month/Year, Best Newcomer, etc. |
| **Prestige** | Full dark navy, gold border | Employee of the Year, Long Service, top awards |
| **Classic** | White with navy header/footer | Monthly awards, course completions, team recognition |

---

## Getting Started

### Prerequisites

- Node.js >= 22
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

---

## Configuration

### Password protection

Copy `.env.example` to `.env` and set a password:

```
AUTH_PASSWORD=your-secure-password
```

### Brand settings

Edit `src/config/brand.ts` to update the company name, logo, accent colour, and form defaults.

### Colour palette

All MAST brand colours are defined as Tailwind CSS custom properties in `src/styles/global.css` under `@theme`. Use them in templates as `text-mast-gold`, `bg-mast-navy`, etc.

---

## Adding a New Certificate Template

1. Create `src/pages/certificates/<your-id>.astro` (copy `mast-recognition.astro` as a starting point)
2. Add a `data-field="..."` attribute to every editable element
3. Register it in `src/certificate-templates/index.ts`

Available field keys: `recipientName`, `awardType`, `role`, `date`, `issuerName`, `issuerTitle`, `issuer2Name`, `issuer2Title`, `customMessage`

---

## Deployment (Netlify)

The project uses the `@astrojs/netlify` adapter. Connect the repo in the Netlify dashboard and set the `AUTH_PASSWORD` environment variable under **Site configuration → Environment variables**.

Build command: `npm run build`
Publish directory: `dist`

---

## Tech Stack

- [Astro](https://astro.build) 6 — framework
- [Tailwind CSS](https://tailwindcss.com) v4 — styling
- [jsPDF](https://github.com/parallax/jsPDF) — PDF generation
- [html-to-image](https://github.com/bubkoo/html-to-image) — certificate rendering
- [Netlify](https://netlify.com) — hosting

---

© MAST Security LTD