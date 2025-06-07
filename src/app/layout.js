import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-yellow-300 to-yellow-600 min-h-screen">
        <header className="bg-gradient-to-r from-gray-100 to-white shadow-md p-6">
          <div className="flex gap-6  items-center">
            <h1 className="text-2xl font-bold text-gray-800">Recipe Finder</h1>
            <Navbar />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
