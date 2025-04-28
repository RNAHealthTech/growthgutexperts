import React, { useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import AppointmentModal from "../ui/AppointmentMixture";


const AnimatedLetter = ({ letter }: { letter: string }) => (
    <motion.span
        className="inline-block"
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
    >
        {letter}
    </motion.span>
);

export const AnimatedWord = ({ word }: { word: string }) => (
    <motion.span
        className="inline-block"
        variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.05
                }
            }
        }}
    >
        {word.split('').map((letter, index) => (
            <AnimatedLetter key={index} letter={letter} />
        ))}
    </motion.span>
);

const LandingHero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.section
            className="relative min-h-[90vh] bg-gradient-to-br from-blue-900 to-blue-800 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full transform rotate-45" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full transform -rotate-45" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto pt-20 lg:pt-32 pb-16">


                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Content Section */}
                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-left"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}>
                        <motion.div
                            className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Specialized Medical Care
                        </motion.div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            <motion.span
                                className="block text-yellow-400 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Growth & Gut Experts
                            </motion.span>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="text-white/90 text-2xl md:text-3xl lg:text-4xl"
                            >
                                <AnimatedWord word="Precision" />
                                {' '}
                                <AnimatedWord word="Medicine" />
                                {' and '}
                                <AnimatedWord word="Comprehensive" />
                                {' '}
                                <AnimatedWord word="Care" />
                            </motion.div>
                        </h1>

                        <motion.p
                            className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Specialized medical care in Pediatric Endocrinology and Hepatology & Gastroenterology delivering individualized treatment plans tailored to the unique needs of you and your family.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center  gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                onClick={()=>setIsModalOpen(true)}
                                className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Book Appointment
                            </button>
                            <button
                                onClick={()=> {
                                    const section =document.getElementById('expertise-section');
                                    if (section){
                                        section.scrollIntoView( {  behavior: 'smooth' })
                                    }
                                }}
                                className="px-8 py-3 bg-white/90 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Explore More
                            </button>
                        </motion.div>
                    </motion.div>


                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Parallax translateY={[-20, 20]}>
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <motion.div
                                    className="absolute top-0 left-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 p-1 rounded-2xl">
                                        <img
                                            src="/images/bg.jpg"
                                            alt="Pediatric Care"
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-0 right-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 p-1 rounded-2xl">
                                        <img
                                            src="/images/logo.jpeg"
                                            alt="Hepatology Care"
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.section>
    );
};

export default LandingHero;