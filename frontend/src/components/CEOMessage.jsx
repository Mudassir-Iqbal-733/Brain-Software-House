import { useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ceoImage from '../assets/ceo.jpg.jpeg';

const CeoMessage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header data-aos="fade-up" className="mb-14 max-w-3xl lg:mb-16">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#2563EB]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Leadership
            </p>
          </div>
          <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0F1E4A] sm:text-5xl md:text-6xl">
            Meet Our <span className="text-[#2563EB]">CEO</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            A vision-driven leader committed to delivering reliable, efficient, and scalable
            digital solutions that power modern businesses forward.
          </p>
        </header>

        <div className="relative">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="mx-auto w-full max-w-70 sm:max-w-80 lg:absolute lg:top-0 lg:left-0 lg:z-20 lg:mx-0 lg:max-w-85"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,30,74,0.45)]">
              <img
                src={ceoImage}
                alt="Engr. Hafiz M. Shafiq Naimat"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F1E4A]/85 via-[#0F1E4A]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
                  Engr. Hafiz M. Shafiq Naimat
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#38BDF8] sm:text-sm">
                  CEO &amp; Founder
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            className="mt-8 lg:mt-0 lg:ml-55 xl:ml-60"
          >
            <div className="relative rounded-2xl bg-white px-6 py-10 shadow-xl sm:px-10 sm:py-14 lg:py-16 lg:pr-16 lg:pl-45">
              <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                Greetings, This is Engr. Hafiz M. Shafiq Naimat from Brain Software House. I hope
                you are doing well. I am reaching out to introduce our company and the range of
                innovative digital solutions we offer. At Brain Software House, we specialize in
                custom software development, web and mobile applications, and IT consultancy
                services designed to meet the unique needs of modern businesses. Our team is
                dedicated to delivering reliable, efficient, and scalable solutions that drive real
                value for our clients. We believe in building long-term professional relationships
                based on trust, quality, and mutual growth. I would be glad to connect and explore
                how we can support your business through technology-driven solutions.
              </p>

              <div className="absolute right-8 bottom-6 text-[#2563EB]">
                <FaQuoteRight className="text-5xl opacity-90 sm:text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;