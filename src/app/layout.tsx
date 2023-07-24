import "./globals.css";
import type { Metadata } from "next";
// import { Inter, Miriam_Libre } from "next/font/google";
// const miriam = Miriam_Libre({ subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
  title: "Abdi Zamed Mohamed 🚀 Software Engineer",
  description: "I'm a Software Engineer based in Mogadishu, Somalia",
  icons: ["https://www.github.com/aaqyaar.png"],
  applicationName: "Personal Website",
  authors: [
    {
      url: "https://www.github.com/aaqyaar.png",
      name: "Abdi Zamed Mohamed",
    },
  ],
  keywords: [
    "Abdi Zamed",
    "abdizamed",
    "Abdisamed",
    "Software Engineer somalia",
    "Full Stack Developer",
    "Developer Website",
    "Abdi Zamed Mohamed",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
