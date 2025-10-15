"use client";

import Badge from "../components/Badge";

const Badges = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-sand-100">
      <h1 className="text-4xl font-bold mb-2 text-gray-700 font-lora">
        Badge Variants
      </h1>
      <p className="text-gray-600 mb-8">
        Explore all available badge styles and configurations
      </p>

      {/* All Variants Comparison */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          All Variants
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Success" type="success" />
          <Badge text="Warning" type="warning" />
          <Badge text="Error" type="error" />
          <Badge text="Primary" type="primary" />
          <Badge text="Accent" type="accent" />
        </div>
      </section>

      {/* Status Badges */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Status Badges
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Active" type="success" />
          <Badge text="Paused" type="warning" />
          <Badge text="Past" type="accent" />
          <Badge text="Failed" type="error" />
          <Badge text="Upcoming" type="primary" />
        </div>
      </section>

      {/* Category Badges (Uppercase & Bold) */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Category Badges (Uppercase & Bold)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Weight Loss" type="primary" uppercase bold />
          <Badge text="Muscle Gain" type="success" uppercase bold />
          <Badge text="Cardio" type="warning" uppercase bold />
          <Badge text="Nutrition" type="accent" uppercase bold />
          <Badge text="Recovery" type="error" uppercase bold />
        </div>
      </section>

      {/* Success Badges */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Success Badges
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Completed" type="success" size="sm" />
          <Badge text="Approved" type="success" size="md" />
          <Badge text="Active" type="success" size="sm" bold />
          <Badge text="Verified" type="success" size="md" bold />
          <Badge text="SUCCESS" type="success" size="sm" uppercase />
        </div>
      </section>

      {/* Warning Badges */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Warning Badges
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Pending" type="warning" size="sm" />
          <Badge text="Paused" type="warning" size="md" />
          <Badge text="Review" type="warning" size="sm" bold />
          <Badge text="Attention" type="warning" size="md" bold />
          <Badge text="WARNING" type="warning" size="sm" uppercase />
        </div>
      </section>

      {/* Error Badges */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Error Badges
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Failed" type="error" size="sm" />
          <Badge text="Rejected" type="error" size="md" />
          <Badge text="Cancelled" type="error" size="sm" bold />
          <Badge text="Blocked" type="error" size="md" bold />
          <Badge text="ERROR" type="error" size="sm" uppercase />
        </div>
      </section>

      {/* Primary Badges */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Primary Badges
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="New" type="primary" size="sm" />
          <Badge text="Featured" type="primary" size="md" />
          <Badge text="Popular" type="primary" size="sm" bold />
          <Badge text="Trending" type="primary" size="md" bold />
          <Badge text="PRIMARY" type="primary" size="sm" uppercase />
        </div>
      </section>

      {/* Accent Badges */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Accent Badges
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Draft" type="accent" size="sm" />
          <Badge text="Past" type="accent" size="md" />
          <Badge text="Archived" type="accent" size="sm" bold />
          <Badge text="Inactive" type="accent" size="md" bold />
          <Badge text="ACCENT" type="accent" size="sm" uppercase />
        </div>
      </section>

      {/* Size Comparison */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Size Comparison
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Small Badge" type="primary" size="sm" />
          <Badge text="Medium Badge" type="primary" size="md" />
        </div>
      </section>

      {/* Font Style Variations */}
      <section className="mb-12 bg-white p-6 rounded-md shadow-sm border border-sand-300">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 font-lora">
          Font Style Variations
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge text="Regular" type="primary" />
          <Badge text="Bold" type="primary" bold />
          <Badge text="Uppercase" type="primary" uppercase />
          <Badge text="Bold Uppercase" type="primary" bold uppercase />
        </div>
      </section>
    </div>
  );
};

export default Badges;