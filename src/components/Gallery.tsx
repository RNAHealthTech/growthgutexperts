import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define media types
type MediaType = 'image' | 'video';
type CategoryType = 'All' | 'Team' | 'Doctors' | 'Success Stories' | 'Facilities' | 'Education' | 'Pediatrics' | 'Events';

interface GalleryItem {
    id: number;
    type: MediaType;
    src: string;
    thumbnail?: string;
    title: string;
    description: string;
    category: string;
}

const Gallery: React.FC = () => {
    // Dummy data for gallery
    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            type: 'image',
            src: '/images/doc-carousel.jpeg',
            title: 'Growth & Gut Experts',
            description: 'Our team of specialists working together',
            category: 'Team'
        },
        {
            id: 2,
            type: 'image',
            src: '/images/in-lab.jpeg',
            title: 'Dr. Sushovan at Work',
            description: 'Consultation with a young patient',
            category: 'Doctors'
        },
        {
            id: 3,
            type: 'image',
            src: '/images/image-3.jpg',
            title: 'Dr. Moumita at Work',
            description: 'Providing care to patients',
            category: 'Doctors'
        },
        {
            id: 4,
            type: 'image',
            src: '/images/image-4.jpeg',
            title: "Dr. Sushovan at conference",
            description: "",
            category: "Doctors"
        },
        {
            id: 5,
            type: 'image',
            src: '/images/image-5.jpeg',
            title: "Dr Moumita speaking at a conference",
            description: "",
            category: "Doctors"
        }

        /*  {
            id: 4,
            type: 'video',
            src: '/videos/sample-video.mp4',
            thumbnail: '/images/video-thumbnail-1.jpg',
            title: 'Patient Success Story',
            description: 'Hear from one of our recent patients',
            category: 'Success Stories'
          },
          {
            id: 5,
            type: 'image',
            src: '/images/clinic-outside.jpg',
            title: 'Our Clinic',
            description: 'State-of-the-art facilities',
            category: 'Facilities'
          },
          {
            id: 6,
            type: 'image',
            src: '/images/team-meeting.jpg',
            title: 'Team Discussion',
            description: 'Our experts collaborating on patient care',
            category: 'Team'
          },
          {
            id: 7,
            type: 'video',
            src: '/videos/procedure-overview.mp4',
            thumbnail: '/images/video-thumbnail-2.jpg',
            title: 'Procedure Overview',
            description: 'Learn about our common procedures',
            category: 'Education'
          },
          {
            id: 8,
            type: 'image',
            src: '/images/waiting-room.jpg',
            title: 'Waiting Area',
            description: 'Comfortable space for patients and families',
            category: 'Facilities'
          },
          {
            id: 9,
            type: 'image',
            src: '/images/doctor-with-child.jpg',
            title: 'Pediatric Care',
            description: 'Specialized care for our youngest patients',
            category: 'Pediatrics'
          },
          {
            id: 10,
            type: 'video',
            src: '/videos/expert-talk.mp4',
            thumbnail: '/images/video-thumbnail-3.jpg',
            title: 'Expert Talk on Gut Health',
            description: 'Educational session with our specialists',
            category: 'Education'
          },
          {
            id: 11,
            type: 'image',
            src: '/images/equipment.jpg',
            title: 'Advanced Equipment',
            description: 'Latest technology for diagnostics',
            category: 'Facilities'
          },
          {
            id: 12,
            type: 'image',
            src: '/images/conference.jpg',
            title: 'Annual Conference',
            description: 'Our team at the Gastroenterology Summit',
            category: 'Events'
          } */
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

    // Get unique categories for filter
    const allCategories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

    // Filter items based on selected category
    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    // Open modal with selected item
    const openModal = (item: GalleryItem): void => {
        setActiveItem(item);
        document.body.style.overflow = 'hidden';
    };

    // Close modal
    const closeModal = (): void => {
        setActiveItem(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <Helmet>
                <title>Growth Gut Gallery</title>
                <meta name="description" content="Browse our gallery of images and videos" />
            </Helmet>

            <div className="container mx-auto px-4 py-8">
                <Link to='https://growthgutexperts.com/'>
                    <ArrowLeft className='text-blue-800 h-8 w-8' />
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">
                    Growth Gut Gallery
                </h1>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={() => openModal(item)}
                        >
                            <div className="relative aspect-video">
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="relative w-full h-full bg-gray-800">
                                        <img
                                            src={item.thumbnail || '/images/default-video-thumbnail.jpg'}
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-90"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-80 p-3 rounded-full">
                                                <Play size={24} className="text-teal-600" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-1 text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <span className="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500">No items found for this category.</p>
                    </div>
                )}
            </div>

            {/* Modal for viewing items */}
            {activeItem && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="max-w-4xl w-full bg-white rounded-lg overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white w-8 h-8 rounded-full flex items-center justify-center"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        <div className="p-4 md:p-6">
                            {activeItem.type === 'image' ? (
                                <img
                                    src={activeItem.src}
                                    alt={activeItem.title}
                                    className="w-full max-h-[70vh] object-contain"
                                />
                            ) : (
                                <video
                                    src={activeItem.src}
                                    controls
                                    poster={activeItem.thumbnail}
                                    className="w-full max-h-[70vh]"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}

                            <div className="mt-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{activeItem.title}</h2>
                                <p className="mt-2 text-gray-600">{activeItem.description}</p>
                                <span className="inline-block mt-3 text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                                    {activeItem.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;