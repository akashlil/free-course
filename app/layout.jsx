import Navbar from "./shared/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <title>free-course</title>
      <head></head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
