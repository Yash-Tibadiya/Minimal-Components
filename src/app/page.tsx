"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import IconButtons from "@/pages/IconButtons";
import SimpleButtons from "@/pages/SimpleButtons";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("All Button");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Simple Button":
        return <SimpleButtons />;
      case "Icon Button":
        return <IconButtons />;
      default:
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold">
              Select a component from the sidebar
            </h1>
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
      <main className="flex-1 overflow-y-auto">{renderComponent()}</main>
    </div>
  );
}
