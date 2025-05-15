"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

const modelLimits = [
  { name: "OpenAI GPT-4", tokens: 128000, example: "Can summarize a 300-page book or handle long conversations." },
  { name: "Anthropic Claude 3", tokens: 200000, example: "Can process entire research papers or large codebases." },
  { name: "Google Gemini", tokens: 32000, example: "Great for multi-turn chat and document Q&A." },
  { name: "Meta Llama 3", tokens: 8000, example: "Best for shorter tasks, summaries, and code snippets." },
  { name: "Mistral", tokens: 32000, example: "Handles long-form content and code generation." },
  { name: "Falcon", tokens: 8000, example: "Good for research and academic tasks." },
];

export default function ContextAndTokenSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="context-token" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2">
          Context Window & Token Limits
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow p-6 animate-fade-in"
        >
          <p className="mb-4 text-lg text-gray-700">
            <b>Context window</b> is the amount of text (measured in tokens) an LLM can "see" at once—including your prompt, instructions, and conversation history. Each model has a maximum context window (token limit). If you exceed it, older content is dropped.
          </p>
          <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
            <b>Model Token Limits:</b>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg bg-white shadow">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left bg-blue-100">Model</th>
                    <th className="px-4 py-2 text-left bg-blue-100">Token Limit</th>
                    <th className="px-4 py-2 text-left bg-blue-100">Example Use</th>
                  </tr>
                </thead>
                <tbody>
                  {modelLimits.map((m, i) => (
                    <tr key={m.name} className="border-b cursor-pointer hover:bg-blue-50" onClick={() => setSelected(i)}>
                      <td className="px-4 py-2 font-semibold text-blue-700">{m.name}</td>
                      <td className="px-4 py-2">{m.tokens.toLocaleString()} tokens</td>
                      <td className="px-4 py-2">{m.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {selected !== null && (
              <div className="mt-4 bg-blue-100 rounded-lg p-4 text-blue-800">
                <b>{modelLimits[selected].name}</b> can handle up to <b>{modelLimits[selected].tokens.toLocaleString()} tokens</b> in a single request.<br />
                <span className="text-sm">Example: {modelLimits[selected].example}</span>
              </div>
            )}
          </div>
          <div className="mb-4 text-blue-800 text-base">
            <b>Tip:</b> For long documents, chunk your input or use retrieval techniques (like RAG) to bring in only the most relevant parts.
          </div>
          <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
            <b>Real-World Example (Claude 3 Opus):</b>
            <ul className="list-disc pl-6">
              <li><b>Context window:</b> Up to <span className="font-mono">200,000</span> tokens (about 150,000 words).</li>
              <li><b>Max output per response:</b> 4,096 tokens.</li>
              <li><b>What this means:</b> You can send Claude 3 Opus a very long document (e.g., a book or large codebase) and ask questions about any part of it. Each answer is limited to 4,096 tokens.</li>
              <li><b>Tip:</b> If your prompt plus conversation history exceeds 200k tokens, the oldest content will be dropped.</li>
            </ul>
            <div className="mt-2 text-sm text-blue-700">
              Source: <a href="https://docs.anthropic.com/en/docs/about-claude/models/all-models" target="_blank" rel="noopener noreferrer" className="underline">Anthropic Claude Model Specs</a>
            </div>
          </div>
          <Quiz
            question="Which LLM model has the highest token limit in this list?"
            options={["OpenAI GPT-4", "Anthropic Claude 3", "Meta Llama 3", "Falcon"]}
            correct={1}
            explanation="Anthropic Claude 3 can handle up to 200,000 tokens in a single request."
          />
        </motion.div>
      </div>
    </section>
  );
}
