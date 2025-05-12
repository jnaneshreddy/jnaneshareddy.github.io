
import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialLink = ({ href, icon, label, className }: SocialLinkProps) => {
  const isMobile = useIsMobile();
  
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center gap-2 p-2 rounded-md transition-all duration-300", 
        "hover:bg-secondary hover:bg-opacity-50 text-muted-foreground hover:text-foreground hover:scale-110 hover:translate-x-1",
        isMobile ? "text-sm" : "",
        className
      )}
    >
      {icon}
      <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-code-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
        {label}
      </span>
    </a>
  );
};

const SocialLinks = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "flex flex-wrap gap-4 mt-4 mb-6",
      isMobile ? "flex-col" : "flex-row"
    )}>
      <SocialLink 
        href="https://github.com" 
        icon={<Github className="text-code-blue hover:animate-pulse" size={isMobile ? 20 : 24} />} 
        label="GitHub"
      />
      <SocialLink 
        href="https://linkedin.com" 
        icon={<Linkedin className="text-code-blue hover:animate-pulse" size={isMobile ? 20 : 24} />} 
        label="LinkedIn"
      />
      <SocialLink 
        href="https://twitter.com" 
        icon={<Twitter className="text-code-teal hover:animate-pulse" size={isMobile ? 20 : 24} />} 
        label="Twitter"
      />
    </div>
  );
};

export default SocialLinks;
