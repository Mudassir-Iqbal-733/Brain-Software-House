import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const PageHeader = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="relative bg-[#0F1E4A] pt-32 pb-16 md:pt-64 md:pb-16 overflow-hidden">
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
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-16 h-1 bg-linear-to-r from-[#38BDF8] to-[#2563EB] rounded-full"></span>
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
          </div>

          {subtitle && (
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-10 md:mt-14">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaChevronRight className="text-[8px] text-gray-500" />

                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="text-gray-400 hover:text-[#38BDF8] transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#38BDF8] font-semibold">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageHeader;