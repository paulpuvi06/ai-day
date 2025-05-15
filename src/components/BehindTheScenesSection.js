"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Data Collection (Auto & Curated)",
    desc: "LLMs are trained on massive datasets—some are automatically gathered from the web (auto dataset), others are carefully curated for quality and safety. This includes books, code, articles, and more.",
    icon: "📚"
  },
  {
    title: "2. Preprocessing & Cleaning",
    desc: "Data is cleaned, filtered, and tokenized. Sensitive or low-quality content is removed. Specialized datasets (e.g., medical, legal, automotive) may be added for domain expertise.",
    icon: "🧹"
  },
  {
    title: "3. Model Training (Supervised & Self-Supervised)",
    desc: "The model learns language patterns by predicting the next word or filling in blanks. Training uses huge compute clusters and can take weeks. Machine learning (ML) techniques—like deep neural networks, transformers, and optimization algorithms—are at the core of this process, enabling the LLM to understand, generate, and reason about language.",
    icon: "🧠"
  },
  {
    title: "4. Fine-Tuning & Alignment",
    desc: "Models are fine-tuned on specific tasks (like coding or Q&A) and aligned for safety, helpfulness, and accuracy. Human feedback and reinforcement learning are often used.",
    icon: "🎯"
  },
  {
    title: "5. Evaluation & Red Teaming",
    desc: "LLMs are tested for accuracy, bias, and safety. Red teaming (simulated attacks) helps find weaknesses. Only the best models are released.",
    icon: "🔬"
  },
  {
    title: "6. Deployment & Continuous Improvement",
    desc: "Models are deployed to the cloud or edge devices. User feedback, new data, and automated monitoring help improve the model over time.",
    icon: "🚀"
  }
];

export default function BehindTheScenesSection() {
  const [current, setCurrent] = useState(0);
  return (
    <section id="behind-the-scenes" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-100 border-b min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 text-center tracking-tight drop-shadow">Behind the Scenes: How LLMs Are Created</h2>
        <p className="mb-12 text-xl text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
          Ever wondered how large language models (LLMs) like GPT-4, Llama, or Qwen are built? It's a multi-stage process involving auto-collected datasets, expert curation, massive compute, and ongoing improvement. Here's a modern, step-by-step look:
        </p>
        <div className="flex flex-col items-center mb-14">
          <div className="w-full max-w-lg">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 mb-8 p-6 rounded-2xl shadow-xl border-l-8 ${i === 2 ? 'border-blue-500 bg-blue-50' : 'border-blue-200 bg-white'}`}
              >
                <div className="text-4xl mt-1">{step.icon}</div>
                <div>
                  <div className="font-bold text-blue-800 text-lg mb-1">{step.title}</div>
                  <div className="text-gray-700 text-base">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-blue-700 text-lg">
          <b>Fun Fact:</b> Some LLMs are trained on trillions of words, and new models are being improved every day with user feedback, auto-collected data, and advanced safety techniques. <br/>
          <span className="text-blue-900 font-semibold">Machine learning (ML) is the engine behind LLMs—enabling them to learn from data, adapt, and generate human-like language.</span>
        </div>
      </div>
    </section>
  );
}
