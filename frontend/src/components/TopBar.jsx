import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

import logo from '../assets/BSH-Logo.png';

const socials = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/brainsoftwarehouse/', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://instagram.com/brainsoftwarehouse', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/brain-software-house-8771722b0/', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/923001566440', label: 'WhatsApp' },
];

const TopBar = ({ scrolled }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        scrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[400px] opacity-100'
      }`}
    >
      {/* Mobile TopBar */}
      <div className="lg:hidden bg-[#0F1E4A] text-white text-[10px]">
        <div className="px-3 py-2 flex items-center justify-between gap-2">
          <a
            href="tel:+923004506850"
            className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
          >
            <FaPhoneAlt className="text-[#38BDF8] text-[9px]" />
            <span>0300-4506850</span>
          </a>

          <a
            href="mailto:brainsoftwarehouse@gmail.com"
            className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
          >
            <FaEnvelope className="text-[#38BDF8] text-[9px]" />
            <span>brainsoftwarehouse@gmail.com</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bahawalpur+Punjab+Pakistan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
          >
            <FaMapMarkerAlt className="text-[#38BDF8] text-[9px]" />
            <span>Bahawalpur,Pakistan</span>
          </a>

          
        </div>
      </div>

      {/* Desktop TopBar */}
      <div className="hidden lg:block">
        <div className="bg-[#0F1E4A] text-white text-xs sm:text-sm">
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

        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 items-center gap-4">
              <a
                href="mailto:brainsoftwarehouse@gmail.com"
                className="flex items-center gap-3 justify-start group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#2563EB] text-2xl shrink-0 group-hover:bg-[#38BDF8] group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                    Mail Us Today
                  </p>
                  <p className="text-base font-semibold text-[#0F1E4A] group-hover:text-[#2563EB] transition-colors">
                    brainsoftwarehouse@gmail.com
                  </p>
                </div>
              </a>

              <div className="text-center">
                <img
                  src={logo}
                  alt="Brain Software House"
                  className="h-24 w-auto mx-auto object-contain"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bahawalpur+Punjab+Pakistan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 justify-end group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#2563EB] text-2xl shrink-0 group-hover:bg-[#38BDF8] group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                    Company Location
                  </p>
                  <p className="text-base font-semibold text-[#0F1E4A] group-hover:text-[#2563EB] transition-colors">
                    Bahawalpur, Punjab, Pakistan
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;