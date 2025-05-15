"use client";
import { useState } from "react";

export default function Quiz({ question, options, correct, explanation }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => {
    setSelected(idx);
    setShowResult(true);
  };

  return (
    <div className="my-6 p-4 bg-blue-50 rounded-lg shadow">
      <div className="font-semibold mb-2 text-blue-800">Quiz: {question}</div>
      <div className="flex flex-col gap-2">
        {options.map((opt, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded border text-left transition-all duration-200 focus:outline-none ${showResult ? (i === correct ? "bg-green-100 border-green-400 text-green-800" : i === selected ? "bg-red-100 border-red-400 text-red-800" : "bg-white border-gray-200") : "bg-white border-gray-200 hover:bg-blue-100"}`}
            disabled={showResult}
            onClick={() => handleSelect(i)}
          >
            {opt}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-3">
          {selected === correct ? (
            <span className="text-green-700 font-bold">Correct! 🎉</span>
          ) : (
            <span className="text-red-700 font-bold">Not quite. Try again next time!</span>
          )}
          {explanation && <div className="text-sm text-gray-600 mt-2">{explanation}</div>}
        </div>
      )}
    </div>
  );
}
