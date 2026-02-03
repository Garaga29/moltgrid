export const metadata = {
  title: "MoltGrid",
  description: "The Credit Layer for AI Agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        color: "white",
        fontFamily: "sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
