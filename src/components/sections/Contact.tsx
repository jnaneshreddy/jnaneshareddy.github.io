
import React from 'react';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  const downloadResume = () => {
    // This is where you'd implement the actual download functionality
    // For now we'll just log a message
    console.log('Downloading resume...');
    
    // You would typically create a link to your resume file and trigger a download
    // Example:
    // const link = document.createElement('a');
    // link.href = '/path/to/resume.pdf';
    // link.download = 'John_Doe_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <section id="contact" className="px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6 gap-4">
          <Mail className="text-code-teal" size={28} />
          <h2 className="text-3xl font-bold text-code-teal">
            <span className="keyword">async function</span> <span className="function">contact</span>() &#123;
          </h2>
        </div>
        
        <div className="pl-8 md:pl-16">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="comment">// Let's get in touch</span>
          </div>
          
          <div className="code-line mt-6">
            <span className="line-number">02</span>
            <span className="keyword">await</span> <span className="function">sendMessage</span>(&#123;
          </div>
          
          <div className="pl-8 space-y-4 my-6">
            <div className="flex items-center gap-4">
              <Mail className="text-code-blue" />
              <span className="text-code-blue">email</span>: 
              <span className="text-code-orange ml-2">"your.email@example.com"</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="text-code-blue" />
              <span className="text-code-blue">phone</span>: 
              <span className="text-code-orange ml-2">"+1 (555) 123-4567"</span>
            </div>
          </div>
          
          <div className="code-line">
            <span className="line-number">03</span>
            &#125;);
          </div>
          
          <div className="code-line mt-6">
            <span className="line-number">04</span>
            <span className="comment">// Connect with me on social media</span>
          </div>
          
          <div className="code-line">
            <span className="line-number">05</span>
            <span className="keyword">const</span> <span className="variable">socialProfiles</span> = <SocialLinks />
          </div>
          
          <div className="code-line mt-6 mb-8">
            <span className="line-number">06</span>
            <div className="flex items-center">
              <span className="keyword">return</span> 
              <Button onClick={downloadResume} className="ml-4 bg-code-blue hover:bg-code-blue/80 flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </Button>
            </div>
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

export default Contact;
