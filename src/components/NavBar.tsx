
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FileText, BookOpen, Target, Folder, Mail } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-code-teal">JNANESH <span className="text-code-blue">REDDY </span></span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-code-blue"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('summary')} className="flex items-center gap-2 text-foreground hover:text-code-blue transition-colors">
              <FileText size={16} />
              <span>Summary</span>
            </button>
            <button onClick={() => scrollToSection('education')} className="flex items-center gap-2 text-foreground hover:text-code-purple transition-colors">
              <BookOpen size={16} />
              <span>Education</span>
            </button>
            <button onClick={() => scrollToSection('objectives')} className="flex items-center gap-2 text-foreground hover:text-code-orange transition-colors">
              <Target size={16} />
              <span>Certifications</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="flex items-center gap-2 text-foreground hover:text-code-yellow transition-colors">
              <Folder size={16} />
              <span>Projects</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 text-foreground hover:text-code-teal transition-colors">
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('summary')}
              className="flex items-center gap-2 text-foreground hover:text-code-blue w-full px-3 py-2 hover:bg-muted rounded-md"
            >
              <FileText size={16} />
              <span>Summary</span>
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="flex items-center gap-2 text-foreground hover:text-code-purple w-full px-3 py-2 hover:bg-muted rounded-md"
            >
              <BookOpen size={16} />
              <span>Education</span>
            </button>
            <button 
              onClick={() => scrollToSection('objectives')}
              className="flex items-center gap-2 text-foreground hover:text-code-orange w-full px-3 py-2 hover:bg-muted rounded-md"
            >
              <Target size={16} />
              <span>Objectives</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 text-foreground hover:text-code-yellow w-full px-3 py-2 hover:bg-muted rounded-md"
            >
              <Folder size={16} />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 text-foreground hover:text-code-teal w-full px-3 py-2 hover:bg-muted rounded-md"
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
