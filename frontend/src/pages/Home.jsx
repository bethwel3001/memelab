import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full p-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Welcome to Memelab
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center">
        Create hilarious memes with AI-powered captions!
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all">
        Get Started
      </button>
    </motion.div>
  );
}