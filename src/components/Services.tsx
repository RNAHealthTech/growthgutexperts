import React from "react";
import { DoctorProfile } from "../data/doctor";
import { doctorsServices, DoctorServices } from "../data/services";
import LandingSection from "../ui/LandingSection";
import ServiceCard from "../components/ServiceCard";

interface ServicesProps {
  doctorData: DoctorProfile;
}

const Services: React.FC<ServicesProps> = ({ doctorData }) => {
  // Find the correct doctor's services based on the doctor's name
  const name = doctorData.personalDetails.name.toLowerCase().split(' ')
  
  const currentDoctor: DoctorServices | undefined = doctorsServices.find(
    doctor => doctor.sub === `dr${name[1]}`
  );
  console.log('Current Doctor : ',currentDoctor);

  if (!currentDoctor) return null;

  return (
    <main className="flex-grow">
      <LandingSection
        label="Our Services"
        title={`Expert ${currentDoctor.specialty}`}
        description={currentDoctor.overview}
        buttonText="Schedule Consultation"
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
  );
};

export default Services;