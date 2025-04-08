import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    variant: 'drmoumita' | 'drsushovan';
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

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, variant }) => {
    const styles = variantStyles[variant];
    const [state, handleSubmit] = useForm(doctorFormIds[variant]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        appointmentType: '', 
        phone: '',
        message: '',
        doctor: variant === 'drmoumita' ? 'Dr. Moumita' : 'Dr. Sushovan'
    });

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
                    doctor: variant === 'drmoumita' ? 'Dr. Moumita' : 'Dr. Sushovan'
                });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded, onClose, variant]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(formData);
        sendWhatsAppMessage();
    };

    const sendWhatsAppMessage = () => {
        const message = `New Appointment Request:
        Appointment Type: ${formData.appointmentType}
        Patient Name: ${formData.name}
        Phone: ${formData.phone}
        Message: ${formData.message}`;

        const whatsappNumber = doctorWhatsAppNumbers[variant];
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    const modalContent = (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className={`bg-gradient-to-br ${styles.gradient} rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg`}
            >
                <h2 className={`text-2xl font-bold mb-4 text-center font-fraunces-slab ${styles.text}`}>
                    Book Appointment with {variant === 'drmoumita' ? 'Dr. Moumita' : 'Dr. Sushovan'}
                </h2>

                {state.succeeded ? (
                    <p className="text-zinc-700 text-center font-work-sans">
                        Thank you for submitting! We'll be in touch soon.
                    </p>
                ) : (
                    <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
                        <input type="hidden" name="doctor" value={formData.doctor} />
                        <motion.div className='mb-8'>
                            <label className="block text-md font-medium text-oxfored-blue mb-2">Appointment Type</label>
                            <motion.div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="appointmentType"
                                        value={formData.appointmentType}
                                        onChange={handleChange}
                                        className="form-radio text-black focus:ring-zinc-700 h-4 w-4"
                                    />
                                    <span className="ml-2 text-oxford-blue">Offline Appointment</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="appointmentType"
                                        value={formData.appointmentType}
                                        onChange={handleChange}
                                        className="form-radio text-black focus:ring-zinc-700 h-4 w-4"
                                    />
                                    <span className="ml-2 text-oxford-blue">Online Appointment</span>
                                </label>
                            </motion.div>
                        </motion.div>
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
                                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} ${styles.ring} focus:border-transparent`}
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
                                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} ${styles.ring} focus:border-transparent`}
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
                                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} ${styles.ring} focus:border-transparent`}
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
                                className={`mt-1 block w-full border ${styles.border} rounded-md shadow-sm p-2 bg-white ${styles.text} ${styles.ring} focus:border-transparent`}
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
                                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${styles.button} transition-colors duration-300`}
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