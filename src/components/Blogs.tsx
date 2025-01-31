import React from "react";
import { DoctorProfile } from "../data/doctor";
import { blogs, BlogContent } from "../data/blogs";
import LandingSection from "../ui/LandingSection";
import { Link } from "react-router-dom";

interface BlogsProps {
  doctorData: DoctorProfile;
}

const Blogs: React.FC<BlogsProps> = ({ doctorData }) => {
  // Find the correct doctor's blogs based on the doctor's name
  const name = doctorData.personalDetails.name.toLowerCase().split(' ');
  const subdomain = `dr${name[1]}`;
  
  const currentDoctorBlogs: BlogContent[] = blogs.filter(
    blog => blog.subdomain === subdomain
  );

  return (
    <main className="flex-grow">
      <LandingSection
        label="Medical Insights"
        title="Expert Blog Posts"
        description="Explore comprehensive health articles written by our specialists"
        buttonText="Read More"
        imageSrc="/images/blogs/blog-hero.jpg"
        imageAlt="Medical Blog Insights"
      />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Medical Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDoctorBlogs.map((blog) => (
            <Link 
              to={`/blog/${blog.slug}`} 
              key={blog.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl"
            >
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center">
                   
                  <div className="flex space-x-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;