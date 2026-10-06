import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import heroImg from '../assets/Hero-Img.png';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-72 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-500px">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p
              data-aos="fade-right"
              className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mb-4"
            >
              DIGITAL SOLUTIONS FOR <span className="text-[#0F1E4A]">MODERN BUSINESSES</span>
            </p>

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F1E4A] leading-[1.1] mb-6"
            >
              We Build Digital
              <br />
              Solutions That Help
              <br />
              Your Business Grow
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              From websites and custom software to SEO, social media and digital marketing, we provide complete digital solutions to help your business grow.
            </p>

            <div data-aos="fade-up" data-aos-delay="300">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-[#0F1E4A] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base shadow-lg hover:bg-[#2563EB] transition-colors duration-300"
              >
                Get a Quote
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <img
              src={heroImg}
              alt="Digital Solutions"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;