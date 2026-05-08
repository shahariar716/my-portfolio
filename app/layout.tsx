import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shahariar-tanif.dev"),
  title: {
    default: "Shahariar Ahmmed (Tanif) | Software Engineer + UI/UX Designer",
    template: "%s | Shahariar Ahmmed (Tanif)",
  },
  description:
    "Premium personal portfolio for Shahariar Ahmmed (Tanif), a Software Engineer and UI/UX Designer building modern digital experiences with code and design.",
  keywords: [
    "Shahariar Ahmmed",
    "Tanif",
    "Software Engineer",
    "UI/UX Designer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Shahariar Ahmmed (Tanif)" }],
  openGraph: {
    title: "Shahariar Ahmmed (Tanif) | Software Engineer + UI/UX Designer",
    description: "Building modern digital experiences with code and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
