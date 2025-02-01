import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

interface CTAProps {
  variant: 'drmoumita' | 'drsushovan';
  title?: string;
  description?: string;
  className?: string;
}

const ctaConfigs = {
  drmoumita: {
    bgColor: 'bg-gradient-to-br from-amber-900 to-amber-800',
    accentColor: 'white',
    textColor: 'amber-900',
    hoverAccent: 'hover:bg-amber-700'
  },
  drsushovan: {
    bgColor: 'bg-gradient-to-br from-blue-900 to-blue-800',
    accentColor: 'white',
    textColor: 'blue-900',
    hoverAccent: 'hover:bg-blue-700'
  }
};

const CTA: React.FC<CTAProps> = ({
  variant,
  title = "Schedule Your Consultation Today",
  description = "Take the first step towards better health. Book your appointment now and receive personalized care from our experienced specialists.",
  className = ""
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const config = ctaConfigs[variant];

  return (
    <section className={`relative ${className}`}>
      <div className={`${config.bgColor} rounded-3xl overflow-hidden`}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full transform rotate-45" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full transform -rotate-45" />
        </div>

        <div className="relative z-10 px-6 py-16 sm:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-200 mb-8"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className={`px-8 py-3 bg-${config.accentColor} text-${config.textColor} rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center`}
              >
                Book Appointment
                <Calendar className="ml-2" size={20} />
              </motion.button>


            </motion.div>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={variant}
      />
    </section>
  );
};

// Pre-configured components for each doctor
export const DrMoumitaCTA: React.FC<Omit<CTAProps, 'variant'>> = (props) => (
  <CTA variant="drmoumita" {...props} />
);

export const DrSushovanCTA: React.FC<Omit<CTAProps, 'variant'>> = (props) => (
  <CTA variant="drsushovan" {...props} />
);

export default CTA;