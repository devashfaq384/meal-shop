import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delicious Food",
  description: "This is a delicious foods point to eat and order your favourites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#000000" }} >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
