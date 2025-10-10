"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500",
    secondary:
      "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500",
    outline:
      "border border-foreground/20 bg-transparent hover:bg-foreground/10 focus-visible:ring-foreground",
    ghost:
      "bg-transparent hover:bg-foreground/10 focus-visible:ring-foreground",
    gradient:
      "bg-gradient-to-b from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 focus-visible:ring-primary-500",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
