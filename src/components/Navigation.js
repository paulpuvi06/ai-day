"use client";

import Link from "next/link";

const sections = [
  { id: "hero", label: "What are LLMs?" },
  { id: "behind", label: "Behind the Scenes" },
  { id: "understand", label: "How LLMs Understand" },
  { id: "paid-vs-open", label: "Paid vs Open-Source" },
  { id: "capabilities", label: "Capabilities" },
  { id: "models", label: "Key Models" },
  { id: "mcp", label: "MCP" },
  { id: "a2a", label: "A2A" },
  { id: "visual-diagrams", label: "Visual Diagrams" },
  { id: "acp", label: "ACP" },
  { id: "token-limits", label: "Token Limits" },
  { id: "rag", label: "RAG & Embedding" },
  { id: "copilot", label: "Copilot" },
];

export default function Navigation() {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4 justify-center">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
