import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HiX, HiChevronDown } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../assets/BSH-Logo.png';
import whiteLogo from '../assets/White-Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    {
      name: 'SERVICES',
      href: '/services',
      children: [
        { name: 'Graphic Designing Solutions', href: '/services/graphic-designing' },
        { name: 'E-Commerce Store Creation', href: '/services/ecommerce' },
        { name: 'Coding Base Website Development', href: '/services/web-development' },
        { name: 'WordPress Website Development', href: '/services/wordpress' },
        { name: 'Social Media Marketing', href: '/services/social-media' },
      ],
    },
    { name: 'OUR PROJECTS', href: '/projects' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact-us' },
  ];

  const isActive = (href) => {
    if (!href) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) setServicesOpen(false);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white lg:bg-white/5 lg:backdrop-blur-md lg:border-b lg:border-white/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <Link to="/" className="flex items-center mt-3 lg:mt-4">
            <img
              src={logo}
              alt="Brain Software House"
              className="h-20 w-auto object-contain lg:hidden"
            />
            <img
              src={scrolled ? logo : whiteLogo}
              alt="Brain Software House"
              className="hidden lg:block h-32 w-auto object-contain transition-opacity duration-300"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.children ? (
                  <>
                    <Link
                      to={link.href}
                      className={`relative flex items-center gap-1.5 py-2 text-[14px] font-bold tracking-wider transition-colors duration-200 ${
                        scrolled
                          ? isActive(link.href)
                            ? 'text-[#2563EB]'
                            : 'text-gray-800 hover:text-[#2563EB]'
                          : 'text-white hover:text-[#38BDF8]'
                      }`}
                    >
                      {link.name}
                      <HiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                      <span
                        className={`absolute left-0 -bottom-0.5 h-[3px] rounded-full transition-all duration-300 ${
                          scrolled ? 'bg-[#2563EB]' : 'bg-[#38BDF8]'
                        } ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      ></span>
                    </Link>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-[#0F1E4A]/10 p-2 min-w-[260px] relative">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45"></div>

                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 text-[14px] font-medium text-gray-700 rounded-xl hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`relative py-2 text-[14px] font-bold tracking-wider transition-colors duration-200 ${
                      scrolled
                        ? isActive(link.href)
                          ? 'text-[#2563EB]'
                          : 'text-gray-800 hover:text-[#2563EB]'
                        : 'text-white hover:text-[#38BDF8]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[3px] rounded-full transition-all duration-300 ${
                        scrolled ? 'bg-[#2563EB]' : 'bg-[#38BDF8]'
                      } ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/contact-us"
            className="hidden lg:inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#2563EB]/30 hover:bg-[#0F1E4A] transition-all duration-300"
          >
            FREE QUOTE
            <FaArrowRight className="text-xs" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden group flex flex-col items-end justify-center gap-1.5 w-10 h-10 p-1"
            aria-label="Toggle menu"
          >
            <span className="w-7 h-0.5 bg-[#0F1E4A] rounded-full transition-all duration-300 group-hover:bg-[#2563EB]"></span>
            <span className="w-5 h-0.5 bg-[#0F1E4A] rounded-full transition-all duration-300 group-hover:w-7 group-hover:bg-[#2563EB]"></span>
            <span className="w-7 h-0.5 bg-[#0F1E4A] rounded-full transition-all duration-300 group-hover:bg-[#2563EB]"></span>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 z-60 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-gray-100 shrink-0">
            <img src={logo} alt="Brain Software House" className="h-20 w-auto object-contain" />

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-[#0F1E4A] p-1.5 rounded-lg hover:text-[#2563EB] hover:bg-gray-100 transition-all duration-200"
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          <ul className="p-5 flex flex-col gap-1.5 flex-1 overflow-y-auto">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <li key={link.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-[14px] font-bold tracking-wider text-gray-800 rounded-xl hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all duration-300"
                    >
                      <span>{link.name}</span>
                      <HiChevronDown
                        className={`text-lg transition-transform duration-300 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen ? 'max-h-96 mt-1' : 'max-h-0'
                      }`}
                    >
                      <div className="bg-gray-50 rounded-xl p-2 space-y-1 ml-2">
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2.5 text-[13px] text-gray-700 rounded-lg hover:bg-white hover:text-[#2563EB] transition-all duration-200"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </li>
                );
              }

              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3.5 text-[14px] font-bold tracking-wider text-gray-800 rounded-xl hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            <li className="pt-4">
              <Link
                to="/contact-us"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#2563EB] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#0F1E4A] transition-all duration-300"
              >
                FREE QUOTE
                <FaArrowRight className="text-xs" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-50 lg:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;