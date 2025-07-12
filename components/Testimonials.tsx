import React from 'react';
import { TESTIMONIALS, QuoteIcon } from '../constants';
import type { Testimonial } from '../types';
import AnimatedWrapper from './AnimatedWrapper';

const Section: React.FC<{id: string, title?: string, className?: string, children: React.ReactNode}> = ({ id, title, className, children }) => (
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


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-slate-800/50 p-8 rounded-lg shadow-lg flex flex-col h-full">
        <QuoteIcon className="w-10 h-10 text-amber-400 mb-4" />
        <p className="text-slate-300 mb-6 flex-grow">"{testimonial.quote}"</p>
        <div>
            <p className="font-bold text-white">{testimonial.author}</p>
            <p className="text-sm text-slate-400">{testimonial.company}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => (
    <Section id="testimonials" title="What Clients Say" className="bg-slate-800">
        <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
                <AnimatedWrapper key={index} className="h-full" style={{ transitionDelay: `${index * 150}ms` }}>
                    <TestimonialCard testimonial={testimonial} />
                </AnimatedWrapper>
            ))}
        </div>
    </Section>
);

export default Testimonials;
