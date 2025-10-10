"use client";

import Button from "../components/Button";

const AllButtons = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">All Button Variants</h1>
      <p className="text-foreground/60 mb-8">
        Explore all available button styles and sizes
      </p>

      {/* Primary Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Primary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="sm">
            Small Primary
          </Button>
          <Button variant="primary" size="md">
            Medium Primary
          </Button>
          <Button variant="primary" size="lg">
            Large Primary
          </Button>
          <Button variant="primary" size="md" disabled>
            Disabled Primary
          </Button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Secondary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="secondary" size="sm">
            Small Secondary
          </Button>
          <Button variant="secondary" size="md">
            Medium Secondary
          </Button>
          <Button variant="secondary" size="lg">
            Large Secondary
          </Button>
          <Button variant="secondary" size="md" disabled>
            Disabled Secondary
          </Button>
        </div>
      </section>

      {/* Outline Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Outline Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="outline" size="sm">
            Small Outline
          </Button>
          <Button variant="outline" size="md">
            Medium Outline
          </Button>
          <Button variant="outline" size="lg">
            Large Outline
          </Button>
          <Button variant="outline" size="md" disabled>
            Disabled Outline
          </Button>
        </div>
      </section>

      {/* Ghost Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ghost Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="ghost" size="sm">
            Small Ghost
          </Button>
          <Button variant="ghost" size="md">
            Medium Ghost
          </Button>
          <Button variant="ghost" size="lg">
            Large Ghost
          </Button>
          <Button variant="ghost" size="md" disabled>
            Disabled Ghost
          </Button>
        </div>
      </section>

      {/* All Variants Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Variants (Medium Size)</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Examples</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" onClick={() => alert("Primary clicked!")}>
            Click Me (Primary)
          </Button>
          <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
            Click Me (Secondary)
          </Button>
          <Button variant="outline" onClick={() => alert("Outline clicked!")}>
            Click Me (Outline)
          </Button>
          <Button variant="ghost" onClick={() => alert("Ghost clicked!")}>
            Click Me (Ghost)
          </Button>
        </div>
      </section>

      {/* Custom Styling Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" className="rounded-full">
            Rounded Primary
          </Button>
          <Button variant="secondary" className="rounded-none">
            Square Secondary
          </Button>
          <Button variant="outline" className="shadow-lg">
            Shadow Outline
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AllButtons;