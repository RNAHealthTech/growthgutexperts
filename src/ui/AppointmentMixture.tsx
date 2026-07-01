import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';

interface HospitalSchedule {
  day: string;
  timing: string;
}

interface Hospital {
  hospital: string;
  schedules: HospitalSchedule[];
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const variantStyles = {
  drmoumita: {
    gradient: 'from-amber-50 to-amber-100',
    button: 'bg-amber-800 hover:bg-amber-700',
    ring: 'focus:ring-amber-400',
    text: 'text-amber-900',
    border: 'border-amber-300'
  },
  drsushovan: {
    gradient: 'from-blue-50 to-blue-100',
    button: 'bg-blue-800 hover:bg-blue-700',
    ring: 'focus:ring-blue-400',
    text: 'text-blue-900',
    border: 'border-blue-300'
  }
};

const doctorFormIds = {
  drmoumita: 'xgvoylbn',
  drsushovan: 'xzzdgaqg'
};

const doctorWhatsAppNumbers = {
  drmoumita: '918789567806',
  drsushovan: '919474866692'
};

const doctorHospitals = {
  drsushovan: {
    offline: [
      {
        hospital: "Sanjeevan Hospital 24, Ansari Road, Darya Ganj, New Delhi, Delhi 110002",
        schedules: [
          { day: "Monday to Saturday", timing: "9:00 AM - 10:30 AM" }
        ]
      },
      {
        hospital: "KAILASH HOSPITAL & HEART INSTITUTE, NOIDA SEC-27",
        schedules: [
          { day: "Monday to Saturday", timing: "2:00 PM - 4:00 PM" },
          { day: "Monday to Saturday", timing: "5:00 PM - 8:00 PM" }
        ]
      }
    ]
  },
  drmoumita: {
    offline: [
      {
        hospital: "Fortis C-DOC, Greater Kailash, New Delhi",
        schedules: [
          { day: "Monday", timing: "10 AM - 12 PM" },
          { day: "Wed", timing: "10 AM - 12 PM" },
          { day: "Friday", timing: "10 AM - 12 PM" }
        ]
      },
      {
        hospital: "Sitaram Bhartia Institute of Science and Research, Qutub Institutional area, New Delhi",
        schedules: [
          { day: "Tuesday", timing: "10 PM -12 PM" },
          { day: "Friday", timing: "4 PM - 5 PM" }
        ]
      },
      {
        hospital: "Holy Family Hospital, Okhla, New Delhi",
        schedules: [
          { day: "Mon, Wed", timing: "2 PM - 3:30 PM" },
          { day: "Fri", timing: "1:30 PM - 3:30 PM" }
        ]
      },
      {
        hospital: "CK Bilra, West Punjabi Bagh, Delhi",
        schedules: [
          { day: "Tues, Thurs", timing: "2 PM - 4 PM" }
        ]
      },
      {
        hospital: "Sanjeevan Hospital, Daryaganj, Delhi",
        schedules: [
          { day: "Wed", timing: "5 PM - 6:30 PM" }
        ]
      }
    ]
  }
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<'drmoumita' | 'drsushovan' | ''>('');
  const [appointmentType, setAppointmentType] = useState<'Online Appointment' | 'Offline Appointment' | ''>('');
  const [state, handleSubmit] = useForm(selectedDoctor ? doctorFormIds[selectedDoctor] : 'xzzdgaqg');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appointmentType: '',
    phone: '',
    message: '',
    doctorName: '',
    hospital: ''
  });

  // Get style based on selected doctor
  const styles = selectedDoctor ? variantStyles[selectedDoctor] : {
    gradient: 'from-yellow-50 to-yellow-100',
    button: 'bg-yellow-800 hover:bg-yellow-700',
    ring: 'focus:ring-yellow-400',
    text: 'text-zinc-800',
    border: 'border-zinc-300'
  };

  // Get available hospitals based on selected doctor
  const hospitals = selectedDoctor && appointmentType === 'Offline Appointment'
    ? doctorHospitals[selectedDoctor].offline
    : [];

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          appointmentType: '',
          phone: '',
          message: '',
          doctorName: '',
          hospital: ''
        });
        setSelectedDoctor('');
        setAppointmentType('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  // Reset hospital when doctor or appointment type changes
  useEffect(() => {
    if (selectedDoctor && appointmentType === 'Offline Appointment') {
      // Set default hospital when doctor and offline appointment are selected
      const defaultHospital = doctorHospitals[selectedDoctor].offline[0]?.hospital || '';
      setFormData(prev => ({
        ...prev,
        hospital: defaultHospital
      }));
    } else {
      // Clear hospital when not in offline mode
      setFormData(prev => ({
        ...prev,
        hospital: ''
      }));
    }
  }, [selectedDoctor, appointmentType]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'doctorName') {
      if (value === 'Dr. Moumita Saha') {
        setSelectedDoctor('drmoumita');
      } else if (value === 'Dr. Sushovan Baidya') {
        setSelectedDoctor('drsushovan');
      }
    }

    if (name === 'appointmentType') {
      setAppointmentType(value as 'Online Appointment' | 'Offline Appointment');
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleHospitalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      hospital: value
    }));
  };

  const renderHospitalSchedules = () => {
    if (!selectedDoctor || appointmentType !== 'Offline Appointment') return null;

    const selectedHospital = doctorHospitals[selectedDoctor].offline.find(h => h.hospital === formData.hospital);
    
    if (!selectedHospital) return null;

    return (
      <div className="mt-4 p-4 rounded-md bg-white bg-opacity-60">
        <h3 className={`text-lg font-medium mb-2 ${styles.text}`}>Available Timings:</h3>
        <ul className="space-y-1">
          {selectedHospital.schedules.map((schedule, index) => (
            <li key={index} className={`${styles.text} flex`}>
              <span className="font-medium min-w-24">{schedule.day}:</span>
              <span>{schedule.timing}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    sendWhatsAppMessage();
  };

  const sendWhatsAppMessage = () => {
    if (!selectedDoctor) return;

    // Include hospital information if it's an offline appointment
    const hospitalInfo = appointmentType === 'Offline Appointment' ? `\nHospital: ${formData.hospital}` : '';
    
    const message = `New Appointment Request:
    Doctor: ${formData.doctorName}
    Appointment Type: ${formData.appointmentType}${hospitalInfo}
    Patient Name: ${formData.name}
    Phone: ${formData.phone}
    Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = doctorWhatsAppNumbers[selectedDoctor];
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className={`bg-gradient-to-br ${selectedDoctor ? styles.gradient : 'from-yellow-50 to-yellow-100'} rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 text-center font-fraunces-slab ${styles.text}`}>
          Book Appointment
        </h2>

        {state.succeeded ? (
          <p className="text-zinc-700 text-center font-work-sans">
            Thank you for submitting! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
            <input type="hidden" name="doctor" value={formData.doctorName} />

            <motion.div className='mb-8'>
              <label className={`block text-md font-medium ${styles.text} mb-2`}>Choose Doctor</label>
              <motion.div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="doctorName"
                    value="Dr. Moumita Saha"
                    checked={formData.doctorName === "Dr. Moumita Saha"}
                    onChange={handleChange}
                    className={`form-radio focus:ring-zinc-700 h-4 w-4`}
                    required
                  />
                  <span className={`ml-2 ${styles.text}`}>Dr. Moumita Saha</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="doctorName"
                    value="Dr. Sushovan Baidya"
                    checked={formData.doctorName === "Dr. Sushovan Baidya"}
                    onChange={handleChange}
                    className={`form-radio focus:ring-zinc-700 h-4 w-4`}
                    required
                  />
                  <span className={`ml-2 ${styles.text}`}>Dr. Sushovan Baidya</span>
                </label>
              </motion.div>
            </motion.div>

            <motion.div className='mb-8'>
              <label className={`block text-md font-medium ${styles.text} mb-2`}>Appointment Type</label>
              <motion.div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Offline Appointment"
                    checked={formData.appointmentType === "Offline Appointment"}
                    onChange={handleChange}
                    className={`form-radio focus:ring-zinc-700 h-4 w-4`}
                  />
                  <span className={`ml-2 ${styles.text}`}>Offline Appointment</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online Appointment"
                    checked={formData.appointmentType === "Online Appointment"}
                    onChange={handleChange}
                    className={`form-radio focus:ring-zinc-700 h-4 w-4`}
                  />
                  <span className={`ml-2 ${styles.text}`}>Online Appointment</span>
                </label>
              </motion.div>
            </motion.div>

            {selectedDoctor && appointmentType === 'Offline Appointment' && (
              <div className="mb-4">
                <label htmlFor="hospital" className={`block text-sm font-medium ${styles.text}`}>
                  Select Hospital
                </label>
                <select
                  id="hospital"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleHospitalChange}
                  required
                  className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} ${styles.ring} focus:border-transparent`}
                >
                  {hospitals.map((hospital, index) => (
                    <option key={index} value={hospital.hospital}>
                      {hospital.hospital}
                    </option>
                  ))}
                </select>
                {renderHospitalSchedules()}
              </div>
            )}

            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${styles.text}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} focus:border-transparent`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${styles.text}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} focus:border-transparent`}
              />
            </div>

            <div>
              <label htmlFor="phone" className={`block text-sm font-medium ${styles.text}`}>
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} focus:border-transparent`}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${styles.text}`}>
                Message / Description (200 words max)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} focus:border-transparent`}
                maxLength={1200}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 border ${styles.border} rounded-md text-sm font-medium ${styles.text} hover:bg-gray-100 transition-colors duration-300`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 border border-transparent ${styles.button} rounded-md shadow-sm text-sm font-medium text-white transition-colors duration-300`}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(
    <>
      {isOpen && modalContent}
    </>,
    document.body
  );
};

export default AppointmentModal;