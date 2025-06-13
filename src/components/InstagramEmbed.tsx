import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramPost {
  url: string;
  isReel?: boolean;
  height?: number;
}

interface InstagramMultiEmbedProps {
  posts: InstagramPost[];
  maxRetries?: number;
  retryInterval?: number;
  defaultHeight?: number;
}

const InstagramMultiEmbed: React.FC<InstagramMultiEmbedProps> = ({
  posts,
  maxRetries = 5,
  retryInterval = 2000,
  defaultHeight = 550
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [loadedPosts, setLoadedPosts] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Detect post type and set appropriate height
  const detectPostType = (url: string, isReel: boolean = false, customHeight?: number) => {
    if (customHeight) return customHeight;
    
    if (isReel) return 700;
    if (url.includes('/tv/') || url.includes('/igtv/')) return 750;
    
    return defaultHeight;
  };

  const loadInstagramEmbed = (): boolean => {
    if (window.instgrm) {
      window.instgrm?.Embeds.process();
      return true;
    }
    return false;
  };

  const initializeEmbed = () => {
    if (loadInstagramEmbed()) {
      return;
    }

    const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;

    script.onload = () => {
      loadInstagramEmbed();
      setTimeout(() => {
        loadInstagramEmbed();
      }, 1500);
    };

    script.onerror = () => {
      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          document.body.removeChild(script);
          initializeEmbed();
        }, retryInterval);
      }
    };

    document.body.appendChild(script);
  };

  // Create individual post embed
  const createPostEmbed = (post: InstagramPost, index: number) => {
    const container = containerRefs.current[index];
    if (!container) return;

    const embedHeight = detectPostType(post.url, post.isReel, post.height);

    // Clear the container
    container.innerHTML = '';

    // Create new blockquote element
    const blockquote = document.createElement('blockquote');
    blockquote.className = 'instagram-media';
    
    blockquote.setAttribute('data-instgrm-captioned', '');
    blockquote.setAttribute('data-instgrm-permalink', post.url);
    blockquote.setAttribute('data-instgrm-version', '14');

    Object.assign(blockquote.style, {
      background: '#FFF',
      border: '0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      margin: '0',
      maxWidth: '100%',
      minWidth: '326px',
      padding: '0',
      width: '100%',
      height: `${embedHeight}px`,
      maxHeight: `${embedHeight}px`,
      overflow: 'hidden',
      position: 'relative'
    });

    // Add fallback link
    const link = document.createElement('a');
    link.href = post.url;
    link.textContent = 'View this post on Instagram';
    link.style.display = 'none';
    blockquote.appendChild(link);

    container.appendChild(blockquote);

    // Process embed
    if (window.instgrm) {
      setTimeout(() => {
        window.instgrm?.Embeds.process();
        setLoadedPosts(prev => new Set(Array.from(prev).concat(index)));
        
        setTimeout(() => {
          const iframe = container.querySelector('iframe');
          if (iframe) {
            iframe.style.height = `${embedHeight}px`;
            iframe.style.maxHeight = `${embedHeight}px`;
            iframe.style.minHeight = `${embedHeight}px`;
          }
        }, 1000);
      }, 100);
    }
  };

  // Initialize all embeds
  useEffect(() => {
    initializeEmbed();
    
    const timer = setTimeout(() => {
      posts.forEach((post, index) => {
        createPostEmbed(post, index);
      });
    }, 500);

    return () => clearTimeout(timer);

    //eslint-disable-next-line
  }, [posts, retryCount]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
  };

  // Get grid columns based on number of posts
  const getGridCols = () => {
    const count = posts.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  if (posts.length === 0) {
    return <div className="text-center text-gray-500">No Instagram posts to display</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {isMobile ? (
        // Mobile Carousel
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {posts.map((post, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                      {!loadedPosts.has(index) && (
                        <div className="flex justify-center items-center h-96 bg-gray-100 rounded-lg">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                        </div>
                      )}
                      <div
                        ref={(el) => (containerRefs.current[index] = el)}
                        className="w-full"
                        style={{ 
                          height: `${detectPostType(post.url, post.isReel, post.height)}px`,
                          display: loadedPosts.has(index) ? 'block' : 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          {posts.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                aria-label="Previous post"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                aria-label="Next post"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-gray-800 w-6' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        // Desktop Grid
        <div className={`grid ${getGridCols()} gap-6`}>
          {posts.map((post, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
                {!loadedPosts.has(index) && (
                  <div className="flex justify-center items-center h-96 bg-gray-100 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                  </div>
                )}
                <div
                  ref={(el) => (containerRefs.current[index] = el)}
                  className="w-full"
                  style={{ 
                    height: `${detectPostType(post.url, post.isReel, post.height)}px`,
                    display: loadedPosts.has(index) ? 'block' : 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramMultiEmbed;

// import React, { useEffect, useState, useRef } from 'react';

// declare global {
//   interface Window {
//     instgrm?: {
//       Embeds: {
//         process: () => void;
//       };
//     };
//   }
// }

// interface InstagramEmbedProps {
//   url: string;
//   maxRetries?: number;
//   retryInterval?: number;
//   height?: number; // Optional custom height
//   isReel?: boolean; // Explicitly specify if it's a reel
// }

// const InstagramEmbed: React.FC<InstagramEmbedProps> = ({
//   url,
//   maxRetries = 5,
//   retryInterval = 2000,
//   height,
//   isReel = false
// }) => {
//   const [retryCount, setRetryCount] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [initialLoadAttempted, setInitialLoadAttempted] = useState(false);
//   const [embedHeight, setEmbedHeight] = useState<number>(550);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Detect post type and set appropriate height
//   const detectPostType = (url: string, isReel: boolean) => {
//     if (height) return height; // Use custom height if provided
    
//     // Check if explicitly marked as reel
//     if (isReel) {
//       return 700; // Taller for reels
//     }
    
//     // Check if it's a video post (Instagram TV) - these still use /tv/ URLs
//     if (url.includes('/tv/') || url.includes('/igtv/')) {
//       return 750; // Tallest for IGTV
//     }
    
//     // Default height that works well for both regular posts and reels
//     return 550;
//   };

//   const loadInstagramEmbed = (): boolean => {
//     if (window.instgrm) {
//       window.instgrm?.Embeds.process();
//       setIsLoaded(true);
//       return true;
//     }
//     return false;
//   };

//   const initializeEmbed = () => {
//     if (loadInstagramEmbed()) {
//       if (!initialLoadAttempted) {
//         setInitialLoadAttempted(true);
//         setTimeout(() => {
//           loadInstagramEmbed();
//         }, 1500);
//       }
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = '//www.instagram.com/embed.js';
//     script.async = true;

//     script.onload = () => {
//       loadInstagramEmbed();
//       if (!initialLoadAttempted) {
//         setInitialLoadAttempted(true);
//         setTimeout(() => {
//           loadInstagramEmbed();
//         }, 1500);
//       }
//     };

//     script.onerror = () => {
//       if (retryCount < maxRetries) {
//         setTimeout(() => {
//           setRetryCount(prev => prev + 1);
//           document.body.removeChild(script);
//           initializeEmbed();
//         }, retryInterval);
//       }
//     };

//     document.body.appendChild(script);
//   };

//   // Add custom CSS to hide comments and description
//   useEffect(() => {
//     // Remove any existing styles first
//     const existingStyles = document.querySelectorAll('style[data-instagram-embed]');
//     existingStyles.forEach(style => style.remove());

//     const style = document.createElement('style');
//     style.setAttribute('data-instagram-embed', 'true');
//     style.textContent = `
//       .instagram-embed-container .instagram-media iframe {
//         pointer-events: none;
//       }
      
//       /* Dynamic height for different post types */
//       .instagram-media iframe[src*="instagram.com"] {
//         height: ${embedHeight}px !important;
//         min-height: ${embedHeight}px !important;
//         max-height: ${embedHeight}px !important;
//       }
      
//       /* Force height on the blockquote container */
//       .instagram-embed-container .instagram-media {
//         margin: 0 !important;
//         height: ${embedHeight}px !important;
//         max-height: ${embedHeight}px !important;
//         overflow: hidden !important;
//       }
      
//       /* Additional CSS to hide specific elements within the iframe */
//       .instagram-embed-container {
//         overflow: hidden;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       const stylesToRemove = document.querySelectorAll('style[data-instagram-embed]');
//       stylesToRemove.forEach(style => style.remove());
//     };
//   }, [embedHeight]);

//   // Initial load
//   useEffect(() => {
//     initializeEmbed();

//     return () => {
//       const scripts = document.getElementsByTagName('script');
//       for (let i = 0; i < scripts.length; i++) {
//         if (scripts[i].src.includes('instagram.com/embed.js')) {
//           document.body.removeChild(scripts[i]);
//           break;
//         }
//       }
//     };
//     // eslint-disable-next-line
//   }, [retryCount]);

//   // Handle URL changes
//   useEffect(() => {
//     // Detect post type and set height
//     const detectedHeight = detectPostType(url, isReel);
//     setEmbedHeight(detectedHeight);

//     // Reset the container when URL changes
//     if (containerRef.current) {
//       // Clear the container
//       containerRef.current.innerHTML = '';

//       // Create new blockquote element
//       const blockquote = document.createElement('blockquote');
//       blockquote.className = 'instagram-media';
      
//       // Add data attributes to control what's shown
//       blockquote.setAttribute('data-instgrm-captioned', '');
//       blockquote.setAttribute('data-instgrm-permalink', url);
//       blockquote.setAttribute('data-instgrm-version', '14');
      
//       // Try to use compact version
//       const compactUrl = url.includes('?') ? `${url}&utm_source=ig_embed&utm_campaign=loading` : `${url}?utm_source=ig_embed&utm_campaign=loading`;
//       blockquote.setAttribute('data-instgrm-permalink', compactUrl);

//       // Apply styles with more specific height control
//       Object.assign(blockquote.style, {
//         background: '#FFF',
//         border: '0',
//         borderRadius: '3px',
//         boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
//         margin: '1px',
//         maxWidth: '540px',
//         minWidth: '326px',
//         padding: '0',
//         width: 'calc(100% - 2px)',
//         display: isLoaded ? 'block' : 'none',
//         height: `${embedHeight}px`,
//         maxHeight: `${embedHeight}px`,
//         overflow: 'hidden',
//         position: 'relative'
//       });

//       // Add fallback link (Instagram requirement)
//       const link = document.createElement('a');
//       link.href = url;
//       link.textContent = 'View this post on Instagram';
//       link.style.display = 'none';
//       blockquote.appendChild(link);

//       // Append new blockquote
//       containerRef.current.appendChild(blockquote);

//       // Reset loading state
//       setIsLoaded(false);

//       // Reinitialize embed
//       if (window.instgrm) {
//         setTimeout(() => {
//           window.instgrm?.Embeds.process();
//           setIsLoaded(true);
          
//           // Force height after embed loads
//           setTimeout(() => {
//             const iframe = containerRef.current?.querySelector('iframe');
//             if (iframe) {
//               iframe.style.height = `${embedHeight}px`;
//               iframe.style.maxHeight = `${embedHeight}px`;
//               iframe.style.minHeight = `${embedHeight}px`;
//             }
//           }, 1000);
//         }, 100);
//       } else {
//         initializeEmbed();
//       }
//     }
//     // eslint-disable-next-line
//   }, [url, isReel]);

//   return (
//     <div className="instagram-embed-container my-8 flex justify-center items-center w-full">
//       <div className="grid grid-cols-1 w-full max-w-[400px]">
//         {!isLoaded && (
//           <div className="flex justify-center items-center h-32">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//           </div>
//         )}
//         <div 
//           ref={containerRef} 
//           className="flex justify-center overflow-hidden" 
//           style={{ height: `${embedHeight}px` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default InstagramEmbed;