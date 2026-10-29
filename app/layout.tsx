import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavana Kandikatla | QA Engineer",
  description:
    "Portfolio of Bhavana Kandikatla, a QA Engineer with experience in end-to-end manual testing, REST API validation and release readiness for MF-Stack, a fintech platform for mutual fund investments.",
  keywords: [
    "Bhavana Kandikatla",
    "QA Engineer",
    "Quality Assurance",
    "Manual Testing",
    "REST API Testing",
    "Postman",
    "Playwright",
    "Fintech",
  ],
  authors: [{ name: "Bhavana Kandikatla" }],
  openGraph: {
    title: "Bhavana Kandikatla | QA Engineer",
    description:
      "QA Engineer focused on end-to-end manual testing, API validation and release readiness for fintech products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#06080c] text-zinc-100">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-[#04110f] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
