import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://toolbox-pro.example"),
  title: { default: "ToolBox Pro — Free Online Tools", template: "%s | ToolBox Pro" },
  description: "Simple, free online tools for text, developers, security and everyday productivity. Privacy-conscious tools with clear results.",
  applicationName: "ToolBox Pro",
  openGraph: { type: "website", title: "ToolBox Pro — Free Online Tools", description: "Useful browser tools for everyday digital tasks." },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}