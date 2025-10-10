import IconButton from "@/components/IconButton";
import { Check, Download, FileWarning, Minus, Plus } from "lucide-react";

const IconButtons = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-sand-100">
      <h1 className="text-4xl font-bold mb-2 text-gray-700 font-lora">
        Icon Button Variants
      </h1>
      <p className="text-gray-600 mb-8">
        Explore all available button styles and sizes
      </p>

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
                leftIcon={<Check className="h-4 shrink-0" />}
                leftIconShape="rounded-lg"
                leftIconColor="success"
                size="sm"
                gap="sm"
              >
                Pill Button Icon
              </IconButton>
              <IconButton
                leftIcon={<Plus />}
                leftIconShape="rounded-lg"
                leftIconColor="accent"
                size="md"
                gap="md"
              >
                Accent Highlight
              </IconButton>
              <IconButton
                leftIcon={<Download />}
                leftIconShape="rounded-lg"
                leftIconColor="primary"
                size="lg"
                gap="lg"
              >
                Large Download
              </IconButton>
              <IconButton
                leftIcon={<FileWarning className="h-8 w-auto shrink-0" />}
                leftIconShape="rounded-lg"
                leftIconColor="warning"
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
                leftIcon={<Check className="h-4 shrink-0" />}
                leftIconShape="rounded-full"
                leftIconColor="success"
                size="sm"
                gap="sm"
              >
                Pill Button Icon
              </IconButton>
              <IconButton
                leftIcon={<Plus />}
                leftIconShape="rounded-full"
                leftIconColor="accent"
                size="md"
                gap="md"
              >
                Accent Highlight
              </IconButton>
              <IconButton
                leftIcon={<Download />}
                leftIconShape="rounded-full"
                leftIconColor="primary"
                size="lg"
                gap="lg"
              >
                Large Download
              </IconButton>
              <IconButton
                leftIcon={<FileWarning className="h-8 w-auto shrink-0" />}
                leftIconShape="rounded-full"
                leftIconColor="warning"
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
                leftIcon={<Check />}
                leftIconShape="rounded-lg"
                leftIconColor="accent"
                size="md"
                gap="sm"
              >
                Small Gap
              </IconButton>
              <IconButton
                leftIcon={<Check />}
                leftIconShape="rounded-lg"
                leftIconColor="accent"
                size="md"
                gap="md"
              >
                Medium Gap
              </IconButton>
              <IconButton
                leftIcon={<Check />}
                leftIconShape="rounded-lg"
                leftIconColor="accent"
                size="md"
                gap="lg"
              >
                Large Gap
              </IconButton>
              <IconButton
                leftIcon={<Check />}
                leftIconShape="rounded-lg"
                leftIconColor="accent"
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
                leftIcon={<Check />}
                leftIconShape="rounded-full"
                leftIconColor="primary"
                size="md"
                gap="md"
                className="w-60 rounded-full px-5 animate-fade-in-left"
              >
                Primary (animated)
              </IconButton>
              <IconButton
                leftIcon={<Plus />}
                leftIconShape="rounded-lg"
                leftIconColor="accent"
                size="md"
                gap="md"
                className="!bg-sand-200 w-52 justify-between !text-3xl text-accent-600"
              >
                Accent
              </IconButton>
              <IconButton
                leftIcon={<Check />}
                leftIconShape="rounded-lg"
                leftIconBgColor="bg-green-200 text-green-700"
                size="md"
                gap="md"
                className="!bg-green-50 text-green-700"
              >
                Success
              </IconButton>
              <IconButton
                rightIcon={<Download />}
                rightIconShape="rounded-lg"
                rightIconBgColor="bg-gradient-to-br from-accent-400 to-accent-700 text-white"
                size="md"
                gap="md"
              >
                Gradient BG
              </IconButton>
              <IconButton
                leftIcon={<Plus />}
                leftIconShape="rounded-full"
                leftIconBgColor="bg-orange-200 text-orange-700"
                rightIcon={<Minus />}
                rightIconShape="rounded-full"
                rightIconBgColor="bg-orange-200 text-orange-700"
                size="md"
                gap="md"
                className="w-100 justify-between !bg-accent-50 shadow-md animate-slide-up"
              >
                Button
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconButtons;
