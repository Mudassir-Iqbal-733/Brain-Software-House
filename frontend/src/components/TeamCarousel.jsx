import { useRef } from 'react';
import { Carousel } from 'antd';
import ceo from '../assets/ceo.jpeg';
import managingDirector from '../assets/managing-director.jpeg';
import {
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
  FaUser,
} from 'react-icons/fa';

const TeamCarousel = () => {
  const carouselRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Engr. Hafiz M. Shafiq Naimat',
      role: 'CEO & Founder',
      department: 'Leadership',
      whatsapp: '923004506850',
      displayNumber: '+92 300 4506850',
      image: ceo,
    },
    {
      id: 2,
      name: 'Engr. M. Ateeq Naimat',
      role: 'Managing Director',
      department: 'Leadership',
      whatsapp: '923011234567',
      displayNumber: '+92 301 1234567',
      image: managingDirector,
    },
  ];

  const responsive = [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4, slidesToScroll: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ];

  return (
    <section className="relative bg-[#152A5E] py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-px bg-[#38BDF8]"></span>
              <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Built by Experts,{' '}
              <span className="relative inline-block">
                <span className="text-[#38BDF8]">Driven by Passion</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#38BDF8]/40 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Meet the talented team of engineers, creatives, and strategists behind
              every successful project we deliver.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => carouselRef.current?.prev()}
              aria-label="Previous"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300 backdrop-blur-sm"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => carouselRef.current?.next()}
              aria-label="Next"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300 backdrop-blur-sm"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        <div className="team-carousel">
          <Carousel
            ref={carouselRef}
            dots={false}
            arrows={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3500}
            pauseOnHover={true}
            slidesToShow={4}
            slidesToScroll={1}
            responsive={responsive}
            className="-mx-3"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="px-3 py-4">
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-linear-to-br from-[#38BDF8] to-[#2563EB] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

                  <div className="relative bg-linear-to-b from-[#1E3A8A] to-[#152A5E] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative h-72 overflow-hidden shrink-0">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#38BDF8]/20 to-[#2563EB]/20 text-[#2563EB] text-6xl">
                          <FaUser />
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#0F1E4A]/70 backdrop-blur-md text-[#38BDF8] border border-[#38BDF8]/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
                          {member.department}
                        </span>
                      </div>

                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#38BDF8]/20 backdrop-blur-sm border-l border-b border-white/10 flex items-end justify-start p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                      </div>
                    </div>

                    <div className="relative p-5 pt-2 flex flex-col flex-1">
                      <div className="w-10 h-1 bg-linear-to-r from-[#38BDF8] to-[#2563EB] rounded-full mb-4"></div>

                      <h3 className="text-base font-bold text-white leading-tight mb-1.5">
                        {member.name}
                      </h3>

                      <p className="text-xs text-[#38BDF8] font-semibold tracking-wide mb-5">
                        {member.role}
                      </p>

                      <div className="mt-auto pt-4 border-t border-white/10">
                        <a
                          href={`https://wa.me/${member.whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`WhatsApp ${member.name}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-[#25D366] transition-colors duration-300 group/whatsapp"
                        >
                          <span className="w-7 h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0 group-hover/whatsapp:bg-[#25D366] group-hover/whatsapp:text-white transition-all duration-300">
                            <FaWhatsapp className="text-xs" />
                          </span>
                          {member.displayNumber}
                        </a>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#38BDF8] to-[#2563EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;