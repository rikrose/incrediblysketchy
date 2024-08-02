import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "OpenSauce",
  description: "Rik's recipce collection",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{`${GeistSans.variable}`} mx-8">
      <body>{children}</body>
    </html>
  );
}
