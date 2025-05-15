"use client";
import { useState } from "react";
import Quiz from "./Quiz";

const paidLLMs = [
  {
    name: "OpenAI GPT-4",
    provider: "OpenAI (US)",
    location: "Cloud (US/EU regions)",
    details: "High accuracy, advanced reasoning, API access, paid subscription.",
    more: "Used in ChatGPT Plus, Microsoft Copilot, and many enterprise solutions. Hosted on OpenAI's cloud infrastructure."
  },
  {
    name: "Anthropic Claude",
    provider: "Anthropic (US)",
    location: "Cloud (US/EU regions)",
    details: "Strong safety features, long context, paid API.",
    more: "Popular for business chatbots and document analysis. Hosted on Anthropic's cloud."
  },
  {
    name: "Google Gemini",
    provider: "Google (US)",
    location: "Cloud (Global)",
    details: "Multimodal, integrates with Google services, paid tiers.",
    more: "Available in Google Workspace and Bard. Hosted on Google Cloud."
  },
];

const openSourceLLMs = [
  {
    name: "Meta Llama 3",
    provider: "Meta (US)",
    location: "Downloadable, self-hostable (global)",
    details: "Open weights, strong performance, free for research/commercial use.",
    more: "Widely used in open-source projects and startups. Can be run on your own hardware or in the cloud."
  },
  {
    name: "Mistral",
    provider: "Mistral AI (France/EU)",
    location: "Downloadable, self-hostable (global)",
    details: "Efficient, open weights, strong coding abilities.",
    more: "Popular for local/private deployments. Can be run on-premises or in the cloud."
  },
  {
    name: "Falcon",
    provider: "TII (UAE)",
    location: "Downloadable, self-hostable (global)",
    details: "Open weights, good for research, permissive license.",
    more: "Used in academic and research settings. Can be run on your own infrastructure."
  },
  {
    name: "Qwen",
    provider: "Alibaba (China)",
    location: "Downloadable, self-hostable (global)",
    details: "Multilingual, strong performance, open weights for research and commercial use.",
    more: "Qwen models are popular in Asia and globally for both research and enterprise. Can be run locally or in the cloud."
  },
  {
    name: "Alibaba Tongyi (Qianwen)",
    provider: "Alibaba (China)",
    location: "Cloud (China/global), some open weights",
    details: "Enterprise-ready, multilingual, available via Alibaba Cloud and some open-source releases.",
    more: "Tongyi Qianwen (Qwen) powers Alibaba's cloud AI services and is available for integration in enterprise and research."
  },
];

export default function PaidVsOpenSourceSection() {
  const [modal, setModal] = useState(null);
  return (
    <section id="paid-vs-open" className="py-16 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Paid vs Open-Source LLMs</h2>
        <div className="mb-4 text-blue-900 bg-blue-50 rounded p-3">
          <b>Summary:</b> Paid LLMs (like OpenAI, Anthropic, Google) are hosted in the cloud, easy to use, and offer strong support, but may have privacy or compliance limitations. Open-source LLMs (like Llama 3, Mistral, Falcon) can be downloaded and run anywhere—giving you more control, privacy, and flexibility, but require more setup and maintenance.
        </div>
        <div className="overflow-x-auto">
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
              {paidLLMs.map((m, i) => (
                <tr key={m.name} className="border-b">
                  <td className="px-4 py-2 font-semibold text-blue-700">{m.name}</td>
                  <td className="px-4 py-2">Paid</td>
                  <td className="px-4 py-2">{m.provider}</td>
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
              {openSourceLLMs.map((m, i) => (
                <tr key={m.name} className="border-b">
                  <td className="px-4 py-2 font-semibold text-green-700">{m.name}</td>
                  <td className="px-4 py-2">Open-Source</td>
                  <td className="px-4 py-2">{m.provider}</td>
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
              <div className="text-xs text-gray-500 mt-2"><b>Provider:</b> {modal.provider} <br/><b>Location/Hosting:</b> {modal.location}</div>
            </div>
          </div>
        )}
        <Quiz
          question="Which of these is an open-source LLM?"
          options={["OpenAI GPT-4", "Anthropic Claude", "Meta Llama 3", "Google Gemini"]}
          correct={2}
          explanation="Meta Llama 3 is an open-source LLM, free for research and commercial use."
        />
      </div>
    </section>
  );
}
