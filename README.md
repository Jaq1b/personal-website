# Personal Website

A modern personal website with a tabbed interface, built with React and Vite.

## Features

- Modern, responsive design with smooth animations
- Mobile-friendly interface
- Fast performance with Vite
- Tabbed navigation with React Router
- Scroll-to-top on route change

## Sections

- **Home** – Landing and introduction
- **About** – Bio, education, experience, and skills
- **Credentials** – Links to GitHub, LinkedIn, and Handshake
- **Projects** – Project showcase

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

## Tech stack

- React 18
- React Router DOM 6
- Vite 5
- CSS3

## Project structure

```
personalwebsite/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Credentials.jsx
│   │   ├── Projects.jsx
│   │   └── TabContent.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
