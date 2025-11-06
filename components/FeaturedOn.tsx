import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import Section from './Section';

import skySportsLogo from '../assets/images/Sky-sports.png';
import sustainHealthLogo from '../assets/images/sustainhealth.png';

const FeaturedOn: React.FC = () => {
    return (
        <div className="bg-slate-900 py-16 sm:py-24">
            <AnimatedWrapper>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-xl font-semibold leading-8 text-slate-400">
                        As featured in and trusted by
                    </h2>
                    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-x-12 sm:gap-x-24 gap-y-10">
                        
                        {/* Sky Sports Logo with "make white" filter */}
                        <a 
                            href="https://www.skysports.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Sky Sports"
                            className="group"
                        >
                            <img
                                className="max-h-24 w-auto object-contain transition-all duration-300 
                                           brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                                src={skySportsLogo}
                                alt="Sky Sports"
                            />
                        </a>
                        
                        {/* Sustain Health Magazine Logo with "make white" filter */}
                        <a 
                            href="https://www.sustainhealth.fit/lifestyle/efl-jameson-ultimate-matchday/" // <-- IMPORTANT: Change this to your article link
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Sustain Health Magazine"
                            className="group"
                        >
                            <img
                                className="max-h-28 w-auto object-contain transition-all duration-300 
                                           grayscale brightness-200 opacity-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                                src={sustainHealthLogo}
                                alt="Sustain Health Magazine"
                            />
                        </a>
                    </div>
                </div>
            </AnimatedWrapper>
        </div>
    );
};

export default FeaturedOn;