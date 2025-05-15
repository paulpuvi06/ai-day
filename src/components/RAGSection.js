"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

const ragSteps = [
  {
    label: "User asks a question",
    desc: "The LLM receives a question or task from the user.",
  },
  {
    label: "Relevant info is retrieved (Embedding)",
    desc: "The system searches a knowledge base using embeddings (smart vector search) to find the most relevant facts or documents.",
  },
  {
    label: "LLM combines info and answers",
    desc: "The LLM uses both the user’s question and the retrieved info to generate a more accurate, up-to-date answer.",
  },
];

export default function RAGSection() {
  const [current, setCurrent] = useState(0);
  return (
    <section id="rag" className="py-16 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Retrieval-Augmented Generation (RAG) & Embeddings</h2>
        <p className="mb-4 text-lg text-gray-700">
          <span className="font-semibold">RAG</span> is like giving your LLM a superpower: the ability to look up facts before answering. Instead of relying only on what it was trained on, the model can fetch the latest info from a database or document store—using <b>embeddings</b> (smart math representations of meaning) to find what matters most.
        </p>
        <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
          <b>Real-world analogy:</b> RAG is like asking a librarian for the latest book or article on a topic, instead of relying only on what the librarian remembers. The librarian uses a smart catalog (embeddings) to find the most relevant, up-to-date info for you.
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <svg viewBox="0 0 400 160" className="w-full max-w-md mx-auto">
              {/* User */}
              <rect x="10" y="60" width="70" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
              <text x="45" y="85" textAnchor="middle" fontSize="14" fill="#2563eb">User</text>
              {/* Knowledge Base */}
              <rect x="160" y="10" width="80" height="40" rx="10" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" />
              <text x="200" y="35" textAnchor="middle" fontSize="13" fill="#b45309">Knowledge</text>
              {/* LLM */}
              <rect x="320" y="60" width="70" height="40" rx="10" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
              <text x="355" y="85" textAnchor="middle" fontSize="14" fill="#047857">LLM</text>
              {/* Arrows */}
              <motion.line x1="80" y1="80" x2="160" y2="30" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
              <motion.line x1="240" y1="30" x2="320" y2="80" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
              <motion.line x1="80" y1="80" x2="320" y2="80" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
            </svg>
          </motion.div>
          <div className="flex-1 text-gray-600">
            <div className="mb-4">
              <div className="font-semibold mb-2">How it works:</div>
              <ol className="list-decimal pl-6">
                {ragSteps.map((step, i) => (
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
                onClick={() => setCurrent(Math.min(ragSteps.length - 1, current + 1))}
                disabled={current === ragSteps.length - 1}
              >
                Next
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-500 min-h-[2em]">{ragSteps[current].desc}</div>
          </div>
        </div>
        <div className="mt-6 bg-blue-100 rounded-lg p-4 text-blue-800">
          <b>Key Concepts:</b>
          <ul className="list-disc pl-6">
            <li><b>Embeddings:</b> Turn words and documents into numbers so the AI can "search by meaning" instead of just keywords. Imagine turning every sentence into a set of coordinates on a map—similar ideas are close together.</li>
            <li><b>Embedding Model:</b> A special AI model (like OpenAI's text-embedding-ada-002) that converts text into these coordinates. <a href="https://platform.openai.com/examples/default-embeddings" target="_blank" rel="noopener noreferrer" className="underline">Try an embedding demo</a>.</li>
            <li><b>RAG:</b> Combines LLMs with real-time search for more accurate, up-to-date answers.</li>
            <li>Great for chatbots, document Q&A, and knowledge assistants.</li>
          </ul>
        </div>
        <div className="mt-6 bg-white rounded-lg p-4 text-blue-800">
          <b>Practical Example:</b>
          <div className="mt-2 text-gray-700">
            <b>Scenario:</b> You ask a chatbot, "What was the latest recall on my car model?"<br/>
            <b>Without RAG:</b> The LLM can only answer based on what it was trained on (may be outdated).<br/>
            <b>With RAG:</b> The system searches a database of recent recalls using embeddings, finds the latest info, and the LLM combines it with your question to give an accurate, up-to-date answer.
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg p-4 text-blue-800">
          <b>Vector Databases & Embeddings</b>
          <div className="mt-2 text-gray-700">
            Vector databases (like Pinecone, Weaviate, Qdrant, or Chroma) store <b>embeddings</b>—mathematical representations of text, code, or images. LLMs use these to search by meaning, not just keywords. This powers Retrieval-Augmented Generation (RAG), semantic search, and chatbots that can "look up" facts in real time.
          </div>
          <ul className="list-disc pl-6 mt-2">
            <li>Store millions of embeddings efficiently</li>
            <li>Find the most relevant info for a user query in milliseconds</li>
            <li>Integrate with LLMs for smarter, up-to-date answers</li>
          </ul>
          <div className="mt-2 text-xs text-gray-500">Popular vector DBs: Pinecone, Weaviate, Qdrant, Chroma, Milvus, Redis (vector mode)</div>
        </div>
        <Quiz
          question="What is the main benefit of RAG (Retrieval-Augmented Generation)?"
          options={["It lets LLMs look up fresh info", "It makes models smaller", "It encrypts data", "It speeds up training"]}
          correct={0}
          explanation="RAG lets LLMs fetch relevant, up-to-date info from external sources, improving answer accuracy."
        />
      </div>
    </section>
  );
}
