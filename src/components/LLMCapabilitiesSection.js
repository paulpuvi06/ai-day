"use client";

import { useState } from "react";
import Quiz from "./Quiz";

const capabilities = [
  {
    name: "Answer Questions",
    example: "Q: What is the capital of France?\nA: Paris.",
    realtime: {
      prompt: "What is the capital of Germany?",
      output: "Berlin."
    }
  },
  {
    name: "Summarize Text",
    example: "Original: The quick brown fox jumps over the lazy dog.\nSummary: A fox jumps over a dog.",
    realtime: {
      prompt: "Original: Electric cars are becoming more popular due to their efficiency and eco-friendliness.\nSummary:",
      output: "Electric cars are popular for being efficient and eco-friendly."
    }
  },
  {
    name: "Write Stories",
    example: "Once upon a time, a curious cat explored the world...",
    realtime: {
      prompt: "Write a story about a self-driving car on an adventure.",
      output: "Once upon a time, an autonomous car named Velo set out to explore new cities, making friends and learning about the world along the way."
    }
  },
  {
    name: "Translate Languages",
    example: "English: Hello!\nSpanish: ¡Hola!",
    realtime: {
      prompt: "English: Good morning!\nFrench:",
      output: "Bonjour!"
    }
  },
  {
    name: "Code Generation",
    example: "Input: Write a Python function to add two numbers.\nOutput: def add(a, b): return a + b",
    realtime: {
      prompt: "Input: Write a JavaScript function to reverse a string.\nOutput:",
      output: "function reverse(str) { return str.split('').reverse().join(''); }"
    }
  },
];

export default function LLMCapabilitiesSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="capabilities" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">What Can LLMs Do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {capabilities.map((cap, i) => (
            <button
              key={cap.name}
              className={`rounded-lg px-4 py-6 shadow text-lg font-semibold transition-all duration-200 focus:outline-none ${selected === i ? "bg-blue-600 text-white" : "bg-white text-blue-700 hover:bg-blue-100"}`}
              onClick={() => setSelected(i)}
            >
              {cap.name}
            </button>
          ))}
        </div>
        {selected !== null && (
          <div className="bg-white rounded-lg shadow p-6 text-gray-800 text-lg animate-fade-in">
            <pre className="whitespace-pre-wrap font-mono mb-4">{capabilities[selected].example}</pre>
            <div className="bg-blue-50 rounded p-4 mt-2">
              <div className="font-semibold text-blue-700 mb-1">Real-World Example:</div>
              <div className="text-sm text-gray-700">
                <span className="font-mono">{capabilities[selected].realtime.prompt}</span>
                <br />
                <span className="font-mono text-green-700">{capabilities[selected].realtime.output}</span>
              </div>
            </div>
          </div>
        )}
        <Quiz
          question="Which LLM capability lets you translate languages?"
          options={["Summarize Text", "Translate Languages", "Write Stories", "Code Generation"]}
          correct={1}
          explanation="LLMs can translate between languages, one of their many capabilities."
        />
      </div>
    </section>
  );
}
