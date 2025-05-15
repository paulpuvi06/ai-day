# LLM Explorer: Interactive Educational Platform

Welcome to **LLM Explorer** — a modern, interactive educational site for learning about Large Language Models (LLMs), AI protocols, Retrieval-Augmented Generation (RAG), embeddings, and real-world AI tools like GitHub Copilot. Built with Next.js 15, Tailwind CSS, and framer-motion, LLM Explorer delivers a beautiful, responsive, and engaging experience for all learners.



---

## 🧭 How to Use

1. **Explore Each Section:** Expand/collapse topics as you go. Drag to reorder for your learning style.
2. **Take the Quizzes:** Check your understanding and reinforce learning.
3. **Try the Code:** Copy code samples and experiment in your own projects.
4. **Share & Review:** Share your progress and revisit for updates.

---

## 🛠️ Tech Stack

- **Next.js 15** (Static Site Generation)
- **React 18**
- **Tailwind CSS**
- **framer-motion** (animations)
- **Docker & NGINX** (for static deployment)

---

## 📦 Getting Started

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

---

## 🏗️ Build for Production (Static Export)

```bash
npm run build
npm start
# Output will be in the 'out/' directory (static export)
```

---

## 🐳 Docker & Docker Compose

### Build and Run with Docker

```bash
docker build -t llm-explorer .
docker run -p 3000:80 llm-explorer
# App will be available at http://localhost:3000
```

### Or Use Docker Compose

```bash
docker-compose up --build
# App will be available at http://localhost:3000
```

---

## 📁 Folder Structure

- `src/app/` — Main app and layout
- `src/components/` — All interactive and visual components
- `src/lib/` — Utility functions
- `src/styles/` — Tailwind and global styles

---

## 📚 What You'll Learn

- **LLM Fundamentals:** What are LLMs? How do they work?
- **Training & Tokenization:** Interactive demos and visualizations. [Try more: OpenAI Tokenizer](https://platform.openai.com/tokenizer), [tiktokenizer](https://tiktokenizer.vercel.app/)
- **Context & Attention:** See how LLMs "focus" on words and ideas.
- **Paid vs Open-Source Models:** Compare capabilities and use cases.
- **Key Model Families:** GPT, Llama, Mistral, Gemini, and more.
- **Protocols:** MCP, A2A — powering AI interoperability.
- **RAG & Embeddings:** How retrieval and vector search work.
- **Copilot Modes:** Ask, Edit, and Agent explained with examples.
- **Quizzes & Demos:** Reinforce learning with hands-on activities.

---

## 📄 License

MIT

---
