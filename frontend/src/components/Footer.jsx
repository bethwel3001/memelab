export default function Footer() {
    return (
      <footer className="bg-black/20 backdrop-blur-md text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Memelab. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ by Your Team Name
          </p>
        </div>
      </footer>
    );
  }