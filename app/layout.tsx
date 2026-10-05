import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lianne Cha — SWE and Product",
  description: "Lianne's portfolio. Product-focused software engineer building AI systems and user-centered UI/UX.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/epb7toh.css" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
