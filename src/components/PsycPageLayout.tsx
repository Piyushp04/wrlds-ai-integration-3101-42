import PsycNavbar from './PsycNavbar';
import { ReactNode } from 'react';

interface PsycPageLayoutProps {
  children: ReactNode;
}

const PsycPageLayout = ({ children }: PsycPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-[hsl(var(--aerospace-light))]">
      <PsycNavbar />
      <main className="w-full">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[hsl(var(--aerospace-dark))] to-[hsl(var(--aerospace-medium))] text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="PSYC Logo" 
                  className="h-12 sm:h-14 md:h-16 w-auto"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Solutions</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[hsl(var(--aerospace-accent))]">
                <li><a href="#capabilities" className="hover:text-white transition-colors">AI Payload Systems</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Computer Vision</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Automation</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Industries</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[hsl(var(--aerospace-accent))]">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#rnd" className="hover:text-white transition-colors">Research & Development</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            

          </div>
          
                                                    <div className="border-t border-[hsl(var(--aerospace-medium))] mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[hsl(var(--aerospace-accent))] text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
                © 2025 PSYC Aerospace and Defence Industries Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/privacy-policy" className="text-[hsl(var(--aerospace-accent))] text-xs sm:text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsycPageLayout;