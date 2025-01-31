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
        email: '',
        whatsapp: '',
        concern: ''
    });

    useEffect(() => {
        if (state.succeeded) {
            const timer = setTimeout(() => {
                onClose();
                setFormData({
                    name: '',
                    age: '',
                    email: '',
                    whatsapp: '',
                    concern: ''
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
        handleSubmit(formData);
    };

    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center font-fraunces-slab text-zinc-800">Connect with Doctor</h2>

                        {state.succeeded ? (
                            <p className="text-zinc-700 text-center font-work-sans">Thank you for submitting! We'll be in touch soon.</p>
                        ) : (
                            <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                        className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-zinc-400 focus:border-transparent" />
                                </div>

                                <div>
                                    <label htmlFor="age" className="block text-sm font-medium text-zinc-700">Age</label>
                                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required
                                        className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-zinc-400 focus:border-transparent" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-zinc-400 focus:border-transparent" />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-700">WhatsApp Number</label>
                                    <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required
                                        className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-zinc-400 focus:border-transparent" />
                                </div>





                                <div>
                                    <label htmlFor="concern" className="block text-sm font-medium text-zinc-700">Message / Description (200 words max)</label>
                                    <textarea id="concern" name="concern" rows={4} value={formData.concern} onChange={handleChange} required
                                        className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-zinc-400 focus:border-transparent"
                                        maxLength={1200} />
                                </div>

                                <div className="flex justify-end space-x-2 pt-4">
                                    <button type="button" onClick={onClose}
                                        className="px-4 py-2 border border-zinc-300 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors duration-300">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 transition-colors duration-300">
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