import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HiX, HiChevronDown } from 'react-icons/hi';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

import logo from '../assets/BSH-Logo.png';
import whiteLogo from '../assets/White-Logo.png';

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

const socials = [
  { icon: <FaFacebookF />, href: 'https://facebook.com/', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/923004506850', label: 'WhatsApp' },
];

const ContactStrip = () => (
  <div className="hidden lg:block bg-[#0F1E4A] text-white text-xs sm:text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
        <span className="text-gray-200">
          Opening Hours: Mon - Sat : 9:00 am - 6:00 pm
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-300">Follow Us:</span>
        <div className="flex items-center gap-2">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] transition-all duration-300 hover:scale-110"
            >
              <span className="text-[11px]">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const InfoStrip = () => (
  <div className="hidden lg:block bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="flex items-center gap-3 justify-start">
          <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#2563EB] text-2xl shrink-0">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
              Mail Us Today
            </p>
            <p className="text-base font-semibold text-[#0F1E4A]">
              info@brainsoftwarehouse.com
            </p>
          </div>
        </div>

        <div className="text-center">
          <img
            src={logo}
            alt="Brain Software House"
            className="h-32 w-auto mx-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-3 justify-end">
          <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#2563EB] text-2xl shrink-0">
            <FaMapMarkerAlt />
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
              Company Location
            </p>
            <p className="text-base font-semibold text-[#0F1E4A]">
              Bahawalpur, Punjab, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MainNav = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (!href) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

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
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-20 lg:h-16 transition-all duration-500 lg:relative ${
            !scrolled ? 'lg:justify-center' : ''
          }`}
        >
          <Link
            to="/"
            className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:hidden"
          >
            <img
              src={logo}
              alt="Brain Software House"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {scrolled && (
            <Link to="/" className="hidden lg:flex items-center">
              <img
                src={whiteLogo}
                alt="Brain Software House"
                className="h-16 w-auto object-contain"
              />
            </Link>
          )}

          <ul
            className={`hidden lg:flex items-center transition-all duration-500 ${
              scrolled
                ? 'gap-8 bg-transparent rounded-none translate-y-0'
                : 'gap-0 bg-[#0F1E4A] rounded-md shadow-2xl translate-y-[-45%]'
            }`}
          >
            {!scrolled && (
              <li>
                <Link
                  to="/"
                  className={`flex items-center justify-center w-14 h-16 rounded-l-md transition-colors ${
                    isActive('/')
                      ? 'bg-[#38BDF8] text-[#0F1E4A]'
                      : 'text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A]'
                  }`}
                >
                  <FaHome className="text-lg" />
                </Link>
              </li>
            )}

            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.children ? (
                  <>
                    <Link
                      to={link.href}
                      className={`relative flex items-center gap-1.5 transition-colors ${
                        scrolled
                          ? `text-[13px] font-bold tracking-wider ${
                              isActive(link.href)
                                ? 'text-[#38BDF8]'
                                : 'text-white hover:text-[#38BDF8]'
                            }`
                          : `px-5 h-16 text-[13px] font-bold tracking-wider ${
                              isActive(link.href)
                                ? 'bg-[#38BDF8] text-[#0F1E4A]'
                                : 'text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A]'
                            }`
                      }`}
                    >
                      {link.name}
                      <HiChevronDown className="text-sm" />
                    </Link>

                    <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-gray-100 rounded-lg shadow-2xl shadow-[#0F1E4A]/10 p-2 min-w-240px">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2.5 text-[13px] font-medium text-gray-700 rounded-lg hover:bg-[#38BDF8]/10 hover:text-[#2563EB] transition-all duration-200"
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
                    className={`flex items-center transition-colors ${
                      scrolled
                        ? `text-[13px] font-bold tracking-wider ${
                            isActive(link.href)
                              ? 'text-[#38BDF8]'
                              : 'text-white hover:text-[#38BDF8]'
                          }`
                        : `px-5 h-16 text-[13px] font-bold tracking-wider ${
                            isActive(link.href)
                              ? 'bg-[#38BDF8] text-[#0F1E4A]'
                              : 'text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A]'
                          }`
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            {!scrolled && (
              <li>
                <Link
                  to="/contact-us"
                  className="flex items-center gap-2 bg-[#38BDF8] text-[#0F1E4A] px-6 h-16 rounded-r-md font-bold text-[13px] tracking-wider hover:bg-white transition-colors"
                >
                  <FaPhoneAlt className="text-sm" />
                  0300-4506850
                </Link>
              </li>
            )}
          </ul>

          {scrolled && (
            <Link
              to="/contact-us"
              className="hidden lg:inline-flex items-center gap-2 bg-[#38BDF8] text-[#0F1E4A] px-5 py-2.5 rounded-md font-bold text-[13px] tracking-wider hover:bg-white transition-colors"
            >
              <FaPhoneAlt className="text-xs" />
              0300-4506850
            </Link>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#0F1E4A]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <span className="w-8 h-0.5 rounded-full bg-[#0F1E4A]"></span>
                <span className="w-6 h-0.5 rounded-full bg-[#0F1E4A]"></span>
                <span className="w-8 h-0.5 rounded-full bg-[#0F1E4A]"></span>
              </div>
            )}
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
              className="text-2xl text-[#0F1E4A] p-1.5 rounded-lg hover:text-[#2563EB] hover:bg-gray-100"
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
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-[14px] font-bold tracking-wider text-gray-800 rounded-xl hover:bg-[#38BDF8]/10 hover:text-[#2563EB]"
                    >
                      <span>{link.name}</span>
                      <HiChevronDown className={`text-lg transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <ul className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 mt-1' : 'max-h-0'}`}>
                      <div className="bg-gray-50 rounded-xl p-2 space-y-1 ml-2">
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2.5 text-[13px] text-gray-700 rounded-lg hover:bg-white hover:text-[#2563EB]"
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
                    className="block px-4 py-3.5 text-[14px] font-bold tracking-wider text-gray-800 rounded-xl hover:bg-[#38BDF8]/10 hover:text-[#2563EB]"
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
                className="flex items-center justify-center gap-2 bg-[#38BDF8] text-[#0F1E4A] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#2563EB] hover:text-white transition-all duration-300"
              >
                FREE QUOTE
                <FaArrowRight className="text-xs" />
              </Link>
            </li>

            <li className="pt-6 border-t border-gray-100">
              <p className="text-[10px] font-bold text-[#2563EB] tracking-wider uppercase mb-3 px-4">
                Follow Us
              </p>
              <div className="flex items-center gap-2 px-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#38BDF8]/10 text-[#2563EB] hover:bg-[#38BDF8] hover:text-[#0F1E4A] transition-all duration-300"
                  >
                    <span className="text-sm">{s.icon}</span>
                  </a>
                ))}
              </div>
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
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'fixed top-0 left-0 bg-white lg:bg-[#0F1E4A] shadow-lg'
          : 'absolute top-0 left-0 bg-white lg:bg-transparent'
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'max-h-0 opacity-0 overflow-hidden'
            : 'max-h-300px opacity-100'
        }`}
      >
        <ContactStrip />
        <InfoStrip />
      </div>

      <div className="bg-white lg:bg-transparent">
        <MainNav scrolled={scrolled} />
      </div>
    </nav>
  );
};

export default Navbar;