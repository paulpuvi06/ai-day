import React, { useState } from "react";

const simpleTokenizer = (text) => {
  // Split by whitespace and punctuation
  return text.match(/\b\w+\b|[.,!?;]/g) || [];
};

const mockEmbedding = (token) => {
  // Generate a mock embedding: 5 random floats for demo
  return Array.from({ length: 5 }, () => (token.charCodeAt(0) % 10 + Math.random()).toFixed(2));
};

export default function InteractiveDemoSection() {
  const [input, setInput] = useState("");
  const tokens = simpleTokenizer(input);

  return (
    <section className="bg-white rounded-lg shadow p-6 my-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Interactive Demo: Tokenization & Embeddings (Car Analogy)</h2>
      <p className="mb-4 text-gray-700">
        <strong>Imagine your sentence is a car on a road trip.</strong> Tokenization breaks your sentence into parts—like splitting a car into its wheels, engine, and doors. Embeddings are like giving each part a unique performance profile (speed, efficiency, safety rating, etc.) so the AI can "understand" how each part contributes to the whole ride.
      </p>
      <label className="block mb-2 font-semibold">Enter your car's journey (type a sentence):</label>
      <textarea
        className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="E.g. The electric car zoomed past the charging station."
      />
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-green-700">Tokenization (Car Parts)</h3>
        <p className="mb-2 text-gray-600 text-sm">
          Each token is like a car part. Together, they make the journey possible. <br />
          <a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Try OpenAI Tokenizer</a> | 
          <a href="https://tiktokenizer.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 ml-1">Try tiktokenizer</a>
        </p>
        <p className="mb-2 text-yellow-700 text-xs italic">
          Note: This interactive demo is a simulation. Real tokenization can differ significantly between LLM models (e.g., GPT, Llama, Gemini, etc.), as each uses its own tokenizer and vocabulary. For accurate results, use the official tools above.
        </p>
        <div className="flex flex-wrap gap-2">
          {tokens.map((token, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              <span className="font-bold">{token}</span>
              <span className="ml-1 text-xs text-gray-500">(Part {idx + 1})</span>
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-purple-700">Embeddings (Performance Profile)</h3>
        <p className="mb-2 text-gray-600 text-sm">Each car part (token) gets a unique performance profile—like horsepower, efficiency, or safety score. These numbers help the AI "drive" your meaning.</p>
        <div className="space-y-2">
          {tokens.map((token, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="font-mono text-gray-700">{token}:</span>
              <span className="font-mono text-xs text-gray-500">[
                {mockEmbedding(token).map((val, i) => (
                  <span key={i} className="inline-block mx-1 px-1 rounded bg-gray-100 text-gray-700">
                    {val}
                    {i === 0 && <span className="ml-1 text-[10px] text-blue-500">HP</span>}
                    {i === 1 && <span className="ml-1 text-[10px] text-green-500">Eff</span>}
                    {i === 2 && <span className="ml-1 text-[10px] text-yellow-500">Safe</span>}
                    {i === 3 && <span className="ml-1 text-[10px] text-red-500">Speed</span>}
                    {i === 4 && <span className="ml-1 text-[10px] text-purple-500">Eco</span>}
                  </span>
                ))}
              ]</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => setInput("")}
        aria-label="Reset input"
      >
        Reset Journey
      </button>
    </section>
  );
}
