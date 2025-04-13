import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Section({ 
  id, 
  title, 
  children, 
  className = '',
  animate = true 
}: SectionProps) {
  const content = (
    <div className={`container mx-auto px-4 ${className}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );

  return (
    <section id={id}>
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {content}
        </motion.div>
      ) : content}
    </section>
  );
} 