import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import {
  FaBullhorn,
  FaWordpress,
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaPalette,
  FaArrowRight,
} from 'react-icons/fa';
import servicesData from '../data/services.json';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import FooterCTA from '../components/FooterCTA';

const iconMap = {
  FaBullhorn,
  FaWordpress,
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaPalette,
};

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore professional software, web development, and digital marketing services from Brain Software House — built to scale your business."
        keywords="software house services, web development, digital marketing, WordPress, custom software"
      />

      <PageHeader
        title="Our Services"
        subtitle="From concept to launch, we deliver end-to-end digital solutions engineered to grow your business."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'All Services' },
        ]}
      />

      <section className="relative w-full bg-gray-100 py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2563EB]/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header
            data-aos="fade-up"
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-[#2563EB]" />
                <p className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                  What We Offer
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F1E4A] leading-tight tracking-tight">
                Services Built for
                <br />
                <span className="text-[#2563EB]">Modern Business</span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                From concept to launch, we deliver end-to-end digital solutions engineered to grow
                your business and exceed your expectations.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-[#0F1E4A] text-sm font-semibold border-b border-[#2563EB] pb-1 hover:gap-3 transition-all duration-300"
              >
                Start a Project
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, i) => {
              const Icon = iconMap[service.icon] || FaBullhorn;
              const isActive = activeId === service.id;

              return (
                <article
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  onMouseEnter={() => setActiveId(service.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col hover:border-[#2563EB]/30 hover:shadow-[0_25px_70px_-20px_rgba(37,99,235,0.35)] hover:-translate-y-2 transition-all duration-500 p-6 lg:p-8"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative mb-6">
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-[#2563EB] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#2563EB] to-[#1E40AF] text-white text-2xl shadow-lg shadow-[#2563EB]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold text-[#0F1E4A] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                    {service.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full group-hover:border-[#2563EB]/40 group-hover:text-[#2563EB] group-hover:bg-blue-50/60 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F1E4A]/70 group-hover:text-[#2563EB] transition-all duration-300 pt-4 border-t border-gray-100"
                    aria-label={`Read more about ${service.title}`}
                  >
                    <span className="relative">
                      Read More
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
                    </span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#2563EB] via-[#2563EB] to-transparent transition-all duration-700 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      
        <FooterCTA whiteBg={true} />
      
    </>
  );
};

export default Services;