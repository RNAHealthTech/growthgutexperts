import React from "react";
import { DoctorProfile } from "../data/doctor";
import { blogs, BlogContent } from "../data/blogs";
import LandingSection from "../ui/LandingSection";
import { Link } from "react-router-dom";
import { DoctorVariant } from "../layouts/Header";
import { FileText, Download, ExternalLink } from 'lucide-react';

interface BlogsProps {
  doctorData: DoctorProfile;
  variant: DoctorVariant;
}

interface PdfResource {
  id: string;
  title: string;
  fileName: string;
  filePath: string;
  imageUrl?: string;

}

const Blogs: React.FC<BlogsProps> = ({ doctorData, variant }) => {
  const name = doctorData.personalDetails.name.toLowerCase().split(' ');
  const subdomain = `dr${name[1]}`;

  const currentDoctorBlogs: BlogContent[] = blogs.filter(
    blog => blog.subdomain === subdomain
  );

  const pdfResources: PdfResource[] = [
    {
      id: "surgar-content-guide",
      title: "Sugar Content in Common Foods and Beverages",
      fileName: "Sugar List by GrowthGut Experts",
      filePath: "/pdfs/Sugar List by GrowthGutExperts.pdf",
      imageUrl: "/images/sugar.png"
    }
  ]

  const handlePDFClick = (pdf: PdfResource, action: 'view' | 'download') => {
    if (action === 'view') {
      window.open(pdf.filePath, '_blank', 'noopener,noreferrer');

    } else if (action === 'download') {
      const link = document.createElement('a');
      link.href = pdf.filePath;
      link.download = pdf.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <main className="flex-grow">
      <LandingSection
        label="Medical Insights"
        title="Expert Blog Posts"
        description="Explore comprehensive health articles on some common conditions"
        buttonText="Book Appointment"
        variant={variant}
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

          {/* PDF Resources */}
          {pdfResources.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl border-l-4 border-red-500"
            >
              {/* PDF Thumbnail or Icon */}
              <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                {pdf.imageUrl ? (
                  <img
                    src={pdf.imageUrl}
                    alt={pdf.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FileText className="w-20 h-20 text-red-500" />
                )}
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  PDF
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {pdf.title}
                </h3>


                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePDFClick(pdf, 'view')}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View PDF
                  </button>
                  <button
                    onClick={() => handlePDFClick(pdf, 'download')}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
};

export default Blogs;