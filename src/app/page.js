"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import BehindTheScenesSection from "../components/BehindTheScenesSection";
import HowLLMsUnderstandSection from "../components/HowLLMsUnderstandSection";
import PaidVsOpenSourceSection from "../components/PaidVsOpenSourceSection";
import LLMCapabilitiesSection from "../components/LLMCapabilitiesSection";
import KeyModelsSection from "../components/KeyModelsSection";
import MCPSection from "../components/MCPSection";
import A2ASection from "../components/A2ASection";
import TokenLimitsSection from "../components/TokenLimitsSection";
import RAGSection from "../components/RAGSection";
import CopilotSection from "../components/CopilotSection";
import Footer from "../components/Footer";
import InteractiveDemoSection from "../components/InteractiveDemoSection";

const sectionList = [
  { id: "hero", label: "What are LLMs?", component: HeroSection, summary: "A simple, analogy-based intro to Large Language Models." },
  { id: "behind", label: "Behind the Scenes", component: BehindTheScenesSection, summary: "How LLMs are trained, tokenized, and how neural networks work, with real-world visuals." },
  { id: "understand", label: "How LLMs Understand", component: HowLLMsUnderstandSection, summary: "Context windows and attention explained visually." },
  { id: "paid-vs-open", label: "Paid vs Open-Source", component: PaidVsOpenSourceSection, summary: "Compare paid and open-source LLMs interactively." },
  { id: "capabilities", label: "Capabilities", component: LLMCapabilitiesSection, summary: "What LLMs can do, with interactive examples." },
  { id: "models", label: "Key Models", component: KeyModelsSection, summary: "Explore major LLM families and their strengths." },
  { id: "mcp", label: "MCP", component: MCPSection, summary: "How Model Context Protocol connects LLMs to tools and data." },
  { id: "a2a", label: "A2A", component: A2ASection, summary: "How agents talk and collaborate using A2A." },
  { id: "token-limits", label: "Token Limits", component: TokenLimitsSection, summary: "Token limits for each model, with real-world examples." },
  { id: "rag", label: "RAG & Embedding", component: RAGSection, summary: "How LLMs use retrieval and embeddings for smarter answers." },
  { id: "copilot", label: "Copilot", component: CopilotSection, summary: "GitHub Copilot modes, protocols, and code examples." },
];

export default function HomePage() {
  const [order, setOrder] = useState(sectionList.map((s) => s.id));
  const [dragged, setDragged] = useState(null);
  const [expanded, setExpanded] = useState(sectionList[0].id);

  const onDragStart = (id) => setDragged(id);
  const onDragOver = (e, id) => {
    e.preventDefault();
    if (dragged && dragged !== id) {
      const newOrder = order.filter((sid) => sid !== dragged);
      const idx = newOrder.indexOf(id);
      newOrder.splice(idx, 0, dragged);
      setOrder(newOrder);
    }
  };
  const onDragEnd = () => setDragged(null);

  return (
    <main>
      <Navigation />
      <div className="max-w-4xl mx-auto">
        {order.map((id) => {
          const section = sectionList.find((s) => s.id === id);
          const SectionComponent = section.component;
          const isOpen = expanded === id;
          return (
            <div
              key={id}
              draggable
              onDragStart={() => onDragStart(id)}
              onDragOver={(e) => onDragOver(e, id)}
              onDragEnd={onDragEnd}
              className={`group relative mb-4 rounded transition-shadow bg-white border ${dragged === id ? "ring-4 ring-blue-300" : "hover:shadow-lg"}`}
              style={{ cursor: "grab" }}
            >
              <div className="flex items-center justify-between px-4 py-2 bg-blue-50 border-b rounded-t select-none">
                <div className="flex items-center gap-2">
                  <button
                    className="text-blue-600 text-lg font-bold focus:outline-none mr-2"
                    aria-label={isOpen ? `Collapse ${section.label}` : `Expand ${section.label}`}
                    onClick={() => setExpanded(isOpen ? null : id)}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                  <span className="font-semibold text-blue-800">{section.label}</span>
                </div>
                <span className="text-xs text-gray-500 hidden md:block">{section.summary}</span>
                <span className="absolute -top-2 right-2 z-10 text-xs text-gray-400 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Drag to rearrange
                </span>
              </div>
              {isOpen && (
                <div className="p-4">
                  <SectionComponent />
                  {id === "understand" && <InteractiveDemoSection />}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
