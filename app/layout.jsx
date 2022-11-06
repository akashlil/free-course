import Navbar from "./shared/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <title>free-course</title>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
