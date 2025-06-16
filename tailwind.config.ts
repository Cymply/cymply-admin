import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        primary: {
          DEFAULT: "#1a233b",
          foreground: "#fafafa",
        },
        secondary: {
          DEFAULT: "#60799a",
          foreground: "#191f31",
        },
        muted: {
          DEFAULT: "#f4f4f4",
          foreground: "#767676",
        },
        accent: {
          DEFAULT: "#f4f4f4",
          foreground: "#1a1a1a",
        },
        destructive: {
          DEFAULT: "#eb4d4b",
          foreground: "#fafafa",
        },
        border: "#e6e6e6",
        input: {
          DEFAULT: "#DADEE1",
          background: "#ffffff",
        },
        ring: "#0a0a0a",
        bg: {
          lnb: "#e7ecf3",
          alert: "rgba(28, 32, 37, 0.5)",
          pageDark: "#E8EBEE",
          page: "#f2f4f5",
        },
        sidebar: {
          DEFAULT: "#fafafa",
          foreground: "#171b1e",
          primary: "#1a1a1a",
          "primary-foreground": "#fafafa",
          accent: "#f4f4f4",
          "accent-foreground": "#1a1a1a",
          border: "#dae1ec",
          ring: "#2e85d6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};

export default config;
