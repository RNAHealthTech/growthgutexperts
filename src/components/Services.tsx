import React from "react";
import { DoctorProfile } from "../data/doctor";
import { doctorsServices, DoctorServices } from "../data/services";
import LandingSection from "../ui/LandingSection";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";
import { DoctorVariant } from "../layouts/Header";

interface ServicesProps {
  doctorData: DoctorProfile;
  variant : DoctorVariant
}

const Services: React.FC<ServicesProps> = ({ doctorData, variant }) => {
  // Find the correct doctor's services based on the doctor's name
  const name = doctorData.personalDetails.name.toLowerCase().split(' ')
  
  const currentDoctor: DoctorServices | undefined = doctorsServices.find(
    doctor => doctor.sub === `dr${name[1]}`
  );
  console.log('Current Doctor : ',currentDoctor);

  if (!currentDoctor) return null;

  const pageTitle = `Expert ${currentDoctor.specialty} Services | ${currentDoctor.name}`;
  const pageDescription = `Discover our comprehensive ${currentDoctor.specialty} services provided by ${currentDoctor.name}, a leading specialist in ${currentDoctor.title.toLowerCase()}. Schedule your consultation today.`;
  const keywords = `${currentDoctor.specialty}, ${currentDoctor.title}, medical services, healthcare, specialist doctor, ${name[1].toLowerCase()} doctor`;

  return (
    <>
    <Helmet>
    <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={currentDoctor.imageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={currentDoctor.imageUrl} />
        <link rel="canonical" href={`https://growthgutexperts.com/services/${currentDoctor.sub}`} />
 
    </Helmet>
    <main className="flex-grow">
      <LandingSection
        label="Our Services"
        title={`Expert ${currentDoctor.specialty}`}
        description={currentDoctor.overview}
        buttonText="Schedule Consultation"
        variant={variant}
        imageSrc={currentDoctor.imageUrl}
        imageAlt={`${currentDoctor.name} - ${currentDoctor.title}`}
      />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Specialized Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDoctor.services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              slug={service.slug}
              subServices={service.subServices}
            />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Care</h3>
              <p className="text-muted-foreground">
                {currentDoctor.name.includes('Sushovan')
                  ? "Specialized in gastroenterology and hepatology with years of experience in treating complex digestive system disorders."
                  : "Dedicated pediatric endocrinologist with extensive experience in treating children's hormonal and growth disorders."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Treatment</h3>
              <p className="text-muted-foreground">
                {currentDoctor.name.includes('Sushovan')
                  ? "State-of-the-art diagnostic and therapeutic procedures for comprehensive digestive health care."
                  : "Latest treatment protocols and technologies for optimal management of pediatric endocrine conditions."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
              <p className="text-muted-foreground">
                {currentDoctor.name.includes('Sushovan')
                  ? "Tailored treatment plans addressing individual patient needs and conditions for better outcomes."
                  : "Individualized care plans designed specifically for children's unique growth and development needs."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Services;