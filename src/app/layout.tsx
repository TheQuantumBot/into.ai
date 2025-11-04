import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import ClickSpark from "@/components/ClickSpark";

// Load Inter Tight
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Into AI",
  description: "Into AI",
  icons: {
    icon: "/favicon.ico", // this is the correct way to set favicon in App Router
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interTight.className} bg-[#111] antialiased`}>
        <ClickSpark
          sparkColor="#ce4c9b"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={10}
          duration={600}
          extraScale={1.2}
        />
        {children}
      </body>
    </html>
  );
}
