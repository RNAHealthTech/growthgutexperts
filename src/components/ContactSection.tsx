import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface HomeContactSectionProps {
  data: DoctorProfile;
  variant: 'drmoumita' | 'drsushovan';
}

const formIds = {
  drmoumita: 'xgvoylbn',
  drsushovan: 'xzzdgaqg'
};

const colorScheme = {
  drmoumita: {
    gradientBg: 'bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100',
    accent: 'amber-900',
    light: 'amber-100',
    border: 'border-amber-200',
    hover: 'hover:bg-amber-100',
    shadow: 'shadow-amber-200',
    text: 'text-amber-900',
    button: 'bg-amber-800 hover:bg-amber-700',
    input: 'focus:ring-amber-400'
  },
  drsushovan: {
    gradientBg: 'bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100',
    accent: 'blue-900',
    light: 'blue-100',
    border: 'border-blue-200',
    hover: 'hover:bg-blue-100',
    shadow: 'shadow-blue-200',
    text: 'text-blue-900',
    button: 'bg-blue-800 hover:bg-blue-700',
    input: 'focus:ring-blue-400'
  }
};

const HomeContactSection: React.FC<HomeContactSectionProps> = ({ data, variant }) => {
  const colors = colorScheme[variant];
  const [state, handleSubmit] = useForm(formIds[variant]);
  
  const contactInfo = [
    {
      icon: <Phone className={`w-6 h-6 text-${colors.accent}`} />,
      title: 'Phone',
      content: data.contactDetails.phone,
      link: `tel:${data.contactDetails.phone}`
    },
    {
      icon: <Mail className={`w-6 h-6 text-${colors.accent}`} />,
      title: 'Email',
      content: data.contactDetails.email,
      link: `mailto:${data.contactDetails.email}`
    },
    // {
    //   icon: <MapPin className={`w-6 h-6 text-${colors.accent}`} />,
    //   title: 'Address',
    //   content: data.contactDetails.address
    // },
    // {
    //   icon: <Clock className={`w-6 h-6 text-${colors.accent}`} />,
    //   title: 'Consultation Hours',
    //   content: 'Mon-Sat: 10:00 AM - 5:00 PM'
    // }
  ];

  return (
    <section className={`${colors.gradientBg} py-16 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${colors.text} mb-4`}>
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with Dr. {data.personalDetails.name.split(' ')[1]} or reach out with any questions. 
            We're here to help you with {data.personalDetails.specialty.toLowerCase()} care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl bg-white border ${colors.border} ${colors.shadow} transition-transform duration-300 hover:scale-105`}
                >
                  <div className="flex items-center space-x-4">
                    {info.icon}
                    <div>
                      <h3 className={`text-lg font-semibold ${colors.text}`}>
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-6 rounded-xl bg-white border ${colors.border} ${colors.shadow}`}>
            {state.succeeded ? (
              <div className="text-center py-8">
                <h3 className={`text-xl font-semibold ${colors.text} mb-2`}>
                  Thank you for your message!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${colors.text}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`mt-1 block w-full rounded-md border ${colors.border} shadow-sm p-2 ${colors.input} focus:border-transparent`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${colors.text}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`mt-1 block w-full rounded-md border ${colors.border} shadow-sm p-2 ${colors.input} focus:border-transparent`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium ${colors.text}`}>
                    Phone 
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    required
                    className={`mt-1 block w-full rounded-md border ${colors.border} shadow-sm p-2 ${colors.input} focus:border-transparent`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${colors.text}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`mt-1 block w-full rounded-md border ${colors.border} shadow-sm p-2 ${colors.input} focus:border-transparent`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full ${colors.button} text-white px-6 py-3 rounded-md transition-colors duration-300`}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;