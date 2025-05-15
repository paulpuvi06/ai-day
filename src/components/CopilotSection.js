"use client";
import { motion } from "framer-motion";
import Quiz from "./Quiz";

export default function CopilotSection() {
  return (
    <section id="copilot" className="py-16 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">GitHub Copilot: Modes, Real-World AI Models, and Code Examples</h2>
        <p className="mb-4 text-lg text-gray-700">
          <span className="font-semibold">GitHub Copilot</span> is an AI-powered coding assistant that helps you write, understand, and refactor code. It offers three powerful modes: <b>Ask Mode</b>, <b>Edit Mode</b>, and <b>Agent Mode</b>. GitHub Copilot can leverage different AI models for different tasks, making it flexible and powerful for real-world development.
        </p>
        <div className="mb-4 text-blue-900 bg-blue-100 rounded p-3">
          <b>Real-world analogy:</b> Imagine GitHub Copilot as a team of assistants: one is fast and great for quick questions (Ask Mode), another is focused on making precise edits (Edit Mode), and a third can handle big, complex projects (Agent Mode). Each uses the right tools (AI models) for the job.
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col h-full bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Ask Mode</h3>
            <ul className="list-disc pl-6 text-gray-700 flex-1 mb-4">
              <li>Ask GitHub Copilot questions about your codebase, frameworks, or best practices.</li>
              <li>Get instant, context-aware answers and explanations.</li>
              <li>Great for learning, onboarding, and quick code understanding.</li>
            </ul>
            <div className="mt-auto pt-2 text-sm text-blue-700 border-t border-blue-100">
              <b>Example:</b> "Why is my React component not updating?" <span className="text-gray-800">GitHub Copilot explains the bug, highlights the missing state update, and suggests a fix with code.</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col h-full bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Edit Mode</h3>
            <ul className="list-disc pl-6 text-gray-700 flex-1 mb-4">
              <li>Quickly make code changes, refactor, or add features in a single file.</li>
              <li>Great for focused, file-level improvements.</li>
              <li>GitHub Copilot suggests edits and you approve or modify them.</li>
            </ul>
            <div className="mt-auto pt-2 text-sm text-blue-700 border-t border-blue-100">
              <b>Example:</b> "Refactor this function to use async/await." <span className="text-gray-800">GitHub Copilot rewrites the function, replacing callbacks with async/await syntax.</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-col h-full bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Agent Mode</h3>
            <ul className="list-disc pl-6 text-gray-700 flex-1 mb-4">
              <li>Lets GitHub Copilot work across your entire project, not just one file.</li>
              <li>Can create new files, refactor multiple files, and automate complex workflows.</li>
              <li>Ideal for larger changes, new features, or project-wide improvements.</li>
            </ul>
            <div className="mt-auto pt-2 text-sm text-blue-700 border-t border-blue-100">
              <b>Example:</b> "Write end-to-end tests for all API endpoints and generate a Q&A checklist for each route." <span className="text-gray-800">GitHub Copilot creates and inserts comprehensive test files and Q&A checklists, helping you ensure quality and coverage across your project.</span>
            </div>
          </motion.div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <svg className="inline w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" /></svg>
            Watch GitHub Copilot in Action: Modes & Real Coding
          </h3>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl mx-auto mb-4">
            <iframe
              src="https://www.youtube.com/embed/s7Qzq0ejhjg"
              title="GitHub Copilot Modes Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-96 rounded-lg border"
            ></iframe>
          </div>
          <div className="mb-2 text-gray-700 text-base">
            <b>Jump to a real example:</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a href="https://youtu.be/s7Qzq0ejhjg?t=125" target="_blank" rel="noopener noreferrer" className="underline">Ask Mode: Debugging & Learning (02:05)</a> – See GitHub Copilot answer code questions and explain errors.</li>
              <li><a href="https://youtu.be/s7Qzq0ejhjg?t=1260" target="_blank" rel="noopener noreferrer" className="underline">Edit Mode: Refactor in Seconds (21:00)</a> – Watch GitHub Copilot rewrite and improve real code.</li>
              <li><a href="https://youtu.be/s7Qzq0ejhjg?t=1890" target="_blank" rel="noopener noreferrer" className="underline">Agent Mode: Project-Wide Automation (31:30)</a> – See GitHub Copilot automate multi-file changes and use tools.</li>
            </ul>
            <span className="text-sm text-blue-700">Tip: Each mode is shown with a real coding scenario. Use the video chapters to skip to what you need!</span>
          </div>
          <div className="text-sm text-blue-700 mt-2 space-y-1">
            <div>For more, see the <a href="https://code.visualstudio.com/docs/copilot/overview" target="_blank" rel="noopener noreferrer" className="underline">GitHub Copilot official docs</a>.</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">About GitHub Copilot Models</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><b>GPT-3.5:</b> Fast, great for most code completion and suggestions. Recommended for Edit Mode and quick tasks.</li>
            <li><b>GPT-4:</b> More accurate, better at complex reasoning, and can handle longer context. Ideal for Ask Mode, Agent Mode, and advanced code generation or explanations.</li>
            <li><b>Other models:</b> GitHub Copilot may use specialized models for certain languages or tasks, and may update available models over time.</li>
          </ul>
          <div className="text-sm text-blue-700 mt-2">
            <a href="https://docs.github.com/en/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task" target="_blank" rel="noopener noreferrer" className="underline">Learn more about GitHub Copilot models</a>
          </div>
        </div>
        <Quiz
          question="Which GitHub Copilot mode is best for project-wide, multi-file changes?"
          options={["Ask Mode", "Edit Mode", "Agent Mode", "Chat Mode"]}
          correct={2}
          explanation="Agent Mode lets GitHub Copilot work across your whole project, automating complex, multi-file tasks."
        />
        <div className="mt-6 text-sm text-gray-500">
          Learn more: <a href="https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/#h-agent-mode-a-lot-of-power-when-you-re-ready-for-it" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GitHub Copilot: Ask, Edit, and Agent Modes</a> | <a href="https://github.blog/ai-and-ml/real%e2%80%91world-video-demo-using-different-ai-models-in-github-copilot/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Real-World Video Demo: Using Different AI Models in GitHub Copilot</a>
        </div>
      </div>
    </section>
  );
}
