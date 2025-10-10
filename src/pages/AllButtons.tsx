"use client";

import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  FileWarning,
  Plus,
} from "lucide-react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

const AllButtons = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-sand-100">
      <h1 className="text-4xl font-bold mb-2 text-gray-700 font-lora">
        All Button Variants
      </h1>
      <p className="text-gray-600 mb-8">
        Explore all available button styles and sizes
      </p>

      {/* All Variants Comparison */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          All Variants (Medium Size)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="gradient">Gradient</Button>
          <Button variant="gradientSecondary">Gradient Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Buttons with Icons
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" leftIcon={<Plus />}>
            Add Item
          </Button>
          <Button
            variant="secondary"
            rightIcon={<ArrowRight className="w-auto h-5 shrink-0" />}
          >
            Next
          </Button>
          <Button
            variant="outline"
            leftIcon={<Download className="w-auto h-5 shrink-0" />}
          >
            Download
          </Button>
          <Button
            variant="ghost"
            leftIcon={<ChevronLeft />}
            rightIcon={<ChevronRight />}
          >
            Both Icons
          </Button>
        </div>
      </section>

      {/* Custom Styling Example */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Custom Styling (Animated)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="primary"
            className="!rounded-full animate-fade-in-up"
          >
            Rounded Primary
          </Button>
          <Button
            variant="secondary"
            className="!rounded-none animate-fade-in-up [animation-delay:0.1s]"
          >
            Square Secondary
          </Button>
          <Button
            variant="outline"
            className="shadow-lg animate-fade-in-up [animation-delay:0.2s]"
          >
            Shadow Outline
          </Button>
        </div>
      </section>

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
          <Button variant="primary" size="xl">
            Large Primary
          </Button>
          <Button variant="primary" size="md" disabled>
            Disabled Primary
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
          <Button variant="secondary" size="xl">
            Large Secondary
          </Button>
          <Button variant="secondary" size="md" disabled>
            Disabled Secondary
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
          <Button variant="gradientSecondary" size="md">
            Medium Gradient
          </Button>
          <Button variant="gradient" size="lg">
            Large Gradient
          </Button>
          <Button variant="gradientSecondary" size="xl">
            Large Gradient
          </Button>
          <Button variant="gradient" size="md" disabled>
            Disabled Gradient
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
          <Button variant="outline" size="xl">
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
          <Button variant="ghost" size="xl">
            Large Ghost
          </Button>
          <Button variant="ghost" size="md" disabled>
            Disabled Ghost
          </Button>
        </div>
      </section>

      {/* Icon Buttons - Dedicated Component */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Icon Buttons (Dedicated Component)
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Dedicated IconButton component with customizable icon shapes
          (rounded-lg, rounded-full), colors, sizes, and gap spacing.
        </p>

        <div className="space-y-6">
          {/* Rounded LG variants */}
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-700">
              Rounded LG Shape
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton
                icon={<Check className="h-4 shrink-0" />}
                iconShape="rounded-lg"
                iconColor="success"
                size="sm"
                gap="sm"
              >
                Pill Button Icon
              </IconButton>
              <IconButton
                icon={<Plus />}
                iconShape="rounded-lg"
                iconColor="accent"
                size="md"
                gap="md"
              >
                Accent Highlight
              </IconButton>
              <IconButton
                icon={<Download />}
                iconShape="rounded-lg"
                iconColor="primary"
                size="lg"
                gap="lg"
              >
                Large Download
              </IconButton>
              <IconButton
                icon={<FileWarning className="h-8 w-auto shrink-0" />}
                iconShape="rounded-lg"
                iconColor="warning"
                size="xl"
                gap="xl"
              >
                Large Warning
              </IconButton>
            </div>
          </div>

          {/* Rounded Full variants */}
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-700">
              Rounded Full Shape
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton
                icon={<Check className="h-4 shrink-0" />}
                iconShape="rounded-full"
                iconColor="success"
                size="sm"
                gap="sm"
              >
                Pill Button Icon
              </IconButton>
              <IconButton
                icon={<Plus />}
                iconShape="rounded-full"
                iconColor="accent"
                size="md"
                gap="md"
              >
                Accent Highlight
              </IconButton>
              <IconButton
                icon={<Download />}
                iconShape="rounded-full"
                iconColor="primary"
                size="lg"
                gap="lg"
              >
                Large Download
              </IconButton>
              <IconButton
                icon={<FileWarning className="h-8 w-auto shrink-0" />}
                iconShape="rounded-full"
                iconColor="warning"
                size="xl"
                gap="xl"
              >
                Large Warning
              </IconButton>
            </div>
          </div>

          {/* Different Gap Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-700">
              Gap Variations (Medium Size)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton
                icon={<Check />}
                iconShape="rounded-lg"
                iconColor="accent"
                size="md"
                gap="sm"
              >
                Small Gap
              </IconButton>
              <IconButton
                icon={<Check />}
                iconShape="rounded-lg"
                iconColor="accent"
                size="md"
                gap="md"
              >
                Medium Gap
              </IconButton>
              <IconButton
                icon={<Check />}
                iconShape="rounded-lg"
                iconColor="accent"
                size="md"
                gap="lg"
              >
                Large Gap
              </IconButton>
              <IconButton
                icon={<Check />}
                iconShape="rounded-lg"
                iconColor="accent"
                size="md"
                gap="xl"
              >
                Extra Large Gap
              </IconButton>
            </div>
          </div>

          {/* Custom Styles */}
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-700">
              Custom Styles
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton
                icon={<Check />}
                iconShape="rounded-full"
                iconColor="primary"
                size="md"
                gap="md"
                className="w-60 rounded-full px-5 animate-fade-in-left"
              >
                Primary (animated)
              </IconButton>
              <IconButton
                icon={<Plus />}
                iconShape="rounded-lg"
                iconColor="accent"
                size="md"
                gap="md"
                className="!bg-sand-200 w-52 justify-between !text-3xl text-accent-600"
              >
                Accent
              </IconButton>
              <IconButton
                icon={<Check />}
                iconShape="rounded-lg"
                iconBgColor="bg-green-200 text-green-700"
                size="md"
                gap="md"
                className="!bg-green-50 text-green-700"
              >
                Success
              </IconButton>
              <IconButton
                icon={<Download />}
                iconShape="rounded-lg"
                iconBgColor="bg-gradient-to-br from-accent-400 to-accent-700 text-white"
                size="md"
                gap="md"
              >
                Gradient BG
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllButtons;
