"use client";

import { useState } from "react";
import Quiz from "./Quiz";

const modelLimits = [
  {
    name: "OpenAI GPT-4",
    tokens: 128000,
    example: "Can summarize a 300-page book or handle long conversations."
  },
  {
    name: "Anthropic Claude 3",
    tokens: 200000,
    example: "Can process entire research papers or large codebases."
  },
  {
    name: "Google Gemini",
    tokens: 32000,
    example: "Great for multi-turn chat and document Q&A."
  },
  {
    name: "Meta Llama 3",
    tokens: 8000,
    example: "Best for shorter tasks, summaries, and code snippets."
  },
  {
    name: "Mistral",
    tokens: 32000,
    example: "Handles long-form content and code generation."
  },
  {
    name: "Falcon",
    tokens: 8000,
    example: "Good for research and academic tasks."
  },
];

export default function TokenLimitsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="token-limits" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Token Limitations by Model</h2>
        <p className="mb-4 text-gray-700">Each LLM has a maximum number of tokens (words and symbols) it can process at once. More tokens means longer context, but also higher cost and memory use.</p>
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
        <Quiz
          question="Which LLM model has the highest token limit in this list?"
          options={["OpenAI GPT-4", "Anthropic Claude 3", "Meta Llama 3", "Falcon"]}
          correct={1}
          explanation="Anthropic Claude 3 can handle up to 200,000 tokens in a single request."
        />
      </div>
    </section>
  );
}
