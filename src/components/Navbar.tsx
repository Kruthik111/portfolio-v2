import { useEffect, useState } from "react";

const NavElements = ({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) => {
    const navItems: { href: string; label: string }[] = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-transparent py-4 md:py-0 px-4 md:px-0">
                {navItems.map((item) => (
                    <li key={item.href} className="text-2xl md:text-lg font-semibold w-full md:w-auto text-center md:text-left">
                        <a href={item.href} className="text-stone-100 block py-4 md:py-0 relative group">
                            <span className="relative">
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-100 group-hover:w-full transition-all duration-300 md:hidden"></span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-100 group-hover:w-full transition-all duration-300 hidden md:block"></span>
                            </span>
                        </a>                    </li>
                ))}
            </ul>
        </nav>
    );
};

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div
                className={`mx-auto block py-4 px-4 md:px-20 sticky transition-all duration-500 ease-in-out shadow-2xs z-20  backdrop-blur-md bg-black/20 ${
                    isSticky ? "top-0 w-screen" : "top-8 md:top-10 w-[90dvw] rounded-xl"
                }`}
            >
                <div className="flex justify-between items-center relative">
                    <h2 className="font-extrabold text-2xl md:text-3xl text-stone-100">
                        Kruthik S
                    </h2>
                    
                    {/* Mobile hamburger menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-30"
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`block w-6 h-0.5 bg-stone-100 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-stone-100 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-stone-100 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:block">
                        <NavElements isMobileMenuOpen={false} />
                    </div>
                </div>
            </div>
            
            {/* Mobile navigation overlay - moved outside navbar container */}
            <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300 z-10 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full pt-64">
                    <NavElements isMobileMenuOpen={isMobileMenuOpen} />
                </div>
            </div>
        </>
    );
};

export default Navbar;