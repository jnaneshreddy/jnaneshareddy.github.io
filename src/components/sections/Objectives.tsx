
import React from 'react';
import { Target } from 'lucide-react';

const Objectives = () => {
  return (
    <section id="objectives" className="px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 gap-4">
          <Target className="text-code-orange" size={28} />
          <h2 className="text-3xl font-bold text-code-orange">
            <span className="keyword">function</span> <span className="function">objectives</span>() &#123;
          </h2>
        </div>
        
        <div className="pl-8 md:pl-16">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="comment">// Career goals and aspirations</span>
          </div>
          
          <div className="code-line mt-6">
            <span className="line-number">02</span>
            <span className="keyword">const</span> <span className="variable">goals</span> = [
          </div>
          
          <div className="pl-8">
            <div className="code-line mt-2">
              <span className="line-number">03</span>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-code-orange">"</span>
                <p className="text-lg">Develop innovative software solutions that solve real-world problems and improve user experiences</p>
                <span className="text-code-orange">"</span><span>,</span>
              </div>
            </div>
            
            <div className="code-line">
              <span className="line-number">04</span>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-code-orange">"</span>
                <p className="text-lg">Continuously expand my knowledge in emerging technologies and programming languages</p>
                <span className="text-code-orange">"</span><span>,</span>
              </div>
            </div>
            
            <div className="code-line">
              <span className="line-number">05</span>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-code-orange">"</span>
                <p className="text-lg">Contribute to open-source projects and collaborate with other developers</p>
                <span className="text-code-orange">"</span><span>,</span>
              </div>
            </div>
            
            <div className="code-line">
              <span className="line-number">06</span>
              <div className="flex items-start gap-3">
                <span className="text-code-orange">"</span>
                <p className="text-lg">Eventually lead a development team working on cutting-edge applications</p>
                <span className="text-code-orange">"</span>
              </div>
            </div>
          </div>
          
          <div className="code-line mt-4">
            <span className="line-number">07</span>
            ];
          </div>
          
          <div className="code-line mt-4">
            <span className="line-number">08</span>
            <span className="keyword">return</span> goals;
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

export default Objectives;
