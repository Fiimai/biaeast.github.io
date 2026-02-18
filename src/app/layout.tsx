import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const BACKGROUND_VIDEO = "/biaeast.github.io/images/forest_scene_bg.mp4";

export const metadata: Metadata = {
  title: "DHD Bia East | Promoting Health in Bia East District, Ghana",
  description:
    "Official website of the District Health Directorate, Bia East. Discover our health services, facilities, and community initiatives in the Western North region of Ghana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 bg-black">
          <video
            src={BACKGROUND_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
