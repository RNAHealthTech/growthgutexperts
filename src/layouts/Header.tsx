import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Calendar } from "lucide-react";
import { DoctorServices } from "../data/services";
import AppointmentModal from "../components/AppointmentModal";

export type DoctorVariant = 'drmoumita' | 'drsushovan';

interface HeaderProps {
    doctorServices: DoctorServices;
    variant: DoctorVariant; 
}

const WhatsAppIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = "#25D366" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ doctorServices, variant }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const menuItemRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const doctorvariant: DoctorVariant = variant; 

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        { name: "Home", target: "" },
        { name: "About", target: "about" },
        {
            name: "Services",
            target: "services",
            hasSubmenu: true
        },
        { name: "Blogs", target: "blogs" },
        { name: "Contact", target: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Clear timeouts and state when unmounting
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
        setIsHovering(false);
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
    };

    const handleSubmenuToggle = (itemName: string) => {
        setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
    };

    const handleServiceClick = (slug: string, isMobile: boolean) => {
        if (isMobile) {
            setIsMenuOpen(false);
            setActiveSubmenu(null);
        }

        navigate(`/services/${slug}`);
        console.log(`/services/${slug}`);
    };

    const handleMouseEnter = () => {
        // Clear any existing timeout to prevent menu from closing
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        // Set a timeout before closing the menu to give user time to move to submenu
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(false);
        }, 300); // 300ms delay before closing
    };

    const renderServiceSubmenu = (isMobile: boolean) => (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`
                ${isMobile
                    ? 'pl-4 mt-2'
                    : 'absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50'
                }
            `}
            ref={submenuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Individual Service Links */}
            {doctorServices.services.map((service) => (
                <button
                    key={service.slug}
                    onClick={() => handleServiceClick(service.slug, isMobile)}
                    className={`
                        w-full text-left
                        ${isMobile
                            ? 'block py-2 text-gray-600 hover:text-gray-900'
                            : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        }
                    `}
                >
                    {service.title}
                </button>
            ))}
        </motion.div>
    );

    const renderAppointmentButton = () => (
        <div>
            <button
                className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded text-md md:text-lg lg:text-xl flex items-center justify-center space-x-2 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}

            >
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-amber-200" />
                <span className="border-l-2 border-white pl-3 ml-3">
                    Book Appointment
                </span>

            </button>
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                variant={doctorvariant}
            />
        </div>
    );

    const renderNavItems = (isMobile: boolean) => {
        return navItems.map((item) => (
            <div
                key={item.target}
                className={`${isMobile ? 'py-2' : 'relative group px-4'}`}
                ref={item.hasSubmenu ? menuItemRef : undefined}
                onMouseEnter={() => !isMobile && item.hasSubmenu && handleMouseEnter()}
                onMouseLeave={() => !isMobile && item.hasSubmenu && handleMouseLeave()}
            >
                {item.hasSubmenu ? (
                    <>
                        <button
                            onClick={() => handleSubmenuToggle(item.name)}
                            className={`
                                ${isMobile
                                    ? 'w-full text-left flex items-center justify-between'
                                    : `text-lg ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/80'} flex items-center`
                                }
                            `}
                        >
                            <span>{item.name}</span>
                            {isMobile ? (
                                activeSubmenu === item.name ? (
                                    <ChevronDown size={14} />
                                ) : (
                                    <ChevronRight size={14} />
                                )
                            ) : (
                                <ChevronDown size={14} className="ml-1" />
                            )}
                        </button>


                            {((isMobile && activeSubmenu === item.name) || (!isMobile && isHovering)) &&
                                renderServiceSubmenu(isMobile)
                            }
                    </>
                ) : (
                    <Link
                        to={`/${item.target}`}
                        className={`
                            ${isMobile
                                ? 'block text-gray-900 hover:text-gray-600'
                                : `text-lg ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/80'}`
                            }
                        `}
                        onClick={isMobile ? toggleMenu : undefined}
                    >
                        {item.name}
                    </Link>
                )}
            </div>
        ));
    };

    return (
        <header className={`fixed top-0 py-2 md:py-0 left-0 right-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                        {isMenuOpen ? (
                            <X size={24} color={isScrolled ? "black" : "white"} />
                        ) : (
                            <Menu size={24} color={isScrolled ? "black" : "white"} />
                        )}
                    </button>
                    <Link to="/" className="flex items-center">
                        <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
                            {doctorServices.name}
                        </span>
                    </Link>
                    <div className="md:hidden">
                        <a
                            href={`https://wa.me/${doctorServices.contact || ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 bg-[#25D366] rounded-full"
                        >
                            <WhatsAppIcon size={16} color="#ffffff" />
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex justify-center flex-grow">
                    {renderNavItems(false)}
                </div>

                <div className="hidden md:block">
                    {renderAppointmentButton()}
                </div>
            </nav>

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t"
                >
                    <div className="px-4 py-2">
                        {renderNavItems(true)}
                        <div className="mt-4">
                            {renderAppointmentButton()}
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
