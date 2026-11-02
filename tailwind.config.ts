import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#101828", canvas: "#f6f8fb", brand: "#4f46e5", mint: "#d9f7e8" },
    boxShadow: { soft: "0 12px 40px rgba(16,24,40,.07)" }
  }},
  plugins: []
};
export default config;