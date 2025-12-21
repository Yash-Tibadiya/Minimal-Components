import Alert from "@/components/Alert";

export default function Alerts() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Alerts</h1>
        <p className="text-gray-600 mb-8">
          Reusable alert components with different variants, icons, and actions.
        </p>
      </div>

      <div className="space-y-6">
        {/* Primary Alert */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Primary Alert</h2>
          <Alert
            variant="primary"
            title="Your intake form is ready to be filled out."
            subtitle="Please complete this before your consultation."
            buttonText="Start Intake"
            onButtonClick={() => alert("Start Intake clicked")}
          />
        </div>

        {/* Warning Alert */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Warning Alert</h2>
          <Alert
            variant="warning"
            title="Payment Failed"
            subtitle="Please update your billing information to continue service."
            buttonText="Update Billing"
            onButtonClick={() => alert("Update Billing clicked")}
          />
        </div>

        {/* Error Alert */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Error Alert</h2>
          <Alert
            variant="error"
            title="Connection Error"
            subtitle="Unable to connect to the server. Please check your internet connection."
            buttonText="Retry"
            onButtonClick={() => alert("Retry clicked")}
          />
        </div>

        {/* Success Alert */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Success Alert</h2>
          <Alert
            variant="success"
            title="Profile Updated Successfully"
            subtitle="Your changes have been saved and are now live."
            buttonText="View Profile"
            onButtonClick={() => alert("View Profile clicked")}
          />
        </div>

        {/* Accent Alert */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Accent Alert</h2>
          <Alert
            variant="accent"
            title="New Feature Available"
            subtitle="Check out our latest updates and improvements."
            buttonText="Learn More"
            onButtonClick={() => alert("Learn More clicked")}
          />
        </div>

        {/* Alert without button */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Alert Without Button</h2>
          <Alert
            variant="primary"
            title="Information"
            subtitle="This is an informational alert without any action button."
          />
        </div>

        {/* Alert with custom icon */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Alert With Custom Icon</h2>
          <Alert
            variant="success"
            title="Custom Icon Alert"
            subtitle="You can pass a custom icon to override the default."
            buttonText="Got it"
            onButtonClick={() => alert("Got it clicked")}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}