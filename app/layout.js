import "./globals.css";

export const metadata = {
  title: "Vera Zhang",
  description: "Welcome to world of art.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
