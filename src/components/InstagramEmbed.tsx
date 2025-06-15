
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    FB?: {
      init: (params: any) => void;
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export interface SocialPost {
  url: string;
  type: 'instagram' | 'facebook';
  isReel?: boolean;
  height?: number;
  videoId?: string; // For Facebook videos
}

interface SocialMultiEmbedProps {
  posts: SocialPost[];
  maxRetries?: number;
  retryInterval?: number;
  defaultHeight?: number;
}

const SocialMultiEmbed: React.FC<SocialMultiEmbedProps> = ({
  posts,
  maxRetries = 5,
  retryInterval = 2000,
  defaultHeight = 550
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [loadedPosts, setLoadedPosts] = useState<Set<number>>(new Set());
  const [loadingPosts, setLoadingPosts] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
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
  const detectPostType = (post: SocialPost) => {
    if (post.height) return post.height;
    
    if (post.type === 'facebook') return 400; // Default height for Facebook videos
    if (post.isReel) return 700;
    if (post.url.includes('/tv/') || post.url.includes('/igtv/')) return 750;
    
    return defaultHeight;
  };

  // Load Instagram embed script
  const loadInstagramScript = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.instgrm) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
      if (existingScript) {
        // Wait for existing script to load
        const checkInstagram = setInterval(() => {
          if (window.instgrm) {
            clearInterval(checkInstagram);
            resolve(true);
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  // Load Facebook SDK
  const loadFacebookScript = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.FB) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector('script[src*="connect.facebook.net"]');
      if (existingScript) {
        const checkFB = setInterval(() => {
          if (window.FB) {
            clearInterval(checkFB);
            resolve(true);
          }
        }, 100);
        return;
      }

      // Create FB root div if it doesn't exist
      if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.appendChild(fbRoot);
      }

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;

      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: 'v18.0'
          });
        }
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  // Initialize all required scripts
  const initializeScripts = async () => {
    try {
      const hasInstagramPosts = posts.some(post => post.type === 'instagram');
      const hasFacebookPosts = posts.some(post => post.type === 'facebook');

      const promises = [];
      
      if (hasInstagramPosts) {
        promises.push(loadInstagramScript());
      }
      
      if (hasFacebookPosts) {
        promises.push(loadFacebookScript());
      }

      await Promise.all(promises);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing social media scripts:', error);
      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
        }, retryInterval);
      }
    }
  };

  // Create Instagram post embed
  const createInstagramEmbed = async (post: SocialPost, index: number): Promise<void> => {
    return new Promise((resolve) => {
      const container = containerRefs.current[index];
      if (!container || !window.instgrm) {
        resolve();
        return;
      }

      const embedHeight = detectPostType(post);

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
      setTimeout(() => {
        window.instgrm?.Embeds.process();
        
        setTimeout(() => {
          const iframe = container.querySelector('iframe');
          if (iframe) {
            iframe.style.height = `${embedHeight}px`;
            iframe.style.maxHeight = `${embedHeight}px`;
            iframe.style.minHeight = `${embedHeight}px`;
          }
          resolve();
        }, 1000);
      }, 100);
    });
  };

  // Create Facebook video embed
  const createFacebookEmbed = async (post: SocialPost, index: number): Promise<void> => {
    return new Promise((resolve) => {
      const container = containerRefs.current[index];
      if (!container) {
        resolve();
        return;
      }

      const embedHeight = detectPostType(post);

      // Clear the container
      container.innerHTML = '';

      // Extract video ID from Facebook URL for iframe embed
      const createFacebookIframe = () => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(post.url)}&show_text=false&width=560&t=0`;
        iframe.width = '100%';
        iframe.style.height = `${embedHeight}px`;
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.style.borderRadius = '8px';
        iframe.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        iframe.scrolling = 'no';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
        
        return iframe;
      };

      // Try Facebook SDK first, fallback to iframe
      if (window.FB) {
        // Create Facebook video embed using SDK
        const fbVideo = document.createElement('div');
        fbVideo.className = 'fb-video';
        fbVideo.setAttribute('data-href', post.url);
        fbVideo.setAttribute('data-width', '500');
        fbVideo.setAttribute('data-show-text', 'false');
        fbVideo.setAttribute('data-autoplay', 'false');
        fbVideo.setAttribute('data-show-captions', 'false');

        Object.assign(fbVideo.style, {
          width: '100%',
          height: `${embedHeight}px`,
          maxHeight: `${embedHeight}px`,
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        });

        container.appendChild(fbVideo);

        setTimeout(() => {
          window.FB?.XFBML.parse();
          
          // Check if SDK embed worked, otherwise fallback to iframe
          setTimeout(() => {
            const fbIframe = container.querySelector('iframe');
            if (!fbIframe) {
              container.innerHTML = '';
              container.appendChild(createFacebookIframe());
            }
            resolve();
          }, 2000);
        }, 100);
      } else {
        // Fallback to direct iframe embed
        container.appendChild(createFacebookIframe());
        resolve();
      }
    });
  };

  // Create individual post embed with async/await
  const createPostEmbed = useCallback(async (post: SocialPost, index: number) => {
    if (loadingPosts.has(index) || loadedPosts.has(index)) {
      return;
    }

    setLoadingPosts(prev => new Set(Array.from(prev).concat(index)));

    try {
      if (post.type === 'instagram') {
        await createInstagramEmbed(post, index);
      } else if (post.type === 'facebook') {
        await createFacebookEmbed(post, index);
      }

      setLoadedPosts(prev => new Set(Array.from(prev).concat(index)));
    } catch (error) {
      console.error(`Error loading post ${index}:`, error);
    } finally {
      setLoadingPosts(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }
    //eslint-disable-next-line
  }, [loadingPosts, loadedPosts]);

  // Load posts sequentially for better performance
  const loadPostsSequentially = async () => {
    if (!isInitialized) return;

    // Load visible posts first (current slide in mobile, all in desktop)
    const visibleIndices = isMobile ? [currentSlide] : Array.from({ length: posts.length }, (_, i) => i);
    
    for (const index of visibleIndices) {
      await createPostEmbed(posts[index], index);
      // Small delay between loads to prevent overwhelming the browser
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Load remaining posts in mobile
    if (isMobile) {
      const remainingIndices = Array.from({ length: posts.length }, (_, i) => i)
        .filter(i => i !== currentSlide);
      
      for (const index of remainingIndices) {
        await createPostEmbed(posts[index], index);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
  };

  // Initialize scripts and load posts
  useEffect(() => {
    initializeScripts();
    //eslint-disable-next-line
  }, [posts, retryCount]);

  // Load posts when initialized
  useEffect(() => {
    if (isInitialized) {
      loadPostsSequentially();
    }
    //eslint-disable-next-line
  }, [isInitialized, currentSlide, isMobile]);

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
  if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'; // Removed xl:grid-cols-4
  return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
};

  if (posts.length === 0) {
    return <div className="text-center text-gray-500">No social media posts to display</div>;
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
                      {(loadingPosts.has(index) || !loadedPosts.has(index)) && (
                        <div className="flex justify-center items-center bg-gray-100 rounded-lg" 
                             style={{ height: `${detectPostType(post)}px` }}>
                          <div className="flex flex-col items-center space-y-2">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                            <p className="text-sm text-gray-600">
                              Loading {post.type === 'instagram' ? 'Instagram' : 'Facebook'} {post.isReel ? 'Reel' : 'Post'}...
                            </p>
                          </div>
                        </div>
                      )}
                      <div
                        ref={(el) => (containerRefs.current[index] = el)}
                        className="w-full"
                        style={{ 
                          height: `${detectPostType(post)}px`,
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
                {(loadingPosts.has(index) || !loadedPosts.has(index)) && (
                  <div className="flex justify-center items-center rounded-lg"
                       style={{ height: `${detectPostType(post)}px` }}>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                      <p className="text-sm text-gray-600">
                        Loading {post.type === 'instagram' ? 'Instagram' : 'Facebook'} {post.isReel ? 'Reel' : 'Post'}...
                      </p>
                    </div>
                  </div>
                )}
                <div
                  ref={(el) => (containerRefs.current[index] = el)}
                  className="w-full"
                  style={{ 
                    height: `${detectPostType(post)}px`,
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

export default SocialMultiEmbed;
 