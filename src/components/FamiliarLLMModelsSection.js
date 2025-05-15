import { useState } from "react";
import Quiz from "./Quiz";

const paidLLMs = [
  {
    name: "OpenAI GPT-4",
    provider: "OpenAI (US)",
    providerUrl: "https://openai.com/",
    location: "Cloud (US/EU regions)",
    details: "High accuracy, advanced reasoning, API access, paid subscription.",
    more: "Used in ChatGPT Plus, Microsoft Copilot, and many enterprise solutions. Hosted on OpenAI's cloud infrastructure."
  },
  {
    name: "Anthropic Claude",
    provider: "Anthropic (US)",
    providerUrl: "https://www.anthropic.com/",
    location: "Cloud (US/EU regions)",
    details: "Strong safety features, long context, paid API.",
    more: "Popular for business chatbots and document analysis. Hosted on Anthropic's cloud."
  },
  {
    name: "Google Gemini",
    provider: "Google (US)",
    providerUrl: "https://ai.google.dev/gemini-api/",
    location: "Cloud (Global)",
    details: "Multimodal, integrates with Google services, paid tiers.",
    more: "Available in Google Workspace and Bard. Hosted on Google Cloud."
  }
];

const openSourceLLMs = [
  {
    name: "Meta Llama 3",
    provider: "Meta (US)",
    providerUrl: "https://ai.meta.com/llama/",
    location: "Downloadable, self-hostable (global)",
    details: "Open weights, strong performance, free for research/commercial use.",
    more: "Widely used in open-source projects and startups. Can be run on your own hardware or in the cloud."
  },
  {
    name: "Mistral",
    provider: "Mistral AI (France/EU)",
    providerUrl: "https://mistral.ai/",
    location: "Downloadable, self-hostable (global)",
    details: "Efficient, open weights, strong coding abilities.",
    more: "Popular for local/private deployments. Can be run on-premises or in the cloud."
  },
  {
    name: "Qwen",
    provider: "Alibaba (China)",
    providerUrl: "https://qwenlm.github.io/",
    location: "Downloadable, self-hostable (global)",
    details: "Multilingual, strong performance, open weights for research and commercial use.",
    more: "Qwen models are popular in Asia and globally for both research and enterprise. Can be run locally or in the cloud."
  },
  {
    name: "Alibaba Tongyi (Qianwen)",
    provider: "Alibaba (China)",
    providerUrl: "https://tongyi.aliyun.com/",
    location: "Cloud (China/global), some open weights",
    details: "Enterprise-ready, multilingual, available via Alibaba Cloud and some open-source releases.",
    more: "Tongyi Qianwen (Qwen) powers Alibaba's cloud AI services and is available for integration in enterprise and research."
  },
  {
    name: "Microsoft Phi-3 Mini",
    provider: "Microsoft",
    providerUrl: "https://www.microsoft.com/en-us/research/project/phi-3/",
    location: "Downloadable, self-hostable (global)",
    details: "Small, efficient, open weights, strong reasoning for its size.",
    more: "Great for local/private deployments and edge devices. Open weights available."
  }
];

export default function FamiliarLLMModelsSection() {
  const [modal, setModal] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredPaid = filter === "all" || filter === "paid" ? paidLLMs : [];
  const filteredOpen = filter === "all" || filter === "open" ? openSourceLLMs : [];

  return (
    <section id="familiar-llms" className="py-16 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Familiar LLM Models</h2>
        <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
          <b>Overview:</b> Explore the most familiar LLMs—both paid and open-source. Use the table to compare models.
        </div>
        {/* Filter Toggle */}
        <div className="flex gap-2 mb-4">
          <button className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`} onClick={() => setFilter("all")}>All</button>
          <button className={`px-3 py-1 rounded ${filter === "paid" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`} onClick={() => setFilter("paid")}>Paid</button>
          <button className={`px-3 py-1 rounded ${filter === "open" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`} onClick={() => setFilter("open")}>Open-Source</button>
        </div>
        {/* Table: Paid vs Open-Source LLMs */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border rounded-lg bg-white shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-blue-100">Model</th>
                <th className="px-4 py-2 text-left bg-blue-100">Type</th>
                <th className="px-4 py-2 text-left bg-blue-100">Provider</th>
                <th className="px-4 py-2 text-left bg-blue-100">Location/Hosting</th>
                <th className="px-4 py-2 text-left bg-blue-100">Key Features</th>
                <th className="px-4 py-2 text-left bg-blue-100">More</th>
              </tr>
            </thead>
            <tbody>
              {filteredPaid.map((m) => (
                <tr key={m.name} className="border-b">
                  <td className="px-4 py-2 font-semibold text-blue-700">{m.name}</td>
                  <td className="px-4 py-2">Paid</td>
                  <td className="px-4 py-2"><a href={m.providerUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">{m.provider}</a></td>
                  <td className="px-4 py-2">{m.location}</td>
                  <td className="px-4 py-2">{m.details}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-500 underline hover:text-blue-700"
                      onClick={() => setModal({ ...m, type: "Paid" })}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
              {filteredOpen.map((m) => (
                <tr key={m.name} className="border-b">
                  <td className="px-4 py-2 font-semibold text-green-700">{m.name}</td>
                  <td className="px-4 py-2">Open-Source</td>
                  <td className="px-4 py-2"><a href={m.providerUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">{m.provider}</a></td>
                  <td className="px-4 py-2">{m.location}</td>
                  <td className="px-4 py-2">{m.details}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-green-600 underline hover:text-green-800"
                      onClick={() => setModal({ ...m, type: "Open-Source" })}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Modal for more info */}
        {modal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-lg font-bold mb-2">{modal.name} <span className="text-xs font-normal text-gray-500">({modal.type})</span></h3>
              <div className="mb-2 text-gray-700">{modal.more}</div>
              <div className="text-sm text-gray-500">{modal.details}</div>
              <div className="text-xs text-gray-500 mt-2"><b>Provider:</b> <a href={modal.providerUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">{modal.provider}</a> <br/><b>Location/Hosting:</b> {modal.location}</div>
            </div>
          </div>
        )}
        {/* Purpose-Based Model Categories (Updated May 2025) */}
        <h3 className="text-xl font-bold mt-10 mb-4 text-blue-700">Familiar LLMs by Purpose (2025)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <div className="font-semibold text-blue-700 mb-2">Reasoning & General AI</div>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li><b>OpenAI GPT-4o</b> <span className="text-gray-500">(128k context, multimodal, 2025)</span></li>
              <li><b>OpenAI GPT-4.5</b> <span className="text-gray-500">(128k context, 2025)</span></li>
              <li><b>Anthropic Claude 3.7 Sonnet</b> <span className="text-gray-500">(200k context, 2025)</span></li>
              <li><b>Anthropic Claude 3 Opus</b> <span className="text-gray-500">(200k context)</span></li>
              <li><b>Meta Llama 3 70B</b> <span className="text-gray-500">(8k context, open-source)</span></li>
              <li><b>Microsoft Phi-3 Mini</b> <span className="text-gray-500">(4k context, efficient reasoning)</span></li>
              <li><b>Qwen3-235B</b> <span className="text-gray-500">(2025, open-source)</span></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-700 mb-2">Code Completion & Generation</div>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li><b>OpenAI GPT-4o</b> <span className="text-gray-500">(128k context, 2025)</span></li>
              <li><b>Anthropic Claude 3.7 Sonnet</b> <span className="text-gray-500">(200k context, 2025)</span></li>
              <li><b>Mistral Large</b> <span className="text-gray-500">(32k context, 2025)</span></li>
              <li><b>Qwen3-235B</b> <span className="text-gray-500">(2025, open-source)</span></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-blue-700 mb-2 mt-6">Multimodal (Text, Image, etc.)</div>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li><b>OpenAI GPT-4o</b> <span className="text-gray-500">(text, image, audio, video, 2025)</span></li>
              <li><b>Google Gemini 2.5 Pro Preview</b> <span className="text-gray-500">(audio, image, video, text, 2025)</span></li>
              <li><b>Qwen2.5-Omni</b> <span className="text-gray-500">(text, image, audio, video, open-source, 2025)</span></li>
              <li><b>Qwen2.5-VL-32B</b> <span className="text-gray-500">(image-to-text, open-source, 2025)</span></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-700 mb-2 mt-6">Text-to-Image</div>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li><b>OpenAI DALL·E 3</b> <span className="text-gray-500">(2023-2025, text-to-image)</span></li>
              <li><b>Stable Diffusion 3.5 Large</b> <span className="text-gray-500">(open-source, 2025)</span></li>
              <li><b>Imagen 3</b> <span className="text-gray-500">(Google, 2025)</span></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-4">Models are grouped by their primary purpose. Some models appear in multiple categories due to their versatility. (Latest model names and versions as of May 2025.)</div>
        {/* Quiz */}
        <div className="mt-8">
          <Quiz
            question="Which of these is an open-source LLM?"
            options={["OpenAI GPT-4", "Anthropic Claude", "Meta Llama 3", "Google Gemini"]}
            correct={2}
            explanation="Meta Llama 3 is an open-source LLM, free for research and commercial use."
          />
        </div>
      </div>
    </section>
  );
}