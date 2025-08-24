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
    <nav className="sticky top-0 z-50 bg-[hsl(var(--aerospace-light))] border-b border-[hsl(var(--aerospace-accent))] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="PSYC Logo" 
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('capabilities')}
                className="text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollToSection('rnd')}
                className="text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                R&D
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] px-3 py-2 text-sm font-medium transition-colors hover-underline"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] focus:outline-none focus:text-[hsl(var(--aerospace-medium))]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[hsl(var(--aerospace-light))] border-t border-[hsl(var(--aerospace-accent))]">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] hover:bg-[hsl(var(--aerospace-accent))] w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] hover:bg-[hsl(var(--aerospace-accent))] w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="block px-3 py-2 text-base font-medium text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] hover:bg-[hsl(var(--aerospace-accent))] w-full text-left"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('rnd')}
              className="block px-3 py-2 text-base font-medium text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] hover:bg-[hsl(var(--aerospace-accent))] w-full text-left"
            >
              R&D
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-[hsl(var(--aerospace-dark))] hover:text-[hsl(var(--aerospace-medium))] hover:bg-[hsl(var(--aerospace-accent))] w-full text-left"
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