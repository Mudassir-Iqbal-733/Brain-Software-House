import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const ServiceCTA = ({ serviceTitle }) => {
  return (
    <section className="relative bg-transparent py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-linear-to-br from-[#0F1E4A] via-[#1E3A8A] to-[#0F1E4A] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#38BDF8]/60 to-transparent"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-green-400">
                  Let's Work Together
                </span>
              </div>

              {/* Heading text updated here */}
              <h2 className="mb-5 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                Ready to start your{' '}
                <span className="text-[#38BDF8]">
                  {serviceTitle || 'next project'}
                </span>
              </h2>

              <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
                Let's discuss your goals and get a free consultation from our team. No
                commitment, just clear guidance on how to bring your ideas to life.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#38BDF8] text-[#0F1E4A] px-6 py-3.5 text-sm font-bold shadow-lg shadow-[#38BDF8]/30 hover:bg-white hover:scale-[1.02] transition-all duration-300"
                >
                  Get Free Quote
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="tel:+923001566440"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3.5 text-sm font-bold backdrop-blur-sm hover:bg-white/10 hover:border-[#38BDF8]/40 transition-all duration-300"
                >
                  <FaPhoneAlt className="text-xs" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/923001566440"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] px-6 py-3.5 text-sm font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp className="text-xs" />
                  WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-6 border-t border-white/10">
                {['Free consultation', 'No hidden charges', 'Expert team'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#38BDF8] text-xs shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center text-white text-xl shadow-lg mb-4">
                    <FaCheckCircle />
                  </div>

                  <h3 className="text-white text-lg font-bold mb-2">
                    Free Consultation
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    Book a 30-minute call with our experts to discuss your project — no
                    strings attached.
                  </p>

                  <Link
                    to="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#0F1E4A] px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#38BDF8] hover:scale-[1.02] transition-all duration-300"
                  >
                    Book a Call
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;