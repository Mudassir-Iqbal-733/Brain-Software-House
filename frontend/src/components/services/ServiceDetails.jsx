import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaLayerGroup,
  FaPhoneAlt,
  FaWhatsapp,
  FaRocket,
  FaBullhorn,
  FaWordpress,
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaPalette,
  FaQuoteLeft,
} from 'react-icons/fa';
import servicesData from '../../data/services.json';
import PageHeader from '../PageHeader';
import SEO from '../SEO';
import ServiceCTA from './ServiceCTA';

const iconMap = {
  FaBullhorn,
  FaWordpress,
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaPalette,
};

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) {
    return (
      <>
        <SEO title="Service Not Found" description="The service you're looking for doesn't exist." />
        <PageHeader
          title="Service Not Found"
          subtitle="The service you're looking for doesn't exist or has been moved."
          breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Not Found' }]}
        />
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-4xl mb-6">
              <FaRocket />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F1E4A] mb-3">
              Service Not Found
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              This service doesn't exist or has been moved.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 bg-[#38BDF8] text-[#0F1E4A] px-6 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#38BDF8]/30 hover:bg-[#2563EB] hover:text-white transition-all duration-300"
            >
              <FaArrowLeft className="text-xs" />
              Back to Services
            </button>
          </div>
        </section>
      </>
    );
  }

  const Icon = iconMap[service.icon] || FaRocket;

  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDesc}
        keywords={service.tags?.join(', ')}
      />

      <PageHeader
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HERO CARD */}
          <div className="relative mb-12 md:mb-16">
            <div className="relative bg-linear-to-br from-[#0F1E4A] via-[#1E3A8A] to-[#0F1E4A] rounded-[2rem] p-8 sm:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#38BDF8]/60 to-transparent" />

              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#38BDF8]">
                      Our Service
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    {service.title}
                  </h1>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                    {service.description}
                  </p>

                  {service.tags && service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block text-[10px] font-bold tracking-wider uppercase text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1 flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#38BDF8]/30 rounded-[2rem] blur-2xl animate-pulse" />
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center rounded-[2rem] bg-linear-to-br from-[#38BDF8] to-[#2563EB] text-white text-5xl sm:text-6xl shadow-2xl">
                      <Icon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-8">
              {/* FEATURES */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-8 bg-linear-to-b from-[#38BDF8] to-[#2563EB] rounded-full" />
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                      Capabilities
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0F1E4A]">
                      What You Get
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="group relative flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#38BDF8]/40 hover:shadow-lg hover:shadow-[#38BDF8]/5 transition-all duration-300"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#38BDF8] group-hover:text-white transition-all duration-300">
                        <FaCheckCircle className="text-xs" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROCESS */}
              {service.process && service.process.length > 0 && (
                <div className="relative bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-6 sm:p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-1 h-8 bg-linear-to-b from-[#38BDF8] to-[#2563EB] rounded-full" />
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                          Our Approach
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-[#0F1E4A]">
                          How We Work
                        </h2>
                      </div>
                    </div>

                    <div className="relative">
                      {service.process.map((step, i) => (
                        <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                          <div className="relative shrink-0">
                            <div className="relative">
                              <div className="absolute inset-0 bg-[#38BDF8] rounded-full blur-md opacity-40" />
                              <div className="relative w-11 h-11 rounded-full bg-linear-to-br from-[#38BDF8] to-[#2563EB] text-white font-bold flex items-center justify-center text-sm shadow-lg">
                                {String(i + 1).padStart(2, '0')}
                              </div>
                            </div>
                            {i !== service.process.length - 1 && (
                              <div className="absolute top-11 left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-[#38BDF8]/40 to-transparent" />
                            )}
                          </div>
                          <div className="flex-1 pt-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
                            <p className="text-gray-800 font-semibold text-sm">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* DELIVERABLES */}
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="relative bg-linear-to-br from-[#38BDF8]/5 via-white to-[#2563EB]/5 border border-[#38BDF8]/20 rounded-3xl p-6 sm:p-8 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-1 h-8 bg-linear-to-b from-[#38BDF8] to-[#2563EB] rounded-full" />
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                          Deliverables
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-[#0F1E4A]">
                          What You'll Receive
                        </h2>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 items-start bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-[#38BDF8]/30 transition-all duration-300"
                        >
                          <div className="shrink-0 w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center text-[#2563EB]">
                            <FaLayerGroup className="text-[10px]" />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed pt-1">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* QUOTE */}
              <div className="relative bg-[#0F1E4A] rounded-3xl p-6 sm:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center text-white shadow-lg">
                    <FaQuoteLeft className="text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "We don't just build software — we craft digital experiences that drive
                      measurable results for our clients."
                    </p>
                    <p className="text-[#38BDF8] text-xs font-bold mt-3 uppercase tracking-wider">
                      — Brain Software House
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* CTA CARD */}
                <div className="relative bg-linear-to-br from-[#0F1E4A] to-[#1E3A8A] rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] font-bold tracking-wider uppercase text-green-400">
                        Available Now
                      </span>
                    </div>

                    <h3 className="text-white text-xl font-bold mb-3">
                      Ready to start?
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Let's discuss your project and get a free consultation from our team.
                    </p>

                    <Link
                      to="/contact-us"
                      className="group w-full inline-flex items-center justify-center gap-2 bg-[#38BDF8] text-[#0F1E4A] px-6 py-4 rounded-full font-bold text-sm shadow-lg shadow-[#38BDF8]/30 hover:bg-white hover:scale-[1.02] transition-all duration-300 mb-3"
                    >
                      Get Free Quote
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="tel:+923001566440"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-full text-xs font-bold hover:bg-white/10 transition-all duration-300"
                      >
                        <FaPhoneAlt className="text-xs" />
                        Call
                      </a>
                      <a
                        href="https://wa.me/923001566440"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-4 py-3 rounded-full text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300"
                      >
                        <FaWhatsapp className="text-xs" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* WHY CHOOSE US */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <h4 className="text-[#0F1E4A] font-bold text-base mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-linear-to-b from-[#38BDF8] to-[#2563EB] rounded-full" />
                    Why Choose Us?
                  </h4>

                  <ul className="space-y-3">
                    {[
                      'Free consultation & quote',
                      'Dedicated project manager',
                      'Transparent pricing',
                      'On-time delivery',
                      'Post-launch support',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="shrink-0 w-6 h-6 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center text-[#2563EB] mt-0.5 group-hover:bg-[#38BDF8] group-hover:text-white transition-all duration-300">
                          <FaCheckCircle className="text-[10px]" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE CTA */}
          <div className="relative mb-12 md:mb-16">
            <ServiceCTA serviceTitle={service.title} />
          </div>

          {/* RELATED SERVICES */}
          {relatedServices.length > 0 && (
            <div className="pt-12 md:pt-16 border-t border-gray-100">
              <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-12 h-px bg-[#38BDF8]" />
                    <span className="text-[#2563EB] text-xs font-bold tracking-[0.2em] uppercase">
                      Explore More
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1E4A] leading-tight">
                    Other Services You May Need
                  </h2>
                </div>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-[#0F1E4A] text-sm font-semibold border-b border-[#2563EB] pb-1 hover:gap-3 transition-all duration-300 self-start md:self-auto"
                >
                  View All Services
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                {relatedServices.map((related) => {
                  const RelatedIcon = iconMap[related.icon] || FaRocket;

                  return (
                    <Link
                      key={related.id}
                      to={`/services/${related.slug}`}
                      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#38BDF8]/10 hover:border-[#38BDF8]/30 flex flex-col"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/5 rounded-full blur-3xl group-hover:bg-[#38BDF8]/10 transition-colors duration-500" />

                      <div className="relative flex items-center gap-4 mb-4">
                        <div className="relative shrink-0">
                          <div className="absolute inset-0 bg-[#38BDF8] rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                          <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-[#38BDF8] to-[#2563EB] text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <RelatedIcon />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-[#0F1E4A] leading-tight group-hover:text-[#2563EB] transition-colors duration-300 line-clamp-2">
                          {related.title}
                        </h3>
                      </div>

                      <p className="relative text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {related.shortDesc}
                      </p>

                      <div className="relative inline-flex items-center justify-between gap-2 pt-4 border-t border-gray-100">
                        <span className="text-[#0F1E4A] text-sm font-bold group-hover:text-[#2563EB] transition-colors duration-300">
                          Learn More
                        </span>
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0F1E4A] text-white transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-[#0F1E4A] group-hover:translate-x-1">
                          <FaArrowRight className="text-xs" />
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#38BDF8] to-[#2563EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;