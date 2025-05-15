"use client";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

export default function MCPSection() {
  const mcpPrimitives = [
    {
      name: "Tools",
      description: "APIs or functions that the LLM can call (e.g., get tire pressure, start navigation)."
    },
    {
      name: "Resources",
      description: "External data or documents (e.g., car manual, weather info)."
    },
    {
      name: "Prompting",
      description: "Instructions or templates to guide the LLM's response."
    }
  ];

  return (
    <section id="mcp" className="py-24 min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 text-center tracking-tight drop-shadow">Model Context Protocol (MCP)</h2>
        <p className="mb-12 text-2xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold">MCP</span> is like a universal adapter for AI models. It lets language models access the right data, tools, or APIs at the right time—without being hardwired for every possible scenario. Think of it as a smart assistant that fetches only what you need, when you need it, keeping things efficient and secure.
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-center mb-14">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex justify-center"
          >
            <svg viewBox="0 0 400 140" className="w-full max-w-md mx-auto drop-shadow-xl">
              <rect x="10" y="50" width="80" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
              <text x="50" y="75" textAnchor="middle" fontSize="14" fill="#2563eb">App</text>
              <rect x="310" y="50" width="80" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
              <text x="350" y="75" textAnchor="middle" fontSize="14" fill="#2563eb">LLM</text>
              <rect x="160" y="10" width="80" height="40" rx="10" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" />
              <text x="200" y="35" textAnchor="middle" fontSize="13" fill="#b45309">MCP Server</text>
              <motion.line x1="90" y1="70" x2="160" y2="30" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
              <motion.line x1="240" y1="30" x2="310" y2="70" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
              <text x="200" y="60" textAnchor="middle" fontSize="12" fill="#2563eb">Context, Tools, APIs</text>
            </svg>
          </motion.div>
          <div className="flex-1 text-gray-800 bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
            <ul className="list-disc pl-6 mb-6 space-y-3 text-lg">
              <li><b>Contextual Data Injection:</b> Pull in files, database rows, or API responses right into the prompt.</li>
              <li><b>Function Routing:</b> Models can call tools dynamically, like a toolbox for your AI.</li>
              <li><b>Prompt Orchestration:</b> Build prompts on-the-fly with just the info that matters—smarter, fewer tokens, better results.</li>
            </ul>
            <div className="text-base text-blue-700 font-semibold">MCP is model-agnostic, secure, and works with any LLM that supports it.</div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="bg-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3 text-xl">Why MCP Matters</h3>
            <p className="mb-3 text-gray-800 text-lg">
              <b>Without MCP:</b> Each app or device (like your car's dashboard, a mobile app, or a website) would need to build its own custom integration with an LLM. The LLM would be limited to what it already knows and couldn't access real-time data, perform actions, or fetch up-to-date information. This is like every device needing a different, proprietary charger—inefficient and frustrating for both users and developers.
            </p>
            <p className="mb-0 text-gray-800 text-lg">
              <b>With MCP:</b> The LLM can call tools, access resources, and use prompting to give you accurate, up-to-date, and actionable help—just like a real assistant.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3 text-xl">MCP Primitives</h3>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-lg">
              <li><span className="font-semibold">Tools:</span> APIs or functions the LLM can call (e.g., get tire pressure, start navigation).</li>
              <li><span className="font-semibold">Resources:</span> External data or documents (e.g., car manual, weather info).</li>
              <li><span className="font-semibold">Prompting:</span> Instructions or templates to guide the LLM's response.</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-100 rounded-2xl p-8 mb-10 shadow-xl border border-blue-200">
          <h3 className="font-bold text-blue-700 mb-3 text-xl">How to Add Playwright MCP in VS Code</h3>
          <p className="mb-3 text-gray-800 text-lg">Create a <code>.vscode/mcp.json</code> file in your workspace with the following content:</p>
          <pre className="bg-gray-100 rounded p-3 overflow-x-auto text-xs text-gray-800 mb-3"><code>{`{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}`}</code></pre>
          <div className="text-sm text-blue-700 mb-2">
            <a href="https://code.visualstudio.com/docs/copilot/chat/mcp-servers" target="_blank" rel="noopener noreferrer" className="underline">How to add MCP servers in VS Code</a>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-xl border border-blue-100">
          <h3 className="font-bold text-blue-700 mb-3 text-xl">Real-World Example (with MCP)</h3>
          <div className="mb-2 text-gray-800 text-lg">A driver asks: <span className="italic">"What's the tire pressure and how do I fix it?"</span></div>
          <ol className="list-decimal ml-6 text-base text-gray-700 mb-1 space-y-2">
            <li>Tool: Call the tire pressure sensor API.</li>
            <li>Resource: Retrieve the relevant section from the car manual.</li>
            <li>Prompting: Use a prompt template to generate a step-by-step guide for the driver.</li>
          </ol>
        </div>
        <div className="text-sm text-blue-700 mt-10 text-center">
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="underline">Download Visual Studio Code</a>
        </div>
        <div className="mt-12">
          <Quiz
            question="Which protocol lets LLMs access tools and data on demand?"
            options={["A2A", "MCP", "ACP", "SMTP"]}
            correct={1}
            explanation="MCP (Model Context Protocol) connects LLMs to external tools, APIs, and data sources."
          />
        </div>
      </div>
    </section>
  );
}
