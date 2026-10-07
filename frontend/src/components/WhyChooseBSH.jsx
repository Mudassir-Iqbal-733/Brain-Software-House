import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaUsers,
  FaPuzzlePiece,
  FaClock,
  FaTag,
  FaHeadset,
  FaChartLine,
} from 'react-icons/fa';
import AOS from 'aos';

const WhyChooseBSH = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: FaUsers,
      title: 'Expert Team',
      desc: 'Industry professionals with years of hands-on experience in modern technologies.',
    },
    {
      icon: FaPuzzlePiece,
      title: 'Custom Solutions',
      desc: 'Tailored strategies built around your business goals, not one-size-fits-all templates.',
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      desc: 'We respect deadlines and deliver projects on schedule, every single time.',
    },
    {
      icon: FaTag,
      title: 'Affordable Pricing',
      desc: 'Premium quality services at competitive rates that fit your budget.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      desc: 'Our team is always available to help you whenever you need assistance.',
    },
    {
      icon: FaChartLine,
      title: 'Proven Results',
      desc: 'A track record of successful projects that have helped businesses grow.',
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-aos="fade-right">
            <p className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1E4A] leading-tight mb-6">
              Why Choose <br />
              <span className="text-[#2563EB]">Brain Software House</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              We combine creativity, technology, and strategy to deliver digital
              solutions that actually work. From startups to enterprises, our
              team helps businesses build a strong online presence and achieve
              measurable growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-[#0F1E4A] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base shadow-lg hover:bg-[#2563EB] transition-colors duration-300"
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F1E4A] border-2 border-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:border-[#0F1E4A] transition-colors duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon; // 👈 icon component nikaal liya
              return (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 rounded-xl p-5 sm:p-6 hover:border-[#2563EB]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#2563EB] text-lg mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    <Icon /> {/* 👈 dynamic icon render */}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F1E4A] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBSH;