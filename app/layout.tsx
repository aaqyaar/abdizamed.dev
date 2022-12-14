import { Header } from "layouts";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="snap-scroll-y scrollbar-base dark:bg-gray-900">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
