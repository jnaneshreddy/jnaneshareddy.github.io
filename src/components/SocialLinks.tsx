
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialLink = ({ href, icon, label, className }: SocialLinkProps) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className={cn(
      "flex items-center gap-2 p-2 rounded-md transition-colors duration-200", 
      "hover:bg-secondary text-muted-foreground hover:text-foreground",
      className
    )}
  >
    {icon}
    <span>{label}</span>
  </a>
);

const SocialLinks = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-4 mb-6">
      <SocialLink 
        href="https://github.com" 
        icon={<Github className="text-code-blue" size={20} />} 
        label="GitHub"
      />
      <SocialLink 
        href="https://linkedin.com" 
        icon={<Linkedin className="text-code-blue" size={20} />} 
        label="LinkedIn"
      />
      <SocialLink 
        href="https://twitter.com" 
        icon={<Twitter className="text-code-teal" size={20} />} 
        label="Twitter"
      />
      <SocialLink 
        href="https://facebook.com" 
        icon={<Facebook className="text-code-orange" size={20} />} 
        label="Facebook"
      />
      <SocialLink 
        href="https://instagram.com" 
        icon={<Instagram className="text-code-yellow" size={20} />} 
        label="Instagram"
      />
    </div>
  );
};

export default SocialLinks;
