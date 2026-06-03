import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceglany Domek — Panel treści",
  robots: { index: false, follow: false },
};

// Separate root layout for the embedded Studio (route group (studio)).
// The localized marketing site lives under (site) with its own root layout.
export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
