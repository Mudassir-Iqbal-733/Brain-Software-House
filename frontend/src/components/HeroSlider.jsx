import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaCog, FaBullhorn } from 'react-icons/fa';
import heroImg1 from '../assets/Hero1.png';
import heroImg2 from '../assets/Hero2.png';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      tag: 'DIGITAL SOLUTIONS FOR MODERN BUSINESSES',
      titleLine1: 'We Build Digital',
      titleLine2: 'Solutions That Help',
      titleLine3: 'Your Business Grow',
      paragraph:
        'From websites and custom software to SEO, social media and digital marketing, we provide complete digital solutions to help your business grow.',
      image: heroImg1,
      primaryBtn: 'Get a Quote',
      primaryLink: '/contact-us',
      secondaryBtn: 'Our Services',
      secondaryLink: '/services',
      features: [
        { icon: <FaRocket />, label: 'Fast Delivery' },
        { icon: <FaChartLine />, label: 'Growth Focused' },
        { icon: <FaCog />, label: 'Custom Built' },
        { icon: <FaBullhorn />, label: 'Full Marketing' },
      ],
    },
    {
      id: 2,
      tag: 'INNOVATION MEETS EXCELLENCE',
      titleLine1: 'Transform Your',
      titleLine2: 'Business With',
      titleLine3: 'Modern Technology',
      paragraph:
        'Empowering businesses with cutting-edge digital solutions. From concept to launch, we handle everything so you can focus on what matters most.',
      image: heroImg2,
      primaryBtn: 'Start Your Project',
      primaryLink: '/contact-us',
      secondaryBtn: 'Learn More',
      secondaryLink: '/about',
      features: [
        { icon: <FaRocket />, label: 'Innovation First' },
        { icon: <FaChartLine />, label: 'Scalable Solutions' },
        { icon: <FaCog />, label: 'Expert Team' },
        { icon: <FaBullhorn />, label: '24/7 Support' },
      ],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-zoom {
          animation: slowZoom 10s ease-out infinite alternate;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .ant-carousel .slick-slide > div {
          height: 100%;
        }
        .ant-carousel .slick-slide {
          touch-action: pan-y;
        }

        .hero-primary-btn {
          background-color: #38BDF8;
          color: #0F1E4A;
        }
        .hero-primary-btn:hover {
          background-color: #2563EB;
          color: #ffffff;
        }

        .hero-secondary-btn {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .hero-secondary-btn:hover {
          background-color: #ffffff;
          color: #0F1E4A;
          border-color: #ffffff;
        }

        .hero-overlay {
          background: linear-gradient(
            to right,
            rgba(15, 30, 74, 0.92) 0%,
            rgba(15, 30, 74, 0.75) 45%,
            rgba(15, 30, 74, 0.4) 100%
          );
        }

        .hero-title-shadow {
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .hero-text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div className="relative w-full h-screen min-h-[700px] overflow-hidden">
        <Carousel
          autoplay
          autoplaySpeed={6000}
          dots={false}
          arrows={false}
          fade
          draggable={true}
          swipeToSlide={true}
          touchMove={true}
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="relative w-full h-screen min-h-[700px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.titleLine1}
                  className="absolute inset-0 w-full h-full object-cover animate-zoom"
                  draggable={false}
                />

                <div className="absolute inset-0 hero-overlay"></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-32 lg:pt-40">
                  <div className="max-w-3xl">
                    <p className="animate-slide-left text-[#38BDF8] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-5 hero-text-shadow">
                      {slide.tag}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 hero-title-shadow">
                      <span className="animate-slide-left delay-100 inline-block">
                        {slide.titleLine1}
                      </span>
                      <br />
                      <span className="animate-slide-left delay-200 inline-block">
                        {slide.titleLine2}
                      </span>
                      <br />
                      <span className="animate-slide-left delay-300 inline-block text-[#38BDF8]">
                        {slide.titleLine3}
                      </span>
                    </h1>

                    <p className="animate-slide-up delay-400 text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl hero-text-shadow">
                      {slide.paragraph}
                    </p>

                    <div className="animate-slide-up delay-500 flex flex-wrap gap-4 mb-10">
                      <Link
                        to={slide.primaryLink}
                        className="hero-primary-btn inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        {slide.primaryBtn}
                      </Link>

                      <Link
                        to={slide.secondaryLink}
                        className="hero-secondary-btn inline-flex items-center justify-center backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        {slide.secondaryBtn}
                      </Link>
                    </div>

                    <div className="animate-fade delay-600 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/20 pt-6 max-w-2xl">
                      {slide.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#38BDF8] text-base shrink-0 drop-shadow-lg">
                            {feature.icon}
                          </span>
                          <span className="text-gray-100 text-xs sm:text-sm font-medium hero-text-shadow">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSlider;