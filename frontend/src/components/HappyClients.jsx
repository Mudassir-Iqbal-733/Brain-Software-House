import { useEffect } from 'react';
import AOS from 'aos';
import { Carousel } from 'antd';

const happyClients = [
  {
    id: 1,
    name: 'Ahmed Raza',
    role: 'CEO',
    company: 'Nexa Technologies',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80',
    message:
      'Working with this team transformed our digital presence completely. Their strategic approach to social media and web development delivered measurable growth within months. True professionals who genuinely care about client success.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'CEO',
    company: 'Bloom Interiors',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80',
    message:
      'From concept to launch, everything was handled flawlessly. Our new e-commerce store on Shopify now generates consistent sales, and the design reflects our brand perfectly. Highly recommended for any business serious about growth.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bilal Ahmed',
    role: 'CEO',
    company: 'Orbit Logistics',
    logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&q=80',
    message:
      'Their custom software solution streamlined our entire operation. The team understood our workflow, delivered on time, and continues to support us. A reliable partner we trust for the long term.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fatima Sheikh',
    role: 'CEO',
    company: 'Aura Cosmetics',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80',
    message:
      'Our Amazon storefront went from idea to revenue in weeks. Their attention to detail on product listings, ads, and conversion optimization made all the difference. Exceptional service and real results.',
    rating: 5,
  },
];

const StarIcon = ({ filled }) => (
  <svg
    className={`h-4 w-4 ${filled ? 'text-amber-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="h-9 w-9 text-[#2563EB]/15"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const HappyClients = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header data-aos="fade-up" className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <div className="mb-5 inline-flex items-center justify-center gap-3">
            <span className="h-2px w-12 bg-[#2563EB]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Testimonials
            </p>
            <span className="h-2px w-12 bg-[#2563EB]" />
          </div>
          <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0F1E4A] sm:text-5xl md:text-6xl">
            Our Happy <span className="text-[#2563EB]">Clients</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Real feedback from CEOs and business leaders who trusted us to build, scale, and grow
            their digital presence.
          </p>
        </header>

        <div data-aos="fade-up" data-aos-delay="100" className="overflow-hidden">
          <Carousel
            autoplay
            autoplaySpeed={6000}
            infinite
            pauseOnHover
            draggable
            dots={{ className: 'hc-dots' }}
          >
            {happyClients.map((client) => (
              <div key={client.id}>
                <div className="px-2 pb-6 sm:px-4">
                  <div className="isolate relative mx-auto max-w-4xl rounded-2xl border border-gray-200/80 bg-white px-6 py-8 shadow-lg shadow-blue-500/10 sm:px-10 sm:py-10 lg:px-14">
                    <div className="absolute right-8 top-6 hidden sm:block">
                      <QuoteIcon />
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="mb-5 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < client.rating} />
                        ))}
                      </div>

                      <p className="mb-6 max-w-2xl text-base italic leading-relaxed text-[#0F1E4A]/80 sm:text-lg lg:text-xl">
                        "{client.message}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-100 ring-2 ring-[#2563EB]/20 ring-offset-2 sm:h-16 sm:w-16">
                          <img
                            src={client.logo}
                            alt={`${client.company} logo`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <p className="text-base font-bold leading-tight text-[#0F1E4A]">
                            {client.name}
                          </p>
                          <p className="text-sm font-semibold text-[#2563EB]">
                            {client.role}, {client.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style>{`
        .hc-dots li button {
          background: #2563EB !important;
          opacity: 0.35 !important;
        }
        .hc-dots li.slick-active button {
          background: #2563EB !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default HappyClients;