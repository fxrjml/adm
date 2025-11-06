import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo
import Header from './components/Header';
import AnimatedWrapper from './components/AnimatedWrapper';
import Section from './components/Section';
import FeaturedOn from './components/FeaturedOn';
import BackToTop from './components/BackToTop';
import Testimonials from './components/Testimonials';
import ImageModal from './components/ImageModal';
import type { Service, GalleryImage } from './types';
import {
    SERVICES,
    GALLERY_IMAGES,
    TwitterIcon,
    InstagramIcon,
    FacebookIcon,
    HERO_IMAGE_URL,
    ABOUT_IMAGE_URL
} from './constants';




const Hero: React.FC = () => (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
            <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase opacity-0 animate-slide-in-up">
                    admaperture
                </h1>
            </div>
            <div className="overflow-hidden mt-4">
                <p className="text-xl md:text-2xl text-amber-300 font-light tracking-wide opacity-0 animate-slide-in-up-delayed">
                    Where Every Shot Tells Your Story
                </p>
            </div>
        </div>
    </section>
);


const About: React.FC = () => (
  <Section id="about" title="About Me" className="bg-slate-800">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <AnimatedWrapper className="md:w-1/3">
        <img src={ABOUT_IMAGE_URL} alt="The photographer, admaperture" className="rounded-full w-64 h-64 object-cover shadow-2xl mx-auto border-4 border-amber-400/50" />
      </AnimatedWrapper>
      <AnimatedWrapper className="md:w-2/3 text-lg text-slate-300 space-y-4 text-center md:text-left">
        <p>
          Welcome to AdmAperture! I’m a passionate freelance photographer dedicated to turning your vision into stunning, unforgettable images. From sweeping landscapes to intimate portraits and dynamic commercial shoots, my goal is to capture the moments that matter most—beautifully, authentically, and with a touch of adventure.
        </p>
        <p>
          Photography, for me, is more than just taking pictures—it’s about telling your story. I work closely with each client to understand their vision, ensuring every shot reflects their personality, brand, or special occasion. Whether it’s a corporate event, a family gathering, or a personal portrait session, I bring creativity, attention to detail, and a commitment to excellence to every project.
        </p>
      </AnimatedWrapper>
    </div>
  </Section>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-slate-800/50 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-amber-400/20 h-full">
      <div className="inline-block p-4 bg-slate-700 rounded-full mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-slate-400">{service.description}</p>
    </div>
);

const Services: React.FC = () => (
    <Section id="services" title="My Services">
        <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <AnimatedWrapper key={index} className="h-full" style={{ transitionDelay: `${index * 150}ms`}}>
                    <ServiceCard service={service} />
                </AnimatedWrapper>
            ))}
        </div>
    </Section>
);

// --- MODIFICATION START ---
// The Gallery component is changed to receive all its logic as props.
interface GalleryProps {
    images: GalleryImage[];
    filter: string;
    onFilterChange: (category: string) => void;
    sortOrder: string;
    onSortChange: (order: string) => void;
    onImageClick: (image: GalleryImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, filter, onFilterChange, sortOrder, onSortChange, onImageClick }) => {
    const galleryFilters = ['All', 'Landscapes', 'Events & Commercial', 'Portraits'];

    return (
        <Section id="gallery" title="Gallery" className="bg-slate-800">
            <AnimatedWrapper>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4">
                        {galleryFilters.map(category => (
                            <button
                                key={category}
                                onClick={() => onFilterChange(category)}
                                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 border-2 ${filter === category ? 'bg-amber-400 text-slate-900 border-amber-400' : 'bg-transparent text-slate-300 border-slate-600 hover:bg-slate-700/50 hover:border-slate-500'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <label htmlFor="sort-order" className="font-semibold text-slate-300">Sort by:</label>
                        <select
                            id="sort-order"
                            value={sortOrder}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="bg-slate-700 border border-slate-600 rounded-md px-2 py-1 text-white focus:ring-amber-400 focus:border-amber-400"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>
            </AnimatedWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image) => (
                    <AnimatedWrapper key={image.id}>
                        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-w-1 aspect-h-1" onClick={() => onImageClick(image)}>
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                <p className="text-white text-center">{image.alt}</p>
                            </div>
                        </div>
                    </AnimatedWrapper>
                ))}
            </div>
        </Section>
    );
};
// --- MODIFICATION END ---


// --- YOUR ORIGINAL BOOKING, CONTACT, and FOOTER CODE IS FULLY RESTORED BELOW ---
const Booking: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        const formspreeEndpoint = 'https://formspree.io/f/myzjrrwe';

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
            } else {
                const data = await response.json();
                if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                     console.error("Formspree errors:", data.errors);
                }
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <Section id="booking" title="Book a Session">
            <AnimatedWrapper>
                <div className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-lg shadow-2xl">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-amber-400 mb-2">Thank You!</h3>
                            <p className="text-slate-300">Your booking request has been sent. I'll get back to you shortly.</p>
                        </div>
                    ) : status === 'error' ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-red-500 mb-2">Oops! Something went wrong.</h3>
                            <p className="text-slate-300 mb-4">There was an error sending your message. Please try again or contact me directly at <a href="mailto:hello@admaperture.com" className="text-amber-400 hover:underline">hello@admaperture.com</a>.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="inline-block bg-amber-400 text-slate-900 font-bold py-2 px-8 rounded-full text-lg hover:bg-amber-300 transition-colors duration-300"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                 <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1">Service Type</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400">
                                        <option value="" disabled>Select a service</option>
                                        {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-1">Preferred Date</label>
                                    <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400" min={new Date().toISOString().split('T')[0]}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Additional Message <span className="text-slate-500">(Optional)</span></label>
                                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={status === 'submitting'} className="inline-block bg-amber-400 text-slate-900 font-bold py-3 px-12 rounded-full text-lg hover:bg-amber-300 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors duration-300 shadow-lg">
                                    {status === 'submitting' ? 'Submitting...' : 'Book Now'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </AnimatedWrapper>
        </Section>
    );
};

const Contact: React.FC = () => (
    <Section id="contact" title="Get In Touch">
        <AnimatedWrapper>
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-slate-300 mb-8">
                    Have a project in mind, or just want to say hello? I'd love to hear from you. Reach out via email or connect with me on social media.
                </p>
                <a href="mailto:hello@admaperture.com" className="inline-block bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-300 transition-colors duration-300 shadow-lg">
                    aadamandaperture@gmail.com
                </a>
            </div>
        </AnimatedWrapper>
    </Section>
);

const Footer: React.FC = () => (
    <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto py-6 px-6 text-center text-slate-400">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.instagram.com/admaperture.co.uk/" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="hover:text-amber-400 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Admaperture Photography. All Rights Reserved. Contact me at: +44 7352 335248 </p>
        </div>
    </footer>
);

// --- MODIFICATION START ---
// The App component is updated to manage state for the gallery and modal.
function App() {
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const displayedImages = useMemo(() => {
    const filtered = filter === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter(img => img.category === filter);

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.dateAdded);
      const dateB = new Date(b.dateAdded);
      return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

    return sorted;
  }, [filter, sortOrder]);

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % displayedImages.length;
    setSelectedImage(displayedImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + displayedImages.length) % displayedImages.length;
    setSelectedImage(displayedImages[prevIndex]);
  };

  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedOn />
        <Gallery
          images={displayedImages}
          filter={filter}
          onFilterChange={setFilter}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          onImageClick={setSelectedImage}
        />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      {selectedImage !== null && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
}
// --- MODIFICATION END ---

export default App;