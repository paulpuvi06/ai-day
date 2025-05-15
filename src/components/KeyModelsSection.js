"use client";

import { useState } from "react";
import Quiz from "./Quiz";

const models = [
  {
    name: "OpenAI GPT Family",
    details: "GPT-3, GPT-3.5, and GPT-4 are advanced paid models known for their accuracy and versatility.",
    scenario: {
      title: "Vision: Image to Text (GPT-4V)",
      description: "Upload a photo of a car dashboard, and GPT-4V describes the warning lights and suggests what to do next.",
      example: {
        input: "[Image of dashboard with tire pressure warning]",
        output: "The dashboard shows a yellow tire pressure warning light. This means one or more tires may be under-inflated. Check your tire pressure soon."
      }
    }
  },
  {
    name: "Anthropic Claude Family",
    details: "Claude models focus on safety and long context windows.",
    scenario: {
      title: "Document Analysis",
      description: "Upload a long car manual PDF, and Claude summarizes the maintenance schedule in plain language.",
      example: {
        input: "[Car manual PDF]",
        output: "Your car should be serviced every 10,000 miles. Oil changes are recommended every 5,000 miles."
      }
    }
  },
  {
    name: "Google Gemini (Bard)",
    details: "Gemini is Google's multimodal LLM, available in paid and free versions.",
    scenario: {
      title: "Multimodal: Route Planning",
      description: "Paste a map screenshot and a list of destinations. Gemini suggests the most efficient route and travel tips.",
      example: {
        input: "[Map image + list of addresses]",
        output: "Suggested route: Start at A, then B, C, and finish at D. Avoid highway 101 due to traffic."
      }
    }
  },
  {
    name: "Meta Llama Family",
    details: "Llama 2 and 3 are open-source, high-performance models.",
    scenario: {
      title: "Chatbot Integration",
      description: "Integrate Llama into a car's infotainment system to answer driver questions about vehicle features.",
      example: {
        input: "How do I turn on lane assist?",
        output: "To turn on lane assist, press the button on the left stalk or use the touchscreen menu under 'Driver Assistance'."
      }
    }
  },
  {
    name: "Mistral",
    details: "Open-source, efficient, and strong at code and language tasks.",
    scenario: {
      title: "Code Generation for Automotive Apps",
      description: "Generate code snippets for car telemetry dashboards or maintenance reminders.",
      example: {
        input: "Write a Python function to alert when oil change is due.",
        output: "def oil_change_due(miles):\n    return miles >= 5000"
      }
    }
  },
  {
    name: "Falcon",
    details: "Open-source, research-focused, and permissively licensed.",
    scenario: {
      title: "Data Analysis",
      description: "Analyze car sensor CSV data to detect anomalies or predict maintenance needs.",
      example: {
        input: "[CSV: tire_pressure, engine_temp, mileage]",
        output: "Tire pressure dropped suddenly at 12,000 miles. Recommend inspection."
      }
    }
  },
];

export default function KeyModelsSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="models" className="py-16 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Key LLM Families & Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {models.map((m, i) => (
            <div
              key={m.name}
              className="bg-blue-50 rounded-lg shadow p-4 cursor-pointer hover:bg-blue-100 transition"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="font-semibold text-blue-700 flex items-center justify-between">
                {m.name}
                <span className="ml-2 text-xs text-gray-500">{open === i ? "▲" : "▼"}</span>
              </div>
              {open === i && (
                <div className="mt-2 text-gray-700 text-sm animate-fade-in">
                  {m.details}
                  {m.scenario && (
                    <div className="mt-4 bg-blue-100 rounded p-3">
                      <div className="font-semibold text-blue-800 mb-1">Real-World Scenario: {m.scenario.title}</div>
                      <div className="mb-1 text-gray-700">{m.scenario.description}</div>
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">Input:</span> {m.scenario.example.input}<br />
                        <span className="font-bold">Output:</span> {m.scenario.example.output}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-400 mt-4">Tap a model for more info.</div>
        <Quiz
          question="Which model family is open-source and high-performance?"
          options={["OpenAI GPT", "Anthropic Claude", "Meta Llama", "Google Gemini"]}
          correct={2}
          explanation="Meta Llama models are open-source and known for strong performance."
        />
      </div>
    </section>
  );
}
