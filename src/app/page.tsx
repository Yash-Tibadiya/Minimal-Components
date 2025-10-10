"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AllButtons from "@/pages/AllButtons";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("All Button");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "All Button":
        return <AllButtons />;
      default:
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold">Select a component from the sidebar</h1>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        onComponentSelect={setSelectedComponent}
        selectedComponent={selectedComponent}
      />
      <main className="flex-1 overflow-y-auto">
        {renderComponent()}
      </main>
    </div>
  );
}
