import { useState } from "react";
import { Menu, X } from "lucide-react";
import jotahLogoPath from "@assets/jotah-logo.jpeg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-goldenrod/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={jotahLogoPath}
                alt="Jotah Logo"
                className="h-10 w-auto rounded-lg mr-3 border border-goldenrod/30"
              />
              <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent">
                JOTAH
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-goldenrod px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-300 hover:text-goldenrod px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-products"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("brand-story")}
                className="text-gray-300 hover:text-goldenrod px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-brand-story"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection("find-products")}
                className="text-gray-300 hover:text-goldenrod px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-find-products"
              >
                Find Products
              </button>
              <a
                href="/what-the-fun"
                className="text-gray-300 hover:text-goldenrod px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-what-the-fun"
              >
                What the Fun
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-4 py-2 rounded-full text-sm font-bold transition-all"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-brown hover:text-saddle-brown"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-goldenrod/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-gray-300 hover:text-goldenrod px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block text-dark-brown hover:text-saddle-brown px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("brand-story")}
              className="block text-dark-brown hover:text-saddle-brown px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-brand-story"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("find-products")}
              className="block text-dark-brown hover:text-saddle-brown px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-find-products"
            >
              Find Products
            </button>
            <a
              href="/what-the-fun"
              className="block text-dark-brown hover:text-saddle-brown px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-what-the-fun"
            >
              What the Fun
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="block bg-saddle-brown hover:bg-dark-brown text-white px-3 py-2 text-base font-medium w-full text-left rounded-md mt-2"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
