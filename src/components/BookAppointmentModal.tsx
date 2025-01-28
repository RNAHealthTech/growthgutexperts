import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
    const [state, handleSubmit] = useForm('mqaawkpe');
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        whatsapp: '',
        daysAvailable: '',
        timingsAvailable: '',
        therapyMode: '',
        location: '',
        concern: '',
        therapistPreferences: '',
        contactConsent: false
    });

    const therapists = [
        "Rahul Mehta",
        "Dr. Priya Sharma",
        "Dr. Anjali Patel"
    ];

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    useEffect(() => {
        if (state.succeeded) {
            const timer = setTimeout(() => {
                onClose();
                setFormData({
                    name: '',
                    age: '',
                    gender: '',
                    email: '',
                    whatsapp: '',
                    daysAvailable: '',
                    timingsAvailable: '',
                    therapyMode: '',
                    location: '',
                    concern: '',
                    therapistPreferences: '',
                    contactConsent: false
                });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded, onClose]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prevData => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.contactConsent) {
            alert("Please agree to be contacted by our team.");
            return;
        }
        handleSubmit(formData);
    };

    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-teal-200 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center font-fraunces-slab text-teal-800">Connect with Your Therapist</h2>

                        {state.succeeded ? (
                            <p className="text-teal-700 text-center font-work-sans">Thank you for submitting! We'll be in touch soon.</p>
                        ) : (
                            <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-teal-700">Name/Initials</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                                </div>

                                <div>
                                    <label htmlFor="age" className="block text-sm font-medium text-teal-700">Age</label>
                                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                                </div>

                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-teal-700">Gender you identify with</label>
                                    <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                                        placeholder="Please specify your gender identity" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-teal-700">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="whatsapp" className="block text-sm font-medium text-teal-700">WhatsApp Number</label>
                                    <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                                </div>

                                <div>
                                    <label htmlFor="daysAvailable" className="block text-sm font-medium text-teal-700">Days Available</label>
                                    <select id="daysAvailable" name="daysAvailable" value={formData.daysAvailable} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent">
                                        <option value="">Select available days</option>
                                        {daysOfWeek.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="timingsAvailable" className="block text-sm font-medium text-teal-700">Timings Available</label>
                                    <input type="text" id="timingsAvailable" name="timingsAvailable" value={formData.timingsAvailable} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                                        placeholder="Please specify your preferred timings" />
                                </div>

                                <div>
                                    <label htmlFor="therapyMode" className="block text-sm font-medium text-teal-700">Therapy Mode & Location</label>
                                    <input type="text" id="therapyMode" name="therapyMode" value={formData.therapyMode} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                                        placeholder="Online or Offline? If offline, please specify city and area" />
                                </div>

                                <div>
                                    <label htmlFor="concern" className="block text-sm font-medium text-teal-700">Your Concern (200 words max)</label>
                                    <textarea id="concern" name="concern" rows={4} value={formData.concern} onChange={handleChange} required
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                                        maxLength={1200} />
                                </div>

                                <div>
                                    <label htmlFor="therapistPreferences" className="block text-sm font-medium text-teal-700">Therapist Preferences</label>
                                    <textarea id="therapistPreferences" name="therapistPreferences" rows={2} value={formData.therapistPreferences} onChange={handleChange}
                                        className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm p-2 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                                        placeholder="Age group, gender, city, etc." />
                                </div>



                                <div className="flex items-start space-x-2">
                                    <input type="checkbox" id="contactConsent" name="contactConsent" checked={formData.contactConsent} onChange={handleChange} required
                                        className="mt-1 border border-teal-300 rounded shadow-sm focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                                    <label htmlFor="contactConsent" className="block text-sm text-teal-700">
                                        I agree to be contacted by the team for further clarification and with therapist profiles
                                    </label>
                                </div>

                                <div className="flex justify-end space-x-2 pt-4">
                                    <button type="button" onClick={onClose}
                                        className="px-4 py-2 border border-teal-300 rounded-md text-sm font-medium text-teal-700 hover:bg-teal-100 transition-colors duration-300">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </>, document.body
    );
};

export default AppointmentModal;