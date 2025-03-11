import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 bg-white/80 dark:bg-black/20 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="https://imgs.search.brave.com/ZAE215pDH5W4oVGGp_wZr7DduCcJOl6Ffz0wus8tAtY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NDQxNjYwMC9waG90/by9oYXBweS1yZXNj/dWVkLXNsb3RoLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Q/YThsRU5rYm9Cdlhm/Nkt0N1l2cnhHeUhs/R0hoUXVReVliUDl1/Z1JOZXIwPQ" alt="Memelab Logo" 
            className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800" 
            /> 
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