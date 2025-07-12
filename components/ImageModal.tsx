import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { GalleryImage } from '../types';
import AnimatedWrapper from './AnimatedWrapper';

interface ImageModalProps {
    image: GalleryImage;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, onNext, onPrev }) => {
    const modalRoot = document.getElementById('modal-root');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, onNext, onPrev]);

    if (!modalRoot) return null;
    
    const modalContent = (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div className="relative max-w-4xl max-h-[95vh] w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex-shrink-0">
                    <AnimatedWrapper>
                        <img src={image.src} alt={image.alt} className="w-full h-auto object-contain max-h-[75vh] rounded-lg shadow-2xl" />
                    </AnimatedWrapper>
                </div>
                
                <div className="flex-grow text-center mt-3 px-4 py-2 overflow-y-auto">
                    <p className="text-slate-300 text-lg">{image.alt}</p>
                </div>
            </div>

            <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="Previous image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="Next image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );

    return ReactDOM.createPortal(modalContent, modalRoot);
};

export default ImageModal;