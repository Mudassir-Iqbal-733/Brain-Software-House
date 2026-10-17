import { FaRocket, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    { icon: FaRocket, value: '50+', label: 'Projects Completed', desc: 'Successfully delivered across industries' },
    { icon: FaUsers, value: '30+', label: 'Happy Clients', desc: 'Startups to enterprise businesses' },
    { icon: FaAward, value: '5.0', label: 'Average Rating', desc: 'Consistently rated 5 stars' },
    { icon: FaHandshake, value: '100%', label: 'Client Retention', desc: 'Clients who come back for more' },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-[#38BDF8]" />
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              Our Achievements
            </span>
            <span className="w-12 h-px bg-[#38BDF8]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E4A] leading-tight mb-4">
            Numbers That{' '}
            <span className="text-[#38BDF8]">Speak for Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 text-center hover:border-[#38BDF8]/40 hover:shadow-xl hover:shadow-[#38BDF8]/10 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative mb-5 inline-flex">
                  <div className="absolute inset-0 bg-[#38BDF8] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#38BDF8] to-[#2563EB] text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon />
                  </div>
                </div>
                <p className="text-4xl font-bold text-[#0F1E4A] mb-1">{item.value}</p>
                <p className="text-sm font-bold text-[#2563EB] uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;