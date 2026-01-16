# Next Mac Keyboard ⌨️

A pixel-perfect, interactive visualizer of the Apple Magic Keyboard, built with **Next.js 16**, **Tailwind CSS 4.0**, and **TypeScript**. 

This project demonstrates modern frontend practices, including semantic HTML, accessibility (A11y) standards, and a scalable design system using Tailwind's latest `@theme` configuration. It also enforces code quality using **Prettier**.

![Project Preview](https://via.placeholder.com/1200x600?text=Replace+with+Project+Screenshot)
## 🚀 Live Demo

[**View Live Deployment**]    (https://next-mac-keyboard.vercel.app/)

---

## ✨ Key Features

- **Hyper-Realistic Layout:** Accurate replication of the Mac keyboard layout, including the specific "Inverted-T" arrow keys and split-alignment modifier keys (Control, Option, Command).
- **Interactive States:** Keys react to both **mouse clicks** and **physical keyboard presses** via custom hooks.
- **Modern Styling Engine:** Built using **Tailwind CSS v4**, utilizing the new CSS-first `@theme` configuration strategy.
- **Semantic & Accessible:**
  - Uses semantic `<main>`, `<section>`, and `<button>` tags.
  - Full ARIA support (`aria-label`, `aria-pressed`) for screen readers.
  - Keyboard navigation friendly.
- **Reusable Architecture:** Implements a reusable `Container` pattern for consistent layout width and spacing.
- **Code Quality:** Consistent code formatting enforced via a custom `.prettierrc` configuration.

## 🛠️ Tech Stack & Tooling

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Formatter:** [Prettier](https://prettier.io/) (Configured via `.prettierrc`)
- **Bundler:** Turbopack (Default in Next.js 16)

## 📂 Architecture

The project follows a modular, atomic folder structure designed for scalability:

```bash
src/
├── app/
│   ├── globals.css      # Design System (Tailwind @theme variables)
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Semantic <main> entry point
├── components/
│   └── ui/
│       ├── container.tsx # Reusable wrapper for max-width & padding
│       ├── keyboard.tsx  # Main keyboard section container
│       └── key.tsx       # Polymorphic, accessible Key component
├── hooks/
│   └── useKeyboard.ts   # Custom hook for global event listeners & state
└── lib/
    ├── keyboard-data.tsx # Data configuration for standard rows
    └── utils.ts         # Class merging helper
```

## 🚀 Getting Started
# 1. Clone the repository:

```bash 
git clone [https://github.com/your-username/next-mac-keyboard.git](https://github.com/your-username/next-mac-keyboard.git)
cd next-mac-keyboard
```

# 2. Install dependencies:

```bash
npm install
# or
pnpm install
```

# 3 Run the development server:
```bash
npm run dev
```

## Author
Created with Love by Myra (https://github.com/Myragull)

If you enjoyed this project, please consider giving it a star! ⭐
