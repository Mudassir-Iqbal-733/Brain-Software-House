import { useRef } from 'react';
import { Carousel } from 'antd';
import ceo from '../assets/ceo.jpeg';
import managingDirector from '../assets/managing-director.jpeg';
import Samia from '../assets/Samia Rasheed.jpeg';
import Nimra from '../assets/Nimra Rasheed.jpeg';
import Saima from '../assets/Saima Akram.jpeg';
import Tehreem from '../assets/Tehreem Khan.jpeg';

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
      whatsapp: '923048559923',
      displayNumber: '+92 304 8559923',
      image: ceo,
    },
    {
      id: 2,
      name: 'Engr. M. Ateeq Naimat',
      role: 'Managing Director',
      department: 'Leadership',
      whatsapp: '923277925497',
      displayNumber: '+92 327 7925497',
      image: managingDirector,
    },
    {
      id: 3,
      name: 'Tehreem Khan',
      role: 'Manager',
      department: 'Manager',
      whatsapp: '923245632696',
      displayNumber: '+92 324 5632696',
      image: Tehreem,
    },
    {
      id: 4,
      name: 'Samia Rasheed',
      role: 'Graphic Designer & Video Editor',
      department: 'Creative',
      whatsapp: '923245632697',
      displayNumber: '+92 324 5632697',
      image: Samia,
    },
    {
      id: 5,
      name: 'Nimra Rasheed',
      role: 'Social Media Marketer & Graphic Designer',
      department: 'Creative',
      whatsapp: '923245632688',
      displayNumber: '+92 324 5632688',
      image: Nimra,
    },
    {
      id: 6,
      name: 'Saima Akram',
      role: 'SEO Specialist & Wordpress Developer',
      department: 'Creative',
      whatsapp: '923245632684',
      displayNumber: '+92 324 5632684',
      image: Saima,
    },
  ];

  const responsive = [
    { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ];

  return (
    <section className="relative bg-[#152A5E] py-16 sm:py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="w-10 sm:w-12 h-px bg-[#38BDF8]"></span>
              <span className="text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                Our Team
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              The Visionaries &{' '}
              <span className="relative inline-block">
                <span className="text-[#38BDF8]">Authority</span>
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 sm:h-1 bg-[#38BDF8]/40 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Meet the leadership and strategic minds steering our company towards excellence and innovation.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => carouselRef.current?.prev()}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300 backdrop-blur-sm"
            >
              <FaChevronLeft className="text-xs sm:text-sm" />
            </button>
            <button
              onClick={() => carouselRef.current?.next()}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300 backdrop-blur-sm"
            >
              <FaChevronRight className="text-xs sm:text-sm" />
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
            draggable={true}
            swipeToSlide={true}
            variableWidth={true} /* Ye wapas on kiya taake mobile pe squeeze na ho */
            className="-mx-2 sm:-mx-3"
          >
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                /* Mobile pe 280px, tablet pe 300px, desktop pe 320px fixed width di hai */
                className="w-[280px] sm:w-[300px] lg:w-[320px] px-2 sm:px-3 py-3 sm:py-4 shrink-0"
              >
                <div className="group relative h-full w-full flex flex-col">
                  <div className="absolute -inset-0.5 bg-linear-to-br from-[#38BDF8] to-[#2563EB] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

                  <div className="relative bg-linear-to-b from-[#1E3A8A] to-[#152A5E] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:-translate-y-2 flex flex-col flex-1 w-full">
                    
                    {/* Image Container */}
                    <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden shrink-0">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale-40% group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#38BDF8]/20 to-[#2563EB]/20 text-[#2563EB] text-6xl">
                          <FaUser />
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-linear-to-t from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent"></div>

                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1.5 rounded-full bg-[#0F1E4A]/70 backdrop-blur-md text-[#38BDF8] border border-[#38BDF8]/40 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
                          {member.department}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative p-4 sm:p-5 pt-2 flex flex-col flex-1 w-full">
                      <div className="w-10 h-1 bg-linear-to-r from-[#38BDF8] to-[#2563EB] rounded-full mb-3 shrink-0"></div>

                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight mb-1.5 shrink-0 line-clamp-2">
                        {member.name}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-[#38BDF8] font-semibold tracking-wide mb-4 line-clamp-2 shrink-0">
                        {member.role}
                      </p>

                      {/* mt-auto pushes this to the bottom */}
                      <div className="mt-auto pt-3 border-t border-white/10 w-full">
                        <a
                          href={`https://wa.me/${member.whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-gray-200 hover:text-[#25D366] transition-colors duration-300 group/whatsapp whitespace-nowrap"
                        >
                          <span className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0 group-hover/whatsapp:bg-[#25D366] group-hover/whatsapp:text-white transition-all duration-300">
                            <FaWhatsapp className="text-[10px] sm:text-xs" />
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