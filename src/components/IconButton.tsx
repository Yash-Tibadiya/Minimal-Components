"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconShape?: "rounded-lg" | "rounded-full";
  leftIconColor?: "primary" | "accent" | "success" | "warning";
  leftIconBgColor?: string;
  rightIconShape?: "rounded-lg" | "rounded-full";
  rightIconColor?: "primary" | "accent" | "success" | "warning";
  rightIconBgColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  gap?: "sm" | "md" | "lg" | "xl";
}

const IconButton = ({
  children,
  leftIcon,
  rightIcon,
  leftIconShape = "rounded-lg",
  leftIconColor = "accent",
  leftIconBgColor,
  rightIconShape,
  rightIconColor,
  rightIconBgColor,
  size = "md",
  gap = "md",
  className = "",
  ...props
}: IconButtonProps) => {
  const baseStyles =
    "inline-flex items-center bg-transparent hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground rounded-xl px-4 py-3 border border-foreground/20";

  const iconColors = {
    primary: "bg-primary-500 text-white",
    accent: "bg-accent-500 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-orange-500 text-white",
  };

  const iconSizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-14 h-14 text-xl",
  };

  const gapSizes = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
    xl: "gap-5",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  // Determine icon background colors - custom takes precedence
  const leftIconBgClass = leftIconBgColor || iconColors[leftIconColor];
  const rightIconBgClass =
    rightIconBgColor || iconColors[rightIconColor || leftIconColor];
  const rightIconShapeClass = rightIconShape || leftIconShape;

  return (
    <button
      className={`${baseStyles} ${gapSizes[gap]} ${className}`}
      {...props}
    >
      {leftIcon && (
        <span
          className={`inline-flex items-center justify-center shrink-0 ${iconSizes[size]} ${leftIconShape} ${leftIconBgClass}`}
        >
          {leftIcon}
        </span>
      )}
      <span
        className={`font-medium ${
          !className.includes("!text-") && !className.includes("text-")
            ? textSizes[size]
            : ""
        }`}
      >
        {children}
      </span>
      {rightIcon && (
        <span
          className={`inline-flex items-center justify-center shrink-0 ${iconSizes[size]} ${rightIconShapeClass} ${rightIconBgClass}`}
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default IconButton;