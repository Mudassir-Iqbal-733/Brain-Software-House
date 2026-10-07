import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const services = [
  {
    id: 'smm',
    title: 'Social Media & Digital Marketing',
    desc: 'Strategic social media and digital marketing across Facebook, Instagram, TikTok, LinkedIn, and X. We build brand awareness, drive engagement, run paid ad campaigns, and turn followers into loyal customers with data-driven execution.',
    img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80',
    alt: 'Social media and digital marketing strategy and analytics',
    tags: ['Facebook', 'Instagram', 'TikTok', 'Google Ads', 'SEO'],
  },
  {
    id: 'wordpress',
    title: 'WordPress Development & Design',
    desc: 'Custom WordPress websites engineered for speed, security, and scalability. From business sites to content platforms, we deliver responsive, SEO-optimized builds with effortless management.',
    img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=900&auto=format&fit=crop',
    alt: 'WordPress website development and customization',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
  },
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    desc: 'Modern, high-performance websites built with React, Next.js, and Node.js. We architect pixel-perfect, scalable applications tailored precisely to your business requirements.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80',
    alt: 'Custom coding based website development',
    tags: ['React', 'Laravel', 'Tailwind'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store Development',
    desc: 'Launch and scale your online store with expert Amazon, Shopify, and WooCommerce solutions. From store setup to product listings, payment integration, and conversion optimization.',
    img: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=900&auto=format&fit=crop',
    alt: 'E-commerce store creation on Amazon and Shopify',
    tags: ['Amazon', 'Shopify', 'WooCommerce', 'Stripe'],
  },
  {
    id: 'software',
    title: 'Custom Software Development',
    desc: 'End-to-end custom software designed around your workflows. From CRM systems to SaaS platforms, we build secure, scalable software that grows alongside your business.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    alt: 'Custom software development and engineering',
    tags: ['SaaS', 'CRM', 'API', 'Cloud'],
  },
  {
    id: 'design',
    title: 'Graphic Design & Motion Graphics',
    desc: 'Creative design solutions spanning social posts, flyers, brochures, brand identities, and animated videos. We turn ideas into visuals that captivate and convert.',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80',
    alt: 'Graphic designing and animated video production',
    tags: ['Branding', 'Motion', 'Print', 'UI/UX'],
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full bg-gray-100 py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-500px h-500px rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-500px h-500px rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          data-aos="fade-up"
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-2px bg-[#2563EB]" />
              <p className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                What We Offer
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F1E4A] leading-[1.1] tracking-tight">
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
              to="/contact"
              className="inline-flex items-center gap-2 text-[#0F1E4A] text-sm font-semibold border-b border-[#2563EB] pb-1 hover:gap-3 transition-all duration-300"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <article
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col hover:border-[#2563EB]/30 hover:shadow-[0_25px_70px_-20px_rgba(37,99,235,0.35)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-100">
                <img
                  src={service.img}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-900ms ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1E4A]/70 via-[#0F1E4A]/10 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#2563EB]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative p-6 lg:p-7 flex flex-col flex-1">
                <h3 className="text-lg lg:text-xl font-bold text-[#0F1E4A] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {service.desc}
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
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F1E4A]/70 group-hover:text-[#2563EB] transition-all duration-300 pt-4 border-t border-gray-100"
                  aria-label={`Read more about ${service.title}`}
                >
                  <span className="relative">
                    Read More
                    <span className="absolute -bottom-0.5 left-0 w-0 h-1px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <span
                className={`absolute bottom-0 left-0 h-3px bg-linear-to-r from-[#2563EB] via-[#2563EB] to-transparent transition-all duration-700 ${
                  activeId === service.id ? 'w-full' : 'w-0'
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;