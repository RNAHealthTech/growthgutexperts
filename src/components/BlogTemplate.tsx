import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, Tag } from 'lucide-react';
import { blogs, BlogContent } from '../data/blogs';
import { DoctorServices } from '../data/services';

interface BlogTemplateProps {
  doctorData: {
    drSushovan: DoctorServices;
    drMoumita: DoctorServices;
  };
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ doctorData }) => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogContent | null>(null);
  const [variant, setVariant] = useState<'drmoumita' | 'drsushovan'>('drmoumita');
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }

    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];

    const foundBlog = blogs.find(
      b => b.slug === slug && b.subdomain === (subdomain.includes('sushovan') ? 'drsushovan' : 'drmoumita')
    );

    if (foundBlog) {
      setBlog(foundBlog);
      setVariant(foundBlog.subdomain);
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl text-gray-600"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const themeColors = {
    drmoumita: {
      text: 'text-amber-900',
      bg: 'bg-amber-100',
      accent: 'bg-amber-200'
    },
    drsushovan: {
      text: 'text-blue-900',
      bg: 'bg-blue-100',
      accent: 'bg-blue-200'
    }
  };

  const currentTheme = themeColors[variant];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${currentTheme.text}`}>
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Blog Metadata */}
        <div className={`${currentTheme.bg} p-6 rounded-lg mb-8 flex flex-wrap items-center justify-between`}>
          <div className="flex items-center space-x-4">
             
            <div className="flex items-center space-x-2">
              <Tag className={`w-5 h-5 ${currentTheme.text}`} />
              <span className="text-gray-700">
                {blog.tags.join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto prose lg:prose-xl">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;