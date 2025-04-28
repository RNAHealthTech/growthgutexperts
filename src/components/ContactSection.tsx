import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

interface HomeContactSectionProps {
  data: DoctorProfile;
  variant: 'drmoumita' | 'drsushovan';
}

const formIds = {
  drmoumita: 'xgvoylbn',
  drsushovan: 'xzzdgaqg'
};

const doctorWhatsAppNumbers = {
  drmoumita: '918789567806',
  drsushovan: '919474866692'
};

const colorScheme = {
  drmoumita: {
    gradientBg: 'bg-gradient-to-br from-amber-50 via-amber-100/30 to-amber-50',
    accent: 'amber-900',
    light: 'amber-100',
    border: 'border-amber-200',
    hover: 'hover:bg-amber-50',
    shadow: 'shadow-amber-200/50',
    text: 'text-amber-900',
    button: 'bg-amber-800 hover:bg-amber-700',
    input: 'focus:ring-amber-400',
    cardBg: 'bg-white/80'
  },
  drsushovan: {
    gradientBg: 'bg-gradient-to-br from-blue-50 via-blue-100/30 to-blue-50',
    accent: 'blue-900',
    light: 'blue-100',
    border: 'border-blue-200',
    hover: 'hover:bg-blue-50',
    shadow: 'shadow-blue-200/50',
    text: 'text-blue-900',
    button: 'bg-blue-800 hover:bg-blue-700',
    input: 'focus:ring-blue-400',
    cardBg: 'bg-white/80'
  }
};

const HomeContactSection: React.FC<HomeContactSectionProps> = ({ data, variant }) => {
  const colors = colorScheme[variant];
  const [state, handleSubmit] = useForm(formIds[variant]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    appointmentType: '',
    hospitalLocation: ''
  });
  const [selectedAppointmentType, setSelectedAppointmentType] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAppointmentTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setSelectedAppointmentType(value);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    sendWhatsAppMessage();
  };

  const sendWhatsAppMessage = () => {
    const message = `New Contact Request:
    Appointment Type: ${formData.appointmentType}
    ${formData.appointmentType === 'offline' ? `Hospital: ${formData.hospitalLocation}` : ''}
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Message: ${formData.message}`

    const whatsappNumber = doctorWhatsAppNumbers[variant];
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp className={`w-5 h-5 text-${colors.accent}`} />,
      title: 'Phone',
      content: data.contactDetails.phone,
      link: `tel:${data.contactDetails.phone}`
    },
    {
      icon: <Mail className={`w-5 h-5 text-${colors.accent}`} />,
      title: 'Email',
      content: data.contactDetails.email,
      link: `mailto:${data.contactDetails.email}`
    },
    {
      icon: <Clock className={`w-5 h-5 text-${colors.accent}`} />,
      title: 'Online Consultation',
      content: data.onlineTiming
    },
    {
      icon: <Calendar className={`w-5 h-5 text-${colors.accent}`} />,
      title: 'Available Days',
      content: data.days
    }
  ];

  // Find the selected hospital's schedules
  const selectedHospitalSchedules = formData.hospitalLocation 
    ? data.offline.find(loc => loc.hospital === formData.hospitalLocation)?.schedules || []
    : [];

  return (
    <section className={`${colors.gradientBg} py-16 lg:py-24 min-h-screen`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${colors.text} mb-4`}>
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with Dr. {data.personalDetails.name.split(' ')[1]} or reach out with any questions.
            We're here to help you with specialized {data.personalDetails.specialty.toLowerCase()} care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information & Locations */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className={`p-8 rounded-2xl ${colors.cardBg} backdrop-blur-sm border ${colors.border} ${colors.shadow}`}>
              <h3 className={`text-xl font-semibold ${colors.text} mb-6`}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${colors.hover}`}>
                    <div className={`p-2 rounded-full bg-${colors.light}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className={`text-sm font-medium ${colors.text}`}>
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:underline">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline Consultation Locations Card */}
            <div className={`p-8 rounded-2xl ${colors.cardBg} backdrop-blur-sm border ${colors.border} ${colors.shadow}`}>
              <h3 className={`text-xl font-semibold ${colors.text} mb-6`}>Offline Consultation Locations</h3>
              <div className="space-y-6">
                {data.offline.map((location, index) => (
                  <div key={index} className={`p-4 rounded-lg transition-all duration-300 ${colors.hover} border ${colors.border}`}>
                    <h4 className={`font-medium ${colors.text} mb-3`}>
                      {location.hospital}
                    </h4>
                    <div className="space-y-2">
                      {location.schedules.map((schedule, scheduleIndex) => (
                        <div key={scheduleIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <Calendar className={`w-4 h-4 text-${colors.accent}`} />
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">{schedule.day}:</span>
                            <span className="text-gray-600 ml-2">{schedule.timing}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className={`p-8 rounded-2xl ${colors.cardBg} backdrop-blur-sm border ${colors.border} ${colors.shadow} h-full`}>
              <h3 className={`text-xl font-semibold ${colors.text} mb-6`}>Book Appointment</h3>
              {state.succeeded ? (
                <div className="text-center py-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${colors.light} flex items-center justify-center`}>
                    <svg className={`w-8 h-8 text-${colors.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold ${colors.text} mb-2`}>
                    Thank you for your message!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="mb-6">
                    <label className={`block text-sm font-medium ${colors.text} mb-2`}>Appointment Type</label>
                    <div className="flex flex-wrap gap-6">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="appointmentType"
                          value="offline"
                          onChange={handleAppointmentTypeChange}
                          className={`form-radio h-4 w-4 text-${colors.accent} focus:ring-${colors.accent}`}
                        />
                        <span className="ml-2 text-gray-700">Offline Appointment</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="appointmentType"
                          value="online"
                          onChange={handleAppointmentTypeChange}
                          className={`form-radio h-4 w-4 text-${colors.accent} focus:ring-${colors.accent}`}
                        />
                        <span className="ml-2 text-gray-700">Online Appointment</span>
                      </label>
                    </div>
                  </div>

                  {selectedAppointmentType === 'offline' && (
                    <div className="mb-4">
                      <label htmlFor="hospitalLocation" className={`block text-sm font-medium ${colors.text} mb-1`}>
                        Select Hospital
                      </label>
                      <select
                        id="hospitalLocation"
                        name="hospitalLocation"
                        value={formData.hospitalLocation}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border ${colors.border} shadow-sm p-3 ${colors.input} focus:border-transparent bg-white/50`}
                        required={selectedAppointmentType === 'offline'}
                      >
                        <option value="">Select a hospital</option>
                        {data.offline.map((location, index) => (
                          <option key={index} value={location.hospital}>
                            {location.hospital}
                          </option>
                        ))}
                      </select>
                      {formData.hospitalLocation && (
                        <div className="mt-3 p-4 rounded-lg bg-gray-50 text-sm">
                          <h5 className="font-medium text-gray-700 mb-2">Schedule Information:</h5>
                          <div className="space-y-2">
                            {selectedHospitalSchedules.map((schedule, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <Calendar className={`w-4 h-4 text-${colors.accent} mt-1`} />
                                <div>
                                  <span className="font-medium">{schedule.day}:</span>{" "}
                                  <span className="text-gray-600">{schedule.timing}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium ${colors.text} mb-1`}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`block w-full rounded-lg border ${colors.border} shadow-sm p-3 ${colors.input} focus:border-transparent bg-white/50`}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={`block text-sm font-medium ${colors.text} mb-1`}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`block w-full rounded-lg border ${colors.border} shadow-sm p-3 ${colors.input} focus:border-transparent bg-white/50`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${colors.text} mb-1`}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`block w-full rounded-lg border ${colors.border} shadow-sm p-3 ${colors.input} focus:border-transparent bg-white/50`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium ${colors.text} mb-1`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`block w-full rounded-lg border ${colors.border} shadow-sm p-3 ${colors.input} focus:border-transparent bg-white/50`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full ${colors.button} text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium`}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;