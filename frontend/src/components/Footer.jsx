import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
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
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-white/5 px-6 py-10 backdrop-blur-sm sm:px-10 sm:py-12 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
                Let's Build Together
              </p>
              <h3 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                Need a Custom Software Solution for Your Business?
              </h3>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
                From web apps to enterprise systems, we design and build scalable software
                tailored to how your business actually works — not the other way around.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-6 py-3 text-sm font-bold text-[#0F1E4A] transition-all duration-300 hover:bg-white"
              >
                Start Your Project
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#0B1734] p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#38BDF8]/15">
                    <svg
                      className="h-5 w-5 text-[#38BDF8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Custom Development</p>
                    <p className="text-xs text-[#38BDF8]">Software &amp; Web Apps</p>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">
                  Talk to our engineering team and get a free consultation for your project — no
                  commitment, just clear technical guidance.
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div className="flex -space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1734] bg-[#2563EB] text-[10px] font-bold text-white">
                      BS
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1734] bg-[#38BDF8] text-[10px] font-bold text-[#0F1E4A]">
                      HQ
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-white">50+ projects</span> delivered
                    successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <p className="text-sm text-gray-300">Bahawalpur, Punjab, Pakistan</p>
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

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Subscribe for product updates, tech insights, and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="m-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#38BDF8] text-[#0F1E4A] transition-colors duration-300 hover:bg-white"
              >
                <FaArrowRight className="text-xs" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400 sm:text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">Brain Software House</span>. All rights
            reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-[#0F1E4A]"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;