# Personal Website

A modern personal portfolio site built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Glassmorphism design with blurred background image
- Fully typed with TypeScript
- Responsive, mobile-friendly layout
- Smooth page animations
- Tabbed navigation with React Router
- Active tab derived from URL — correct on direct load and browser back/forward

## Sections

- **Home** – Landing and introduction
- **About** – Bio, education, work experience, and skills
- **Credentials** – Links to GitHub, LinkedIn, and Handshake
- **Projects** – Project showcase with tech tags and status badges

## Getting Started

### Installation/Instructions to run locally

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs at `http://localhost:5173`. local demo view

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Type checking

```bash
npm run type-check
```

### Preview production build

```bash
npm run preview
```

## Tech stack

- React 18
- TypeScript 5
- Tailwind CSS 3
- React Router DOM 6
- Vite 5

## Project structure

```
personalwebsite/
├── src/
│   ├── components/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Credentials.tsx
│   │   └── Projects.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```
