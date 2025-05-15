"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

const mcpPrimitives = [
  {
    name: "Tools",
    description: "APIs or functions the LLM can call (e.g., get tire pressure, start navigation)."
  },
  {
    name: "Resources",
    description: "External data or documents (e.g., car manual, weather info)."
  },
  {
    name: "Prompting",
    description: "Instructions or templates to guide the LLM's response."
  }
];

const mcpSteps = [
  {
    label: "User asks a question",
    desc: "The user (e.g., a driver) asks something like 'What's the tire pressure and how do I fix it?'"
  },
  {
    label: "MCP routes the request",
    desc: "MCP decides which tools, resources, and prompt templates are needed to answer the question."
  },
  {
    label: "LLM calls tools & gathers data",
    desc: "The LLM (via MCP) calls APIs, fetches documents, and builds a prompt with all the info."
  },
  {
    label: "LLM generates a response",
    desc: "The LLM uses the gathered context to generate a step-by-step answer for the user."
  }
];

export default function MCPSection() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(null);
  return (
    <section id="mcp" className="py-24 min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 text-center tracking-tight drop-shadow">Model Context Protocol (MCP)</h2>
        <p className="mb-12 text-2xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold">MCP</span> is like a universal adapter for AI models. It lets language models access the right data, tools, or APIs at the right time—without being hardwired for every possible scenario.
        </p>
        <div className="mb-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="font-bold text-blue-700 mb-3 text-xl">MCP Primitives (Click to Learn)</h3>
            <ul className="space-y-3">
              {mcpPrimitives.map((p, i) => (
                <li key={p.name}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded border ${open === i ? "bg-blue-100 border-blue-400" : "bg-white border-blue-200 hover:bg-blue-50"}`}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-semibold text-blue-800">{p.name}</span>
                    <span className="ml-2 text-xs text-gray-500">{open === i ? "▲" : "▼"}</span>
                  </button>
                  {open === i && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 ml-4 text-base text-blue-900 bg-blue-50 rounded p-3">
                      {p.description}
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-blue-700 mb-3 text-xl">MCP in Action (Step-by-Step)</h3>
            <div className="bg-white rounded-lg shadow p-4 mb-2">
              <div className="font-semibold text-blue-800 mb-2">{mcpSteps[step].label}</div>
              <div className="text-gray-700 mb-2">{mcpSteps[step].desc}</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>Previous</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50" onClick={() => setStep(Math.min(mcpSteps.length - 1, step + 1))} disabled={step === mcpSteps.length - 1}>Next</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Quiz
            question="Which protocol lets LLMs access tools and data on demand?"
            options={["A2A", "MCP", "ACP", "SMTP"]}
            correct={1}
            explanation="MCP (Model Context Protocol) connects LLMs to external tools, APIs, and data sources."
          />
        </div>
      </div>
    </section>
  );
}
