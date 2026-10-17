import { FaArrowRight } from 'react-icons/fa';

const OurProcess = () => {
  const processSteps = [
    { step: '01', title: 'Discover', desc: 'We understand your goals, audience, and requirements.' },
    { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and pixel-perfect designs.' },
    { step: '03', title: 'Develop', desc: 'Clean, scalable code built with modern tech stack.' },
    { step: '04', title: 'Deliver', desc: 'Testing, deployment, and ongoing support.' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-[#38BDF8]" />
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              How We Work
            </span>
            <span className="w-12 h-px bg-[#38BDF8]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E4A] leading-tight mb-4">
            Our Proven{' '}
            <span className="text-[#38BDF8]">Process</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            A streamlined workflow that ensures every project is delivered on time, on
            budget, and beyond expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, i) => (
            <div key={i} className="relative group">
              <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 h-full hover:bg-white hover:border-[#38BDF8]/40 hover:shadow-xl hover:shadow-[#38BDF8]/5 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#38BDF8] to-[#2563EB] text-white font-bold flex items-center justify-center text-sm shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1E4A] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>

              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <FaArrowRight className="text-[#38BDF8] text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;