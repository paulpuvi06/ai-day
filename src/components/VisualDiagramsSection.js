"use client";
import Quiz from "./Quiz";
import { useState } from "react";
import { motion } from "framer-motion";

const diagrams = [
  {
    title: "LLM Training Pipeline",
    desc: "Shows the flow from raw data to a trained model.",
    svg: (
      <svg viewBox="0 0 400 100" className="w-full max-w-lg mx-auto">
        <rect x="10" y="35" width="70" height="30" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="45" y="55" textAnchor="middle" fontSize="13" fill="#2563eb">Data</text>
        <rect x="110" y="35" width="90" height="30" rx="8" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" />
        <text x="155" y="55" textAnchor="middle" fontSize="13" fill="#b45309">Tokenization</text>
        <rect x="230" y="35" width="70" height="30" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
        <text x="265" y="55" textAnchor="middle" fontSize="13" fill="#047857">Model</text>
        <rect x="330" y="35" width="60" height="30" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
        <text x="360" y="55" textAnchor="middle" fontSize="13" fill="#b91c1c">Output</text>
        <motion.line x1="80" y1="50" x2="110" y2="50" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.line x1="200" y1="50" x2="230" y2="50" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
        <motion.line x1="300" y1="50" x2="330" y2="50" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
      </svg>
    ),
    quiz: {
      question: "What does this diagram show?",
      options: ["LLM Training Pipeline", "Attention Mechanism", "Tokenization", "Agent Collaboration"],
      correct: 0,
      explanation: "This diagram shows the flow from raw data to a trained model in the LLM training pipeline."
    }
  },
  {
    title: "Attention Mechanism",
    desc: "Visualizes how LLMs focus on important words.",
    svg: (
      <svg viewBox="0 0 400 100" className="w-full max-w-lg mx-auto">
        <rect x="30" y="40" width="60" height="20" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="60" y="55" textAnchor="middle" fontSize="13" fill="#2563eb">Input</text>
        <circle cx="200" cy="50" r="18" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" />
        <text x="200" y="55" textAnchor="middle" fontSize="13" fill="#b45309">Attention</text>
        <rect x="310" y="40" width="60" height="20" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
        <text x="340" y="55" textAnchor="middle" fontSize="13" fill="#047857">Output</text>
        <motion.line x1="90" y1="50" x2="182" y2="50" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.line x1="218" y1="50" x2="310" y2="50" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
      </svg>
    ),
    quiz: {
      question: "What does the attention mechanism help with?",
      options: ["Focusing on important words", "Encrypting data", "Generating images", "Tokenizing text"],
      correct: 0,
      explanation: "The attention mechanism helps LLMs focus on the most relevant parts of the input."
    }
  }
];

// VisualDiagramsSection merged into BehindTheScenesSection for a unified, scenario-based explanation with visuals.
