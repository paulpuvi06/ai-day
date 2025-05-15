"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Quiz from "./Quiz";

const steps = [
  {
    label: "Agent A introduces itself (Agent Card)",
    desc: "Agent A shares a digital business card describing its skills, endpoints, and how to talk to it.",
  },
  {
    label: "Agents discover and negotiate tasks",
    desc: "Agents find each other, agree on what needs to be done, and decide who does what.",
  },
  {
    label: "Agents exchange messages and results",
    desc: "Agents send messages, data, and even files back and forth, collaborating to complete tasks.",
  },
];

export default function A2ASection() {
  const [current, setCurrent] = useState(0);
  return (
    <section id="a2a" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Agent-to-Agent (A2A) Protocol</h2>
        <p className="mb-4 text-lg text-gray-700">
          <span className="font-semibold">A2A</span> is like a universal handshake for AI agents. It lets different agents—no matter who built them—find each other, share what they can do, and work together. Imagine a team of smart assistants, each with their own specialty, collaborating to solve your problem.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <svg viewBox="0 0 400 140" className="w-full max-w-md mx-auto">
              {/* Agent A */}
              <rect x="10" y="50" width="80" height="40" rx="10" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" />
              <text x="50" y="75" textAnchor="middle" fontSize="14" fill="#b45309">Agent A</text>
              {/* Agent B */}
              <rect x="310" y="50" width="80" height="40" rx="10" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
              <text x="350" y="75" textAnchor="middle" fontSize="14" fill="#047857">Agent B</text>
              {/* Animated Message */}
              <motion.circle
                cx={current === 2 ? 350 : current === 1 ? 200 : 50}
                cy="70"
                r="12"
                fill="#60a5fa"
                animate={{ cx: current === 2 ? 350 : current === 1 ? 200 : 50 }}
                transition={{ duration: 0.8 }}
              />
              <text x="200" y="110" textAnchor="middle" fontSize="12" fill="#2563eb">A2A Message</text>
            </svg>
          </motion.div>
          <div className="flex-1 text-gray-600">
            <div className="mb-4">
              <div className="font-semibold mb-2">How it works:</div>
              <ol className="list-decimal pl-6">
                {steps.map((step, i) => (
                  <li key={i} className={i === current ? "text-blue-700 font-bold" : ""}>
                    {step.label}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
              >
                Previous
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))}
                disabled={current === steps.length - 1}
              >
                Next
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-500 min-h-[2em]">{steps[current].desc}</div>
          </div>
        </div>
        <div className="mt-6 bg-blue-100 rounded-lg p-4 text-blue-800">
          <b>Key Features:</b>
          <ul className="list-disc pl-6">
            <li>Agent Cards: Digital business cards for agents (identity, skills, endpoints)</li>
            <li>Secure, web-native (HTTP, JSON-RPC, OAuth2)</li>
            <li>Supports multi-agent collaboration and streaming tasks</li>
          </ul>
        </div>
        <Quiz
          question="What is an Agent Card in A2A?"
          options={["A digital business card for agents", "A type of neural network", "A tokenization method", "A security protocol"]}
          correct={0}
          explanation="Agent Cards describe an agent’s identity, skills, and endpoints for discovery and collaboration."
        />
      </div>
    </section>
  );
}
