import React, { useRef, useState, useEffect, CSSProperties } from 'react';

interface AnimatedWrapperProps {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, className, style }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default AnimatedWrapper;
