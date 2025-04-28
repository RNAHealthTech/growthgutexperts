import React, { useState, useEffect, useRef, useMemo } from 'react';
import  { useNavigate } from 'react-router-dom';

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dimensions, setDimensions] = useState<{ width: number; height: number }[]>([]);
    const [carouselHeight, setCarouselHeight] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const navigate = useNavigate();

    

    const images = useMemo(() => [
        {
            src: "/images/doc-carousel.jpeg",
            alt: "growth gut experts",
            caption: ""
        },
        {
            src: "/images/image-4.jpeg",
            alt: "Doctor with patient",
            caption: ""
        },
        {
            src: "/images/image-5.jpeg",
            alt: "work",
            caption: ""
        },
        {
            src: '/images/image-3.jpeg', 
            alt: "", 
            caption: ""
        }, 
        {
            src: "/images/in-lab.jpeg", 
            alt: "Dr. Sushovan at work", 
            caption: ""
        
        }, 
        
    ], []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // Load images and get their dimensions
    useEffect(() => {
        const loadImages = async () => {
            const imageDimensions = await Promise.all(
                images.map((image) => {
                    return new Promise<{ width: number; height: number }>((resolve) => {
                        const img = new Image();
                        img.src = image.src;
                        img.onload = () => {
                            resolve({ width: img.width, height: img.height });
                        };
                        img.onerror = () => {
                            // Default dimensions if image fails to load
                            resolve({ width: 800, height: 400 });
                        };
                    });
                })
            );

            setDimensions(imageDimensions);
        };

        loadImages();
    }, [images]);

    // Update carousel height when dimensions change or window resizes
    useEffect(() => {
        const updateCarouselHeight = () => {
            if (!carouselRef.current || dimensions.length === 0) return;

            const containerWidth = carouselRef.current.clientWidth;

            // Calculate height based on aspect ratio of current image
            const currentDimension = dimensions[currentIndex] || { width: 16, height: 9 };
            const aspectRatio = currentDimension.width / currentDimension.height;
            const calculatedHeight = containerWidth / aspectRatio;

            // Set a minimum and maximum height
            const minHeight = 300;
            const maxHeight = window.innerHeight * 0.8;
            const newHeight = Math.min(Math.max(calculatedHeight, minHeight), maxHeight);

            setCarouselHeight(newHeight);
        };

        updateCarouselHeight();
        window.addEventListener('resize', updateCarouselHeight);

        return () => {
            window.removeEventListener('resize', updateCarouselHeight);
        };
    }, [dimensions, currentIndex]);

    // Auto-rotate carousel
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            resetTimeout();
        };
    }, [currentIndex, images.length]);

    return (
        <>
        <div
            ref={carouselRef}
            className="relative w-full overflow-hidden"
            style={{ height: carouselHeight || '400px' }}
        >
            {/* Images */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full h-full relative flex justify-center">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full object-contain max-w-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-3 text-center">
                            <p className="font-medium">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Invisible next/prev controls - only show on hover */}
            <div className="absolute inset-0 flex justify-between items-center opacity-0 hover:opacity-70 transition-opacity">
                <button
                    onClick={() => {
                        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
                    }}
                    className="bg-black/20 hover:bg-black/40 text-white h-full px-4"
                    aria-label="Previous slide"
                >
                    <span className="sr-only">Previous</span>
                    ❮
                </button>
                <button
                    onClick={() => {
                        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
                    }}
                    className="bg-black/20 hover:bg-black/40 text-white h-full px-4"
                    aria-label="Next slide">
                    <span className="sr-only">Next</span>
                    ❯
                </button>
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/40'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            
        </div>
        <div className="flex justify-center mt-10">
        <button
            onClick={() => navigate('/gallery')}
            className="bg-blue-700 text-lg hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 flex items-center"
        >
            View Full Gallery
        </button>
    </div>
    </>
    );
};

export default ImageCarousel;