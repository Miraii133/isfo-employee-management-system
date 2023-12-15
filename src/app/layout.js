import "./globals.css";

export const metadata = {
  title: "ISFO Employee Management System",
  description:
    "An paired activity for our IT ELECTIVE 3 Full Stack Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
