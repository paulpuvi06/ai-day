"use client";
import { useState } from "react";
import Quiz from "./Quiz";

const example = [
  "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."
];
const attentionWords = [2, 3, 4]; // brown, fox, jumps

export default function HowLLMsUnderstandSection() {
  const [windowStart, setWindowStart] = useState(0);
  const windowSize = 5;
  const [attnIdx, setAttnIdx] = useState(null);

  return (
    <section id="understand" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">How LLMs Understand Text</h2>
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
        <Quiz
          question="What does the context window do in an LLM?"
          options={["Limits how much text the model can see at once", "Stores the model's weights", "Encrypts the data", "Controls the output language"]}
          correct={0}
          explanation="The context window is the chunk of text the model can process at one time."
        />
      </div>
    </section>
  );
}
