import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaCode, FaRocket, FaUsers } from 'react-icons/fa';

const FooterCTA = ({ whiteBg = false }) => {
  return (
    <div
      className={`relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 ${
        whiteBg
          ? 'bg-white border-y border-gray-200'
          : 'bg-gray-100 border-y border-gray-200'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              Let's Build Together
            </span>
          </div>

          <h3 className="mb-5 text-2xl font-bold leading-tight text-[#0F1E4A] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            Need a Custom Software Solution{' '}
            <span className="text-[#2563EB]">for Your Business?</span>
          </h3>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            From web apps to enterprise systems, we design and build scalable software
            tailored to how your business actually works — not the other way around.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-6 py-3 text-sm font-bold text-[#0F1E4A] transition-all duration-300 hover:bg-[#2563EB] hover:text-white hover:shadow-lg hover:shadow-[#38BDF8]/30"
            >
              Start Your Project
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/923001566440"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-[#0F1E4A] transition-all duration-300 hover:bg-[#0F1E4A] hover:text-white hover:border-[#0F1E4A]"
            >
              Talk to Us
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center shrink-0">
                <FaCheckCircle className="text-[#2563EB] text-xs" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                Free Consultation
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center shrink-0">
                <FaRocket className="text-[#2563EB] text-xs" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                Fast Delivery
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center shrink-0">
                <FaUsers className="text-[#2563EB] text-xs" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                Expert Team
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          {/* Card — yahan agar rounded nahi chahiye toh rounded-2xl hatao */}
          <div className="relative bg-[#0B1734]/95 backdrop-blur-sm p-6 sm:p-7 shadow-2xl shadow-[#0B1734]/30">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#38BDF8] to-[#2563EB] shadow-lg shadow-[#38BDF8]/30">
                    <FaCode className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Custom Development
                    </p>
                    <p className="text-xs text-[#38BDF8] font-medium">
                      Software &amp; Web Apps
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">
                    Available
                  </span>
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                Talk to our engineering team and get a free consultation for your
                project — no commitment, just clear technical guidance.
              </p>

              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#38BDF8] text-xs shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">
                    Modern Tech Stack
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#38BDF8] text-xs shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">
                    Scalable Architecture
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#38BDF8] text-xs shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">
                    Ongoing Support
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1734] bg-[#2563EB] text-[10px] font-bold text-white">
                      BS
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1734] bg-[#38BDF8] text-[10px] font-bold text-[#0F1E4A]">
                      HQ
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1734] bg-white/10 text-[10px] font-bold text-white">
                      +
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    <span className="font-bold text-white">50+</span> projects
                  </p>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-0.5">5.0 Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;