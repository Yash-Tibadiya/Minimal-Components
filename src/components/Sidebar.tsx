"use client";

import { MenuSquare, XSquareIcon } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  onComponentSelect: (componentName: string) => void;
  selectedComponent: string;
}

const components = [
  { name: "Simple Button", category: "Button" },
  { name: "Icon Button", category: "Button" },
  { name: "Badge", category: "Badge" },
];

const Sidebar = ({ onComponentSelect, selectedComponent }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Group components by category
  const groupedComponents = components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, typeof components>);

  const SidebarContent = () => (
    <div className="h-full flex flex-col p-2 bg-white">
      <div className="p-4 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-700">All Components</h2>
        <p className="text-sm text-gray-500 mt-1">Click to view component</p>
      </div>
      <div className="border-b-2 border-dashed border-gray-300 mx-3"></div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
        {Object.entries(groupedComponents).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-bold text-gray-700 mb-1">{category}</h3>
            <ul className="flex flex-col">
              {items.map((component) => (
                <li key={component.name}>
                  <button
                    onClick={() => {
                      onComponentSelect(component.name);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-base rounded-md transition-colors ${
                      selectedComponent === component.name
                        ? "bg-foreground text-background font-medium"
                        : "hover:bg-foreground/10"
                    }`}
                  >
                    {component.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md text-gray-700 hover:bg-sand-400 transition-colors"
        aria-label="Toggle menu ${
          isOpen ? "text-white hover:text-gray-700" : ""
        }`}
      >
        {isOpen ? <XSquareIcon /> : <MenuSquare />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-700 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-72 bg-background border-r-2 border-dashed border-gray-300 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;
