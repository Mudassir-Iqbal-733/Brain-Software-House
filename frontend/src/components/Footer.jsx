import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa';

import whiteLogo from '../assets/BSH-White-Logo.png';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact-us' },
];

const serviceLinks = [
  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { name: 'WordPress Development', href: '/services/wordpress-development' },
  { name: 'Custom Web Development', href: '/services/custom-web-development' },
  { name: 'E-Commerce Store', href: '/services/ecommerce-store-development' },
  { name: 'Custom Software', href: '/services/custom-software-development' },
  { name: 'Graphic & Motion Design', href: '/services/graphic-design-motion-graphics' },
];

const socials = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/brainsoftwarehouse/', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://instagram.com/brainsoftwarehouse', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/brain-software-house-8771722b0/', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/923001566440', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F1E4A] px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <img
              src={whiteLogo}
              alt="Brain Software House"
              className="mb-5 h-14 w-auto object-contain"
            />
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Delivering reliable, efficient, and scalable digital solutions that power modern
              businesses forward.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-[#0F1E4A]"
                >
                  <span className="text-sm">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#38BDF8]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#38BDF8]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bahawalpur+Punjab+Pakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Bahawalpur, Punjab, Pakistan
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                  <FaEnvelope className="text-xs" />
                </div>
                <a
                  href="mailto:brainsoftwarehouse@gmail.com"
                  className="break-all text-sm text-gray-300 transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  brainsoftwarehouse@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <a
                  href="tel:+923004506850"
                  className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  +92 300 4506850
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/10 pt-6">
          <p className="text-center text-xs text-gray-400 sm:text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">Brain Software House</span>. All rights
            reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="absolute right-0 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-[#0F1E4A]"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;