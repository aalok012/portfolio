# Alok Kumar Thakur — Portfolio

Personal portfolio site built with React, TypeScript, and Vite.

## Stack

- React 18 + TypeScript
- Vite
- CSS Modules

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     # One folder per component, each with .tsx + .module.css
├── data/           # resume.ts — all portfolio content in one place
├── hooks/          # useCursor, useScrollReveal
├── styles/         # globals.css (variables, reset, keyframes)
└── types/          # TypeScript interfaces
```

To update portfolio content, edit `src/data/resume.ts`. No other files need to change.
