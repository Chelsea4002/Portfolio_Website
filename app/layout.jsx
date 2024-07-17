import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chelsea's Portfolio",
  description: "Created by Chelsea Cho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8F2EB]">
        <Navbar />
        <main className="flex-1 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-12 lg:mt-16"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}