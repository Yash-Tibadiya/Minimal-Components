"use client";

import { useEffect, useState } from "react";

interface ChecklistItem {
  text: string;
  completed: boolean;
}

export default function ProcessingPage() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { text: "Analyzing your profile...", completed: false },
    { text: "Matching you with a provider...", completed: false },
    { text: "Finalizing your intake...", completed: false },
  ]);

  useEffect(() => {
    // Animate checklist items one by one
    const timers: NodeJS.Timeout[] = [];
    
    checklist.forEach((_, index) => {
      const timer = setTimeout(() => {
        setChecklist((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, completed: true } : item
          )
        );
      }, (index + 1) * 1500); // 2 seconds delay between each item
      
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-50">
      <div className="text-center py-16 animate-fade-in-up">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary-500 rounded-full animate-spin mx-auto"></div>
        <h1 className="font-lora text-3xl font-medium text-gray-800 mt-8">
          Processing Your Request
        </h1>
        <div
          id="processing-checklist"
          className="mt-6 text-left max-w-xs mx-auto space-y-3"
        >
          {checklist.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 transition-all duration-500 ${
                item.completed ? "opacity-100" : "opacity-50"
              }`}
              style={{
                animation: `fade-in-left 0.5s ease-out ${index * 0.2}s forwards`,
                opacity: 0,
              }}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  item.completed
                    ? "bg-primary-500 border-primary-500"
                    : "border-gray-300"
                }`}
              >
                {item.completed && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}