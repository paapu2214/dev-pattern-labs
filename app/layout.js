import "./globals.css";

export const metadata = {
  title: "Dev Pattern Labs | Build. Grow. Automate.",
  description:
    "Dev Pattern Labs builds web platforms, automation, and growth-driven digital solutions for ambitious businesses.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
