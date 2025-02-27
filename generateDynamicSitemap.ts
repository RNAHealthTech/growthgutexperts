// In generateDynamicSitemap.ts
import { writeFileSync, readdirSync } from "fs";
import { join } from "path";
import { SitemapStream, streamToPromise } from 'sitemap';
import { doctorsServices } from './src/data/services';

const mainHostname = "https://growthgutexperts.com";
const subdomains: Record<string, string> = {
  drSushovan: "https://drsushovan.growthgutexperts.com",
  drMoumita: "https://drmoumita.growthgutexperts.com"
};

// Function to get image URLs from public/images folder
function getImageUrls() {
  const imagesDir = join(process.cwd(), 'public', 'images');
  const images = readdirSync(imagesDir);
  return images.map(image => `${mainHostname}/images/${image}`);
}

// Routes for the main site
function getMainSiteRoutes() {
  return [
    '/',
  ];
}

// Routes for doctor portfolios based on DoctorPortfolio.tsx
function getDoctorPortfolioRoutes() {
  return [
    '/',              // Home
    '/services',      // Services list
    '/blogs',         // Blogs list
    '/contact',       // Contact
    '/about'          // About
  ];
}

 

// Extract all service and subservice slugs from the doctorsServices data
function getAllServiceRoutes() {
  const serviceRoutes: string[] = [];
  
  // Process each doctor's services
  doctorsServices.forEach(doctor => {
    // Process main services
    doctor.services.forEach(service => {
      if (service.slug) {
        serviceRoutes.push(`/services/${service.slug}`);
        
        // Process subservices
        service.subServices.forEach(subService => {
          if (subService.slug) {
            serviceRoutes.push(`/services/${subService.slug}`);
          }
        });
      }
    });
  });
  
  // Return unique service routes
  return Array.from(new Set(serviceRoutes));
}

async function generateSitemap() {
  try {
    const mainSiteRoutes = getMainSiteRoutes();
    const doctorRoutes = getDoctorPortfolioRoutes();
    const serviceRoutes = getAllServiceRoutes();
    const imageUrls = getImageUrls();
    
    const stream = new SitemapStream({ hostname: mainHostname });
    
    // Add routes for main site
    mainSiteRoutes.forEach(route => {
      stream.write({ url: route, changefreq: 'weekly', priority: 0.7 });
    });
    
   
    
    // Add service routes to main site
    serviceRoutes.forEach(route => {
      stream.write({ url: route, changefreq: 'weekly', priority: 0.6 });
    });
    
    // Add image gallery routes
    stream.write({
      url: '/images',
      changefreq: 'monthly',
      priority: 0.5,
      img: imageUrls.map(url => ({
        url,
        caption: 'Image from our gallery',
        title: url.split('/').pop()
      }))
    });
    
    stream.write({
      url: '/gallery',
      changefreq: 'monthly',
      priority: 0.5,
      img: imageUrls.map(url => ({ url }))
    });
    
    // Add subdomain routes for each doctor
    Object.entries(subdomains).forEach(([doctorKey, subdomainUrl]) => {
      // Base routes for doctor portfolio
      doctorRoutes.forEach(route => {
        stream.write({ 
          url: `${subdomainUrl}${route}`,
          changefreq: 'weekly',
          priority: 0.7
        });
      });
      
      
      
      // Service routes for doctor subdomain
      // Filter service routes for the specific doctor
      const doctorSpecificServices = serviceRoutes.filter(route => {
        const slug = route.replace('/services/', '');
        // Check if this service belongs to the current doctor
        return doctorsServices.some(docData => 
          docData.sub.toLowerCase() === doctorKey.toLowerCase() && docData.services.some(service => 
            service.slug === slug || service.subServices.some(subService => subService.slug === slug)
          )
        );
      });
      
      doctorSpecificServices.forEach(route => {
        stream.write({ 
          url: `${subdomainUrl}${route}`,
          changefreq: 'weekly',
          priority: 0.6
        });
      });
    });
    
    stream.end();
    
    const data = await streamToPromise(stream);
    writeFileSync('./public/sitemap.xml', data.toString());
    
    console.log('Sitemap with main domain and doctor subdomains generated successfully.');
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();