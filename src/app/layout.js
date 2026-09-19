import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { manrope } from "@/styles/fonts";
import { buildMetadata, buildPersonJsonLd } from "@/utils/seo";
import Preloader from "@/components/motion/Preloader";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CursorGlow from "@/components/motion/CursorGlow";
import "@/styles/globals.css";

export const metadata = buildMetadata();

export default function RootLayout({ children }) {
  const jsonLd = buildPersonJsonLd();

  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Preloader />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme">
          {/* Respects prefers-reduced-motion globally at the animation-execution
              layer, so components never have to branch their own rendered
              output on it (that branching is what causes hydration mismatches). */}
          <MotionConfig reducedMotion="user">
            <ScrollProgress />
            <CursorGlow />
            {children}
          </MotionConfig>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
