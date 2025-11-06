
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

interface SectionProps {
    id: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className, children }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    <div className="container mx-auto px-6">
      {title && (
        <AnimatedWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 tracking-tight sm:text-5xl">{title}</h2>
            <div className="mt-4 mx-auto w-24 h-1 bg-amber-400 rounded"></div>
          </div>
        </AnimatedWrapper>
      )}
      {children}
    </div>
  </section>
);

export default Section;
