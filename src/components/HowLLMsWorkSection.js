import { useState } from "react";
import Quiz from "./Quiz";

const steps = [
  {
    title: "1. Training",
    desc: "LLMs are trained on huge datasets (books, code, web) to predict the next word. This is like teaching a student by giving them millions of examples.",
    example: "Training data: 'The car is fast.' → Model learns what words come next."
  },
  {
    title: "2. Tokenization",
    desc: "Text is broken into tokens (chunks of words/characters) so the model can process it. Think of tokens as puzzle pieces that make up a sentence.",
    example: "'The quick brown fox' → ['The', 'quick', 'brown', 'fox']"
  },
  {
    title: "3. Context Window & Attention",
    desc: "The model can only 'see' a limited window of tokens at a time. Attention helps it focus on the most important words, like a student highlighting key points in a book.",
    example: "Input: 'The quick brown fox jumps' → Model pays most attention to 'fox', 'jumps'."
  },
  {
    title: "4. Output & Real-World Use",
    desc: "The model generates answers, code, or summaries based on what it has learned. This is like a smart assistant helping you with tasks.",
    example: "Prompt: 'Summarize this car manual.' → Output: 'Check oil every 5,000 miles.'"
  }
];

export default function HowLLMsWorkSection() {
  const [step, setStep] = useState(0);
  const [windowStart, setWindowStart] = useState(0);
  const windowSize = 5;
  const example = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."];
  const attentionWords = [2, 3, 4];
  const [attnIdx, setAttnIdx] = useState(null);

  return (
    <section id="how-llms-work" className="py-16 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">How LLMs Work (High-Level)</h2>
        <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
          <b>Analogy:</b> Imagine building a super-smart assistant. You teach it with millions of books (training), show it how to break down sentences (tokenization), help it focus on what's important (attention), and then ask it to help you in real life (output)!
        </div>
        {/* Stepper */}
        <div className="mb-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <div className="flex gap-2 mb-2">
              {steps.map((s, i) => (
                <button key={i} className={`px-3 py-1 rounded ${step === i ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`} onClick={() => setStep(i)}>{s.title}</button>
              ))}
            </div>
            <div className="bg-white rounded shadow p-4">
              <div className="font-bold text-blue-800 mb-1">{steps[step].title}</div>
              <div className="mb-2 text-gray-700">{steps[step].desc}</div>
              <div className="text-xs text-blue-700">Example: {steps[step].example}</div>
            </div>
          </div>
        </div>
        {/* Interactive Context Window & Attention Demo */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Context Window Demo</h3>
          <div className="flex items-center gap-2 justify-center mb-2">
            <button className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50" onClick={() => setWindowStart(Math.max(0, windowStart - 1))} disabled={windowStart === 0}>◀</button>
            <div className="flex gap-1">
              {example.slice(windowStart, windowStart + windowSize).map((word, i) => (
                <span key={i} className="px-2 py-1 bg-white border rounded text-blue-700 font-mono">{word}</span>
              ))}
            </div>
            <button className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50" onClick={() => setWindowStart(Math.min(example.length - windowSize, windowStart + 1))} disabled={windowStart >= example.length - windowSize}>▶</button>
          </div>
          <div className="text-sm text-gray-500 text-center">LLMs can only "see" a limited window of words at a time.</div>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Attention Mechanism Demo</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {example.map((word, i) => (
              <span key={i} className={`px-2 py-1 rounded text-mono cursor-pointer transition-all duration-200 ${attnIdx === i ? "bg-yellow-300 text-black" : attentionWords.includes(i) ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-700"}`} onMouseEnter={() => setAttnIdx(i)} onMouseLeave={() => setAttnIdx(null)}>{word}</span>
            ))}
          </div>
          <div className="text-sm text-gray-500 text-center">Hover over words to see which ones the model pays most attention to.</div>
        </div>
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