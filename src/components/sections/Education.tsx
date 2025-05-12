
import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="px-4 md:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 gap-4">
          <BookOpen className="text-code-purple" size={28} />
          <h2 className="text-3xl font-bold text-code-purple">
            <span className="keyword">class</span> <span className="type">Education</span> &#123;
          </h2>
        </div>
        
        <div className="pl-8 md:pl-16">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="comment">// My academic background</span>
          </div>
          
          <div className="code-line mt-6">
            <span className="line-number">02</span>
            <span className="keyword">constructor</span>() &#123;
          </div>
          
          <div className="mb-8 mt-4">
  <div className="code-line pl-8">
    <span className="line-number">01</span>
    <div className="bg-secondary p-5 rounded-lg my-2">
      <h3 className="text-xl font-semibold text-code-yellow mb-1">Master of Computer Applications</h3>
      <p className="text-code-blue">The Oxford College of Engineering</p>
      <p className="text-sm text-muted-foreground">2023 - 2025</p>
      <ul className="mt-2 list-disc list-inside text-sm">
        <li>Advanced Web Development</li>
        <li>AI and Cybersecurity</li>
        <li>Database Systems</li>
      </ul>
    </div>
  </div>
  
  <div className="code-line pl-8">
    <span className="line-number">02</span>
    <div className="bg-secondary p-5 rounded-lg my-2">
      <h3 className="text-xl font-semibold text-code-yellow mb-1">Bachelor of Computer Applications</h3>
      <p className="text-code-blue">RJS First Grade College</p>
      <p className="text-sm text-muted-foreground">2020 - 2023</p>
      <ul className="mt-2 list-disc list-inside text-sm">
        <li>Object-Oriented Programming</li>
        <li>Web Development</li>
        <li>Database Management</li>
      </ul>
    </div>
  </div>

  <div className="code-line pl-8">
    <span className="line-number">03</span>
    <div className="bg-secondary p-5 rounded-lg my-2">
      <h3 className="text-xl font-semibold text-code-yellow mb-1">PUC/12 (Science)</h3>
      <p className="text-code-blue">Morarji Desai Residential Science PU College</p>
      <p className="text-sm text-muted-foreground">2018 - 2020</p>
      <ul className="mt-2 list-disc list-inside text-sm">
        <li>Physics, Chemistry, and Mathematics</li>
        <li>Basic Computer Science</li>
        <li>Problem Solving</li>
      </ul>
    </div>
  </div>
</div>

          
          <div className="code-line">
            <span className="line-number">05</span>
            &#125;
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

export default Education;
