import { useState } from "react";
import { Menu, X } from "lucide-react";

const PsycNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-black hover:text-gray-700 transition-colors"
            >
              PSYC
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('capabilities')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollToSection('rnd')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                R&D
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 w-full text-left"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('rnd')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 w-full text-left"
            >
              R&D
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PsycNavbar;