
import React from 'react';
import { Folder } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="px-4 md:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 gap-4">
          <Folder className="text-code-yellow" size={28} />
          <h2 className="text-3xl font-bold text-code-yellow">
            <span className="keyword">import</span> &#123; Projects &#125; <span className="keyword">from</span> <span className="string">'./portfolio'</span>;
          </h2>
        </div>
        
        <div className="pl-8 md:pl-16 space-y-8">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="comment">// Featured projects</span>
          </div>
          
          {/* Project 1 */}
          <div className="bg-secondary rounded-lg p-6 transition-all hover:shadow-[0_0_15px_rgba(222,184,135,0.15)]">
  <h3 className="text-xl font-bold text-code-yellow mb-2">Student Result Management System</h3>
  <p className="mb-4 text-muted-foreground">A web application to manage and track student results digitally with backend integration and SQL database.</p>
  
  <div className="flex flex-wrap gap-2 mb-4">
    <Badge className="bg-code-blue/20 text-code-blue hover:bg-code-blue/30">HTML</Badge>
    <Badge className="bg-code-teal/20 text-code-teal hover:bg-code-teal/30">CSS</Badge>
    <Badge className="bg-code-purple/20 text-code-purple hover:bg-code-purple/30">JavaScript</Badge>
    <Badge className="bg-code-orange/20 text-code-orange hover:bg-code-orange/30">PHP</Badge>
    <Badge className="bg-code-green/20 text-code-green hover:bg-code-green/30">SQL</Badge>
  </div>
  
  <div className="code-line text-sm">
    <span className="line-number">01</span>
    <span className="comment">// github.com/jnaneshreddy/student-result-management-result</span>
  </div>
</div>

{/* Project 2 */}
<div className="bg-secondary rounded-lg p-6 transition-all hover:shadow-[0_0_15px_rgba(86,156,214,0.15)]">
  <h3 className="text-xl font-bold text-code-blue mb-2">Personal Portfolio Website</h3>
  <p className="mb-4 text-muted-foreground">A visually appealing and responsive portfolio website highlighting personal achievements and skills.</p>
  
  <div className="flex flex-wrap gap-2 mb-4">
    <Badge className="bg-code-blue/20 text-code-blue hover:bg-code-blue/30">NEXT JS</Badge>
    <Badge className="bg-code-yellow/20 text-code-yellow hover:bg-code-yellow/30">Tailwind CSS</Badge>
    <Badge className="bg-code-teal/20 text-code-teal hover:bg-code-teal/30">CSS</Badge>
    <Badge className="bg-code-orange/20 text-code-orange hover:bg-code-orange/30">JavaScript</Badge>
  </div>
  
  <div className="code-line text-sm">
    <span className="line-number">02</span>
    <span className="comment">// github.com/jnaneshreddy/jnaneshreddy.github.io</span>
  </div>
</div>

{/* Project 3
<div className="bg-secondary rounded-lg p-6 transition-all hover:shadow-[0_0_15px_rgba(78,201,176,0.15)]">
  <h3 className="text-xl font-bold text-code-teal mb-2">Responsive Web Designing Projects</h3>
  <p className="mb-4 text-muted-foreground">A series of web design projects focused on creating responsive and visually engaging layouts.</p>
  
  <div className="flex flex-wrap gap-2 mb-4">
    <Badge className="bg-code-blue/20 text-code-blue hover:bg-code-blue/30">NEXT JS</Badge>
    <Badge className="bg-code-purple/20 text-code-purple hover:bg-code-purple/30">Tailwind CSS</Badge>
    <Badge className="bg-code-teal/20 text-code-teal hover:bg-code-teal/30">REAT</Badge>
  </div>
  
  <div className="code-line text-sm">
    <span className="line-number">03</span>
    <span className="comment">// github.com/jnaneshreddy/responsive-web-design</span>
  </div>
</div> */}

        </div>
      </div>
    </section>
  );
};

export default Projects;
