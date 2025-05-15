# LLM Overview

A modern, interactive Single Page Application (SPA) built with Next.js 15, designed to provide a high-level overview of Large Language Models (LLMs), GitHub Copilot, and their real-world usage. The site is statically generated and easily deployable to GitHub Pages.

## 🚀 Features

- Interactive, analogy-based explanations of LLMs for non-technical audiences
- Visuals and step-by-step guides for LLM training, context, and attention
- Comparison of paid vs open-source LLMs
- Overview of GitHub Copilot and its capabilities
- Modern UI with Tailwind CSS and framer-motion animations
- Fully static export (no server needed)

## 🛠️ Tech Stack

- **Next.js 15** (Static Site Generation)
- **React 18**
- **Tailwind CSS**
- **framer-motion** (animations)
- **Docker & NGINX** (for static deployment)

## 📦 Getting Started

```bash
npm install
npm run build
# Output will be in the 'out/' directory (static export)
```

## 🌐 Deploy to GitHub Pages

- The site is configured for static export using `output: 'export'` in `next.config.js`.
- Use the provided GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`) to build and deploy to the `gh-pages` branch.
- Set your GitHub Pages source to the `gh-pages` branch, root folder.

## 🐳 Docker

To build and run the static site with Docker:

```bash
docker build -t llm-overview .
docker run -p 8080:80 llm-overview
```

Visit [http://localhost:8080](http://localhost:8080)

## 📁 Folder Structure

- `src/app/` — Main app and layout files
- `src/components/` — All UI components
- `src/styles/` — Tailwind/global styles

## 📄 License

MIT
