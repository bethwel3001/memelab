import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 bg-white/80 dark:bg-black/20 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Memelab Logo" className="h-10" /> 
          <span className="text-2xl font-bold">Memelab</span>
        </Link>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <SunIcon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>
    </nav>
  );
}