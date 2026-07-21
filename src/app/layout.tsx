import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UserXpert | Custom Websites, Web Redesign & AI Automation",
  description: "We design premium websites, automate business workflows, build e-commerce, create AI chatbots, dashboards, and custom tools to scale your business.",
  keywords: ["Web Redesign", "Custom Websites", "Business Automation", "AI Chatbots", "UserXpert", "Next.js Developer", "Web Design Agency India"],
  authors: [{ name: "UserXpert" }],
  openGraph: {
    title: "UserXpert | Custom Websites, Web Redesign & AI Automation",
    description: "We build websites, automate tasks, create chatbots, analytics dashboards, and custom tools to help modern businesses grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
