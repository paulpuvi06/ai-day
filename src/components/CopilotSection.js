"use client";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

export default function CopilotSection() {
  return (
    <section id="copilot" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">GitHub Copilot: Modes, Real-World AI Models, and Code Examples</h2>
        <p className="mb-4 text-lg text-gray-700">
          <span className="font-semibold">GitHub Copilot</span> is an AI-powered coding assistant that helps you write, understand, and refactor code. It offers three powerful modes: <b>Ask Mode</b>, <b>Edit Mode</b>, and <b>Agent Mode</b>. Copilot can leverage different AI models for different tasks, making it flexible and powerful for real-world development.
        </p>
        <div className="mb-4 text-blue-900 bg-blue-100 rounded p-3">
          <b>Real-world analogy:</b> Imagine Copilot as a team of assistants: one is fast and great for quick questions (Ask Mode), another is focused on making precise edits (Edit Mode), and a third can handle big, complex projects (Agent Mode). Each uses the right tools (AI models) for the job.
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Ask Mode</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Ask Copilot questions about your codebase, frameworks, or best practices.</li>
              <li>Get instant, context-aware answers and explanations.</li>
              <li>Great for learning, onboarding, and quick code understanding.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Edit Mode</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Quickly make code changes, refactor, or add features in a single file.</li>
              <li>Great for focused, file-level improvements.</li>
              <li>Copilot suggests edits and you approve or modify them.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Agent Mode</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Lets Copilot work across your entire project, not just one file.</li>
              <li>Can create new files, refactor multiple files, and automate complex workflows.</li>
              <li>Ideal for larger changes, new features, or project-wide improvements.</li>
            </ul>
          </motion.div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Visual Overview: Copilot Modes & When to Use Them</h3>
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1">
              <svg viewBox="0 0 600 120" className="w-full max-w-3xl mx-auto">
                {/* Ask Mode */}
                <rect x="20" y="40" width="120" height="40" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
                <text x="80" y="65" textAnchor="middle" fontSize="15" fill="#6366f1">Ask Mode</text>
                {/* Edit Mode */}
                <rect x="180" y="40" width="120" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                <text x="240" y="65" textAnchor="middle" fontSize="15" fill="#2563eb">Edit Mode</text>
                {/* Agent Mode */}
                <rect x="340" y="40" width="120" height="40" rx="10" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" />
                <text x="400" y="65" textAnchor="middle" fontSize="15" fill="#b45309">Agent Mode</text>
                {/* Model icons */}
                <circle cx="80" cy="100" r="12" fill="#6366f1" />
                <text x="80" y="105" textAnchor="middle" fontSize="12" fill="#fff">M1</text>
                <circle cx="240" cy="100" r="12" fill="#2563eb" />
                <text x="240" y="105" textAnchor="middle" fontSize="12" fill="#fff">M2</text>
                <circle cx="400" cy="100" r="12" fill="#f59e42" />
                <text x="400" y="105" textAnchor="middle" fontSize="12" fill="#fff">M3</text>
                {/* Arrows */}
                <motion.line x1="140" y1="60" x2="180" y2="60" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                <motion.line x1="300" y1="60" x2="340" y2="60" stroke="#60a5fa" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
              </svg>
            </motion.div>
            <div className="flex-1 text-gray-600">
              <ul className="list-disc pl-6 mb-2">
                <li><b>Ask Mode:</b> Q&A, explanations, codebase search (Model M1). <span className="text-blue-700">Use for questions, explanations, and codebase understanding.</span></li>
                <li><b>Edit Mode:</b> File-level, quick changes (Model M2). <span className="text-blue-700">Use for quick, targeted changes in a single file.</span></li>
                <li><b>Agent Mode:</b> Project-level, multi-file automation (Model M3). <span className="text-blue-700">Use for bigger tasks that span multiple files or require project-wide context.</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Modes vs. Models: What's the Difference?</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li><b>Modes</b> are how you interact with Copilot (Ask, Edit, Agent)—think of them as different workflows or assistants.</li>
            <li><b>Models</b> are the brains behind the scenes (like GPT-3.5 or GPT-4) that power each mode. Copilot picks the best one for your task, or you can choose.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Practical Example: Choosing the Right Mode & Model</h3>
          <div className="text-gray-700 mb-2">
            <b>Scenario:</b> You want to refactor your whole project for better performance.<br/>
            <b>Best choice:</b> Use <b>Agent Mode</b> with <b>GPT-4</b> for project-wide, multi-file changes and deeper reasoning.<br/>
            <span className="text-sm text-gray-500">Tip: For quick file edits, use Edit Mode with GPT-3.5. For explanations or onboarding, Ask Mode is ideal.</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">How Copilot Uses Different AI Models</h3>
          <p className="mb-2 text-gray-700">Copilot can use different AI models for different tasks, such as code completion, code search, and chat. For example:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li><b>Code Completion:</b> Uses a fast, specialized model to suggest code as you type.</li>
            <li><b>Chat/Ask:</b> Uses a larger, more capable model to answer questions and explain code.</li>
            <li><b>Project-Wide Tasks (Agent Mode):</b> May use a combination of models to analyze, refactor, and generate code across files.</li>
          </ul>
          <div className="text-sm text-gray-500">This flexibility lets Copilot deliver the right balance of speed, accuracy, and context for each workflow.</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Choosing the Right Copilot AI Model for Your Task</h3>
          <p className="mb-2 text-gray-700">
            GitHub Copilot supports multiple AI models, and you can choose which one to use for your coding tasks. The choice of model can affect speed, accuracy, and the types of tasks Copilot can help with. For example:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li><b>GPT-3.5:</b> Fast, good for most code completion and suggestions. Recommended for Edit Mode and quick tasks.</li>
            <li><b>GPT-4:</b> More accurate, better at complex reasoning, and can handle longer context. Ideal for Ask Mode, Agent Mode, and advanced code generation or explanations.</li>
            <li><b>Other models:</b> Copilot may use specialized models for certain languages or tasks, and may update available models over time.</li>
          </ul>
          <div className="text-sm text-gray-500 mb-2">
            <b>Tip:</b> For quick code suggestions, use GPT-3.5. For deeper explanations, project-wide changes, or complex refactoring, try GPT-4 or let Copilot choose automatically.
          </div>
          <div className="text-sm text-blue-700">
            Learn more and see the latest model options: <a href="https://docs.github.com/en/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task" className="underline" target="_blank" rel="noopener noreferrer">Choosing the right AI model for your task (GitHub Docs)</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">How to Switch Copilot Models in VS Code</h3>
          <p className="mb-2 text-gray-700">You can choose which AI model Copilot uses for your tasks. In VS Code, look for the Copilot model selector in the status bar or follow the official guide below.</p>
          <div className="text-sm text-blue-700 mb-2">
            <a href="https://docs.github.com/en/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task" className="underline" target="_blank" rel="noopener noreferrer">How to choose your Copilot model (GitHub Docs)</a>
          </div>
        </div>
        <Quiz
          question="Which Copilot mode is best for project-wide, multi-file changes?"
          options={["Ask Mode", "Edit Mode", "Agent Mode", "Chat Mode"]}
          correct={2}
          explanation="Agent Mode lets Copilot work across your whole project, automating complex, multi-file tasks."
        />
        <div className="mt-6 text-sm text-gray-500">
          Learn more: <a href="https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/#h-agent-mode-a-lot-of-power-when-you-re-ready-for-it" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GitHub Copilot: Ask, Edit, and Agent Modes</a> | <a href="https://github.blog/ai-and-ml/real%e2%80%91world-video-demo-using-different-ai-models-in-github-copilot/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Real-World Video Demo: Using Different AI Models in GitHub Copilot</a>
        </div>
      </div>
    </section>
  );
}
