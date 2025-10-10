"use client";

import Button from "../components/Button";

const AllButtons = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-sand-100">
      <h1 className="text-4xl font-bold mb-2 text-gray-700 font-lora">
        All Button Variants
      </h1>
      <p className="text-gray-600 mb-8">
        Explore all available button styles and sizes
      </p>

      {/* Primary Buttons */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Primary Buttons
        </h2>
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

      {/* Gradient Buttons */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Gradient Buttons
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="gradient" size="sm">
            Small Gradient
          </Button>
          <Button variant="gradient" size="md">
            Medium Gradient
          </Button>
          <Button variant="gradient" size="lg">
            Large Gradient
          </Button>
          <Button variant="gradient" size="md" disabled>
            Disabled Gradient
          </Button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Secondary Buttons
        </h2>
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
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Outline Buttons
        </h2>
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
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Ghost Buttons
        </h2>
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
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          All Variants (Medium Size)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Custom Styling Example */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Custom Styling
        </h2>
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
