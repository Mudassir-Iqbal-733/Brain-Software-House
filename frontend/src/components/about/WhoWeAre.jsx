import { FaAward } from 'react-icons/fa';

const WhoWeAre = () => {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '10+', label: 'Team Members' },
    { value: '5.0', label: 'Client Rating' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-12 h-px bg-[#38BDF8]" />
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E4A] leading-tight mb-6">
              Building Digital Experiences{' '}
              <span className="text-[#38BDF8]">That Matter</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                <strong className="text-[#0F1E4A]">Brain Software House</strong> is a
                full-service digital agency specializing in custom software development,
                web solutions, and digital marketing. We partner with startups and
                enterprises to turn ideas into high-performing digital products.
              </p>
              <p>
                With a team of experienced engineers, designers, and strategists, we
                combine technical excellence with creative thinking to deliver solutions
                that not only work beautifully but also drive measurable business results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:border-[#38BDF8]/40 hover:shadow-lg hover:shadow-[#38BDF8]/5 transition-all duration-300"
                >
                  <p className="text-3xl font-bold text-[#38BDF8] mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team collaborating"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F1E4A]/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center text-white shadow-lg">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F1E4A]">5.0</p>
                  <p className="text-xs text-gray-500 font-medium">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;