import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ 
  id, 
  title, 
  children, 
  className = ''
}: SectionProps) {
  return (
    <section id={id}>
      <div className={`container mx-auto px-4 ${className} animate-fade-in`}>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
} 