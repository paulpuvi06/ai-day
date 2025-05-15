"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

const steps = [
  {
    title: "1. Data Collection & Preprocessing",
    desc: "LLMs are trained on massive datasets—books, code, articles, and more. Data is cleaned, filtered, and tokenized. Sensitive or low-quality content is removed. Specialized datasets may be added for domain expertise.",
    icon: "📚"
  },
  {
    title: "2. Model Training (Neural Networks & Transformers)",
    desc: "The model learns language patterns by predicting the next word or filling in blanks. Training uses huge compute clusters and can take weeks. Deep neural networks and transformers are at the core, enabling LLMs to understand, generate, and reason about language.",
    icon: "🧠"
  },
  {
    title: "3. Fine-Tuning, Alignment & Evaluation",
    desc: "Models are fine-tuned for specific tasks (like coding or Q&A) and aligned for safety, helpfulness, and accuracy. Human feedback and reinforcement learning are often used. Red teaming (simulated attacks) helps find weaknesses.",
    icon: "🎯"
  },
  {
    title: "4. Deployment & Continuous Improvement",
    desc: "Models are deployed to the cloud or edge devices. User feedback, new data, and automated monitoring help improve the model over time.",
    icon: "🚀"
  }
];

const example = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."];
const attentionWords = [2, 3, 4]; // brown, fox, jumps

export default function LLMHowTheyWorkSection() {
  const [current, setCurrent] = useState(0);
  const [windowStart, setWindowStart] = useState(0);
  const windowSize = 5;
  const [attnIdx, setAttnIdx] = useState(null);

  return (
    <section id="llm-how-they-work" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-100 border-b min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 text-center tracking-tight drop-shadow">How LLMs Work: From Data to Understanding</h2>
        <p className="mb-10 text-xl text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
          Large Language Models (LLMs) are built through a multi-stage process—massive data, deep learning, and ongoing improvement. But how do they actually "understand" and generate language? Explore the journey from raw data to neural networks, and see how context windows and attention help LLMs make sense of text.
        </p>
        {/* Training Steps */}
        <div className="flex flex-col items-center mb-14">
          <div className="w-full max-w-lg">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 mb-8 p-6 rounded-2xl shadow-xl border-l-8 ${i === 1 ? 'border-blue-500 bg-blue-50' : 'border-blue-200 bg-white'}`}
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
        {/* Context Window Visualization */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Context Window</h3>
          <div className="flex items-center gap-2 justify-center mb-2">
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              onClick={() => setWindowStart(Math.max(0, windowStart - 1))}
              disabled={windowStart === 0}
            >
              ◀
            </button>
            <div className="flex gap-1">
              {example.slice(windowStart, windowStart + windowSize).map((word, i) => (
                <span key={i} className="px-2 py-1 bg-white border rounded text-blue-700 font-mono">
                  {word}
                </span>
              ))}
            </div>
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              onClick={() => setWindowStart(Math.min(example.length - windowSize, windowStart + 1))}
              disabled={windowStart >= example.length - windowSize}
            >
              ▶
            </button>
          </div>
          <div className="text-sm text-gray-500 text-center">LLMs can only "see" a limited window of words at a time.</div>
        </div>
        {/* Attention Mechanism Visualization */}
        <div>
          <h3 className="font-semibold mb-2">Attention Mechanism</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {example.map((word, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded text-mono cursor-pointer transition-all duration-200 ${attnIdx === i ? "bg-yellow-300 text-black" : attentionWords.includes(i) ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-700"}`}
                onMouseEnter={() => setAttnIdx(i)}
                onMouseLeave={() => setAttnIdx(null)}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500 text-center">
            Hover over words to see which ones the model pays most attention to.
          </div>
        </div>
        {/* Quiz */}
        <div className="mt-12 text-center text-blue-700 text-lg">
          <b>Fun Fact:</b> Some LLMs are trained on trillions of words, and new models are being improved every day with user feedback, auto-collected data, and advanced safety techniques.<br />
          <span className="text-blue-900 font-semibold">Machine learning (ML) is the engine behind LLMs—enabling them to learn from data, adapt, and generate human-like language.</span>
        </div>
        <div className="mt-8">
          <Quiz
            question="What does the context window do in an LLM?"
            options={["Limits how much text the model can see at once", "Stores the model's weights", "Encrypts the data", "Controls the output language"]}
            correct={0}
            explanation="The context window is the chunk of text the model can process at one time."
          />
        </div>
      </div>
    </section>
  );
}
