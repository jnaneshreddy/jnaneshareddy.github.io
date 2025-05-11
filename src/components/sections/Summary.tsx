
import React from 'react';
import { FileText } from 'lucide-react';

const Summary = () => {
  return (
    <section id="summary" className="px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 gap-4">
          <FileText className="text-code-blue" size={28} />
          <h2 className="text-3xl font-bold text-code-blue">
            <span className="keyword">const</span> <span className="variable">summary</span> = () =&gt; &#123;
          </h2>
        </div>
        
        <div className="pl-8 md:pl-16">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="comment">// Hello, I'm a Software Developer</span>
          </div>
          <div className="code-line mt-6">
            <span className="line-number">02</span>
            <span className="keyword">return</span> &#123;
          </div>
          <div className="code-line pl-8 mt-4">
            <span className="line-number">03</span>
            <p className="text-lg leading-relaxed">
              I'm a passionate <span className="text-code-teal">full-stack developer</span> with experience 
              in building web applications using modern technologies. I enjoy solving complex problems and 
              creating intuitive, efficient solutions.
            </p>
          </div>
          <div className="code-line pl-8 mt-4">
            <span className="line-number">04</span>
            <p className="text-lg leading-relaxed">
              My expertise includes <span className="text-code-orange">frontend development</span> with 
              React and TypeScript, as well as <span className="text-code-orange">backend development</span> using 
              Node.js and databases. I'm constantly learning and adapting to new technologies.
            </p>
          </div>
          <div className="code-line mt-4">
            <span className="line-number">05</span>
            &#125;;
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-bold">
            &#125;;
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Summary;
