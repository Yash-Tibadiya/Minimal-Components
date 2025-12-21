import React from "react";

type AlertVariant = "error" | "warning" | "success" | "primary" | "accent";

interface AlertProps {
  variant: AlertVariant;
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

const variantStyles: Record<
  AlertVariant,
  {
    container: string;
    icon: string;
    button: string;
  }
> = {
  error: {
    container: "bg-error-50 border-error-200 text-error-900",
    icon: "text-error-600",
    button:
      "bg-white text-error-700 border-error-200 hover:bg-error-50 hover:border-error-300",
  },
  warning: {
    container: "bg-warning-50 border-warning-200 text-warning-900",
    icon: "text-warning-600",
    button:
      "bg-white text-warning-700 border-warning-200 hover:bg-warning-50 hover:border-warning-300",
  },
  success: {
    container: "bg-success-50 border-success-200 text-success-900",
    icon: "text-success-600",
    button:
      "bg-white text-success-700 border-success-200 hover:bg-success-50 hover:border-success-300",
  },
  primary: {
    container: "bg-primary-50 border-primary-200 text-primary-900",
    icon: "text-primary-600",
    button:
      "bg-white text-primary-700 border-primary-200 hover:bg-primary-50 hover:border-primary-300",
  },
  accent: {
    container: "bg-accent-50 border-accent-200 text-accent-900",
    icon: "text-accent-600",
    button:
      "bg-white text-accent-700 border-accent-200 hover:bg-accent-50 hover:border-accent-300",
  },
};

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  error: (
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
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  ),
  warning: (
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
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  ),
  success: (
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
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  primary: (
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
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  ),
  accent: (
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
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  ),
};

export default function Alert({
  variant,
  title,
  subtitle,
  buttonText,
  onButtonClick,
  icon,
}: AlertProps) {
  const styles = variantStyles[variant];
  const displayIcon = icon || defaultIcons[variant];

  return (
    <div
      className={`p-4 border rounded-lg flex items-center ${styles.container}`}
    >
      <div className={`mr-3 flex-shrink-0 ${styles.icon}`}>{displayIcon}</div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={`ml-auto text-sm font-semibold px-4 py-2 rounded-md border transition-colors ${styles.button}`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}