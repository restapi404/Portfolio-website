import "./globals.css";
import Navbar from "../components/Navbar"; // Adjust path if needed
import Footer from "../components/Footer"; // Adjust path if needed

export const metadata = {
  title: "Portfolio Website",
  description: "A showcase of developer blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#06060A] text-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}