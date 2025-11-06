import React from 'react';
import type { Service, GalleryImage, Testimonial } from './types';

// Import local images from the 'assets' folder
import heroImage from './assets/images/hero-background.jpg';
import aboutImage from './assets/images/gallery-about.jpg';
import galleryLandscape from './assets/images/gallery-street.jpg';
import galleryEvent1 from './assets/images/gallery-guy-speech.jpg';
import galleryEvent2 from './assets/images/gallery-school-drawing.jpg';
import galleryEvent3 from './assets/images/gallery-cat.jpg';
import galleryEvent4 from './assets/images/gallery-asian-presenting.jpg';
import galleryLandscape2 from './assets/images/gallery-bridge.jpg';
import galleryEvent5 from './assets/images/gallery-card.jpg';
import galleryLandscape3 from './assets/images/gallery-car.jpg';
import galleryLandscape4 from './assets/images/gallery-horse.jpg';
import galleryPortraits from './assets/images/gallery-dawood.jpg';
import galleryPortraits2 from './assets/images/gallery-raja.jpg';
import galleryLandscape5 from './assets/images/gallery-car1.jpg';
import galleryPortraits3 from './assets/images/gallery-jamal.jpg';
import galleryLandscape7 from './assets/images/gallery-horse1.jpg';
import galleryLandscape8 from './assets/images/gallery-takeon.jpg';
import galleryPortraits4 from './assets/images/gallery-adm.jpg';
import galleryPortraits5 from './assets/images/gallery-ali.jpg';
import galleryPortraits6 from './assets/images/gallery-ali1.jpg';
import galleryPortraits7 from './assets/images/gallery-ali2.jpg';





export const LandscapeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const PortraitIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const EventIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const SERVICES: Service[] = [
  {
    icon: <LandscapeIcon className="w-12 h-12 text-amber-400" />,
    title: "Landscape & Travel",
    description: "Capturing the breathtaking beauty of nature and the spirit of adventure from around the world.",
  },
  {
    icon: <PortraitIcon className="w-12 h-12 text-amber-400" />,
    title: "Portraits",
    description: "Creating timeless and expressive portraits that tell your unique story.",
  },
  {
    icon: <EventIcon className="w-12 h-12 text-amber-400" />,
    title: "Events & Commercial",
    description: "Professional coverage for your special events, brands, and commercial projects.",
  },
];

export const HERO_IMAGE_URL = heroImage;
export const ABOUT_IMAGE_URL = aboutImage;


export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: galleryLandscape, alt: 'Dark Street under neon lights', category: 'Landscapes' },
  { id: '2', src: galleryEvent1, alt: 'A man presenting to a large group of people', category: 'Events & Commercial' },
  { id: '3', src: galleryEvent2, alt: 'a child making a drawing', category: 'Events & Commercial' },
  { id: '4', src: galleryEvent3, alt: 'a child holding a cat', category: 'Events & Commercial' },
  { id: '5', src: galleryEvent4, alt: 'an asian man speaking to a crowd', category: 'Events & Commercial' },
  { id: '6', src: galleryLandscape2, alt: 'a bridge at night', category: 'Landscapes' },
  { id: '7', src: galleryEvent5, alt: 'A close up of a business card', category: 'Events & Commercial' },
  { id: '8', src: galleryLandscape3, alt: 'A close up of a cars headlights', category: 'Landscapes' },
  { id: '9', src: galleryLandscape4, alt: 'A horse running in a field', category: 'Landscapes' },
  { id: '10', src: galleryPortraits, alt: 'A portrait of a model in a hoodie with eyes covered', category: 'Portraits' },
  { id: '11', src: galleryPortraits2, alt: 'A portrait of a model in a park', category: 'Portraits' },
  { id: '12', src: galleryLandscape5, alt: 'A pakistani van with headlights on', category: 'Landscapes' },
  { id: '13', src: galleryPortraits3, alt: 'A player smiling during warm up', category: 'Portraits' },
  { id: '14', src: galleryLandscape7, alt: 'Man riding a horse', category: 'Landscapes' },
  { id: '15', src: galleryLandscape8, alt: 'Player taking on a defender', category: 'Landscapes' },
  { id: '16', src: galleryPortraits4, alt: '2 photographers in the middle of taking photos', category: 'Portraits' },
  { id: '17', src: galleryPortraits5, alt: 'A player dribbling a football', category: 'Portraits' },
  { id: '19', src: galleryPortraits6, alt: 'Two players discussing before a match', category: 'Portraits' },
  { id: '20', src: galleryPortraits7, alt: 'A player in action during a match', category: 'Portraits' },


];


export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "One of the best experiences i've ever had. The best photos in town.",
        author: "Raja Waris",
        company: "Model"
    },
    {
        quote: "Exceptional services. Shots were as professional as it gets .Highly recommended!",
        author: "RHT",
        company: "Reach High Tutors"
    },
    {
        quote: "Working with them was an absolute pleasure. They made me feel so comfortable during the portrait session, and the final images are just stunning.",
        author: "Emily White",
        company: "Lifestyle Blogger"
    }
];

export const QuoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path>
    </svg>
);


export const TwitterIcon: React.FC<{className?: string}> = ({className}) => (
    <svg fill="currentColor" className={className} viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
);

export const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={className} viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
);

export const FacebookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg fill="currentColor" className={className} viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
);