"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700"
        >
          What are Large Language Models (LLMs)?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-700 mb-6"
        >
          <span className="font-semibold">Imagine a super-smart assistant</span> that can read, write, and understand language—like a helpful librarian who has read millions of books and can answer your questions, summarize information, or even write stories for you. That’s what LLMs do!
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="inline-block bg-white rounded-xl shadow-lg px-6 py-4 mt-4"
        >
          <span className="text-blue-600 font-bold">LLMs</span> are AI models trained to understand and generate human language.
        </motion.div>
      </div>
    </section>
  );
}
