"use client";
import { motion } from "framer-motion";
import PromptPlayground from "./PromptPlayground";

export default function PromptingSection() {
  return (
    <section id="prompting" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2">
          Prompting: Getting the Best from LLMs
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow p-6 animate-fade-in"
        >
          <p className="mb-4 text-lg text-gray-700">
            <b>Prompting</b> is the art of telling an LLM exactly what you want. Clear, specific prompts lead to better, more reliable results. The way you phrase your request can dramatically change the output.
          </p>
          <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
            <b>Best Practices for Prompting:</b>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
              <li>Be specific about your goal or question.</li>
              <li>Break down complex tasks into clear steps.</li>
              <li>State the desired format (e.g., "Return as a table").</li>
              <li>Give examples if possible (show the model what you want).</li>
              <li>For code, specify language, style, and constraints.</li>
              <li>Iterate: If the first result isn't perfect, refine your prompt and try again.</li>
            </ul>
          </div>
          <div className="mb-4">
            <b>Good vs Bad Prompt Examples:</b>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="bg-green-50 border-l-4 border-green-400 rounded p-3">
                <b>Good Prompt:</b>
                <div className="text-gray-800 mt-1 text-base">
                  "Summarize the following article in 3 bullet points for a business audience. Article: [paste text here]"
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 rounded p-3">
                <b>Bad Prompt:</b>
                <div className="text-gray-800 mt-1 text-base">
                  "Summarize this."
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 rounded p-3">
                <b>Good Prompt:</b>
                <div className="text-gray-800 mt-1 text-base">
                  "Write a Python function that takes a list of numbers and returns the average. Include type hints and a docstring."
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 rounded p-3">
                <b>Bad Prompt:</b>
                <div className="text-gray-800 mt-1 text-base">
                  "Write a function."
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 rounded p-3">
                <b>Good Prompt:</b>
                <div className="text-gray-800 mt-1 text-base">
                  "Translate the following text to French, and format the output as a table with columns for English and French. Text: 'Hello, how are you?'"
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 rounded p-3">
                <b>Bad Prompt:</b>
                <div className="text-gray-800 mt-1 text-base">
                  "Translate this."
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 text-blue-700 text-sm">
            Learn more: <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer" className="underline">Prompt Engineering Guide (Anthropic Docs)</a>
          </div>
          <PromptPlayground />
        </motion.div>
      </div>
    </section>
  );
}
