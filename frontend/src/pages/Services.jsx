import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Services = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const services = [
    {
      title: 'Social Media Marketing (Digital Marketing)',
      desc: 'Social media marketing is the use of social media platforms like Facebook, Instagram, TikTok, and LinkedIn to promote products, services, or brands.',
      img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80',
      alt: 'Social media marketing',
    },
    {
      title: 'WordPress Website Development & Designing',
      desc: 'WordPress website development is the process of building and customizing websites using WordPress, a popular content management system (CMS).',
      img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'WordPress website development',
    },
    {
      title: 'Coding Base Website Development',
      desc: 'Coding based website development involves building websites from scratch using programming languages like HTML, CSS, JavaScript, and frameworks such as React or Angular.',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
      alt: 'Coding based website development',
    },
    {
      title: 'E-Commerce Store Creation & Designing',
      desc: 'E-commerce store creation and designing involves building and styling online shops to sell products or services.',
      img: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'E-commerce store creation',
    },
    {
      title: 'Customize Software Development',
      desc: 'Custom software development is the process of designing, building, and deploying software tailored to meet specific business or user needs.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      alt: 'Custom software development',
    },
    {
      title: 'Graphic Designing Solutions (Post, Flyer & Animated Video)',
      desc: 'Graphic designing solutions (post, flyer, and animated video) involve creating visually appealing content for marketing and communication.',
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
      alt: 'Graphic designing solutions',
    },
  ];

  return (
    <section className="relative w-full bg-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E4A] leading-tight mb-6">
            Our <span className="text-[#2563EB]">Services</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            From concept to launch, we provide end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0F1E4A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center self-start bg-[#2563EB] text-white px-5 py-2.5 rounded-md text-xs sm:text-sm font-semibold hover:bg-[#0F1E4A] transition-colors duration-300"
                >
                  Read More &gt;&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;