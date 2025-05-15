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
  return null;
}
