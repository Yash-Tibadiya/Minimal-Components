import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./*.html", "./**/*.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lora: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          50: "#F3F5F2",
          100: "#E7EAE5",
          200: "#C6CDC3",
          300: "#A4B2A0",
          400: "#8A9A81",
          500: "#798A6D",
          600: "#5F6B56",
          700: "#454D3F",
          800: "#2E342A",
          900: "#1A1D17",
        },
        accent: {
          50: "#FCF4F0",
          100: "#FAE8DE",
          200: "#F5D2C0",
          300: "#F0BCA1",
          400: "#EAB68F",
          500: "#D8A386",
          600: "#AE826B",
          700: "#856250",
          800: "#5C4335",
          900: "#33251D",
        },
        gray: {
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#6B7280",
          600: "#495057",
          700: "#3C4858",
          800: "#212529",
          900: "#15171A",
        },
        sand: {
          50: "#FCFBF8",
          100: "#F8F6F2",
          200: "#F3EFE7",
          300: "#EFEBE4",
          400: "#EAE5DB",
        },
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        info: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      transitionTimingFunction: {
        "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "draw-erase": {
          "0%": { "stroke-dashoffset": "1000" },
          "40%": { "stroke-dashoffset": "0" },
          "60%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "-1000" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-in-down":
          "fade-in-down 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-in-left":
          "fade-in-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-in-right":
          "fade-in-right 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "draw-erase": "draw-erase 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;