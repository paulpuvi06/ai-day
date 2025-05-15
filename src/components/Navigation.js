"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  { id: "hero", label: "What are LLMs?" },
  { id: "llm-how-they-work", label: "How LLMs Work" },
  { id: "familiar-llms", label: "Familiar LLM Models" },
  { id: "capabilities", label: "Capabilities" },
  { id: "prompting-context", label: "Prompting" },
  { id: "context-token", label: "Context & Token Limits" },
  { id: "mcp", label: "MCP" },
  { id: "a2a", label: "A2A" },
  { id: "rag", label: "RAG & Embedding" },
  { id: "copilot", label: "Copilot" },
];

export default function Navigation({ currentSection, onNavigate }) {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center px-4 py-2">
        {/* Logo/Title moved to far left */}
        <span className="text-xl font-extrabold text-blue-700 tracking-tight mr-8">LLM Overview</span>
        {/* Navigation Links centered */}
        <div className="flex gap-1 md:gap-2 justify-center flex-1">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200
                ${currentSection === section.id ? "bg-blue-600 text-white shadow font-bold" : "text-blue-700 hover:bg-blue-100"}`}
              onClick={() => onNavigate(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
