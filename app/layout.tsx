import "./globals.css";

export const metadata = {
  title: "Urban Saathi",
  description: "Find accommodations, rides, and marketplaces near you",
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
