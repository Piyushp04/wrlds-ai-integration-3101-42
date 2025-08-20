import PsycNavbar from './PsycNavbar';
import { ReactNode } from 'react';

interface PsycPageLayoutProps {
  children: ReactNode;
}

const PsycPageLayout = ({ children }: PsycPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <PsycNavbar />
      <main className="w-full">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">PSYC</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Aerospace and Defence Company specializing in AI-first payload systems, 
                computer vision, and automation for next-generation drone operations.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 PSYC Aerospace and Defence Company. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#capabilities" className="hover:text-white transition-colors">AI Payload Systems</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Computer Vision</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Automation</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#rnd" className="hover:text-white transition-colors">Research & Development</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Advancing aerospace technology through innovation and precision engineering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsycPageLayout;