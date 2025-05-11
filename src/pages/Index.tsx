
import React from 'react';
import NavBar from '@/components/NavBar';
import Summary from '@/components/sections/Summary';
import Education from '@/components/sections/Education';
import Objectives from '@/components/sections/Objectives';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Spotlight from '@/components/Spotlight';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <Spotlight spotlightSize={200} color="86, 156, 214">
        <main className="pt-16">
          <Summary />
          <Education />
          <Objectives />
          <Projects />
          <Contact />
          
          <footer className="py-6 text-center text-sm text-muted-foreground">
            <div className="code-line">
              <span className="comment">/* © 2025 Developer Portfolio • Built with React + Tailwind */</span>
            </div>
          </footer>
        </main>
      </Spotlight>
    </div>
  );
};

export default Index;
