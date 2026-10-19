import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { FaArrowRight, FaBullhorn } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import FooterCTA from '../components/FooterCTA';


const blogsData = []; 

const Blogs = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <SEO
        title="Our Blogs"
        description="Read our latest articles, insights, and updates on web development, design, and technology from Brain Software House."
        keywords="blogs, articles, web development, tech insights, software house"
      />

      <PageHeader
        title="Our Blogs"
        subtitle="Insights, tutorials, and updates from our team — straight to your feed."
        breadcrumbs={[
          { label: 'Blogs', href: '/blogs' },
          { label: 'All Blogs' },
        ]}
      />

      <section className="relative w-full bg-gray-100 py-20 lg:py-28 overflow-hidden min-h-[50vh]">
        {/* Background Blurs */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2563EB]/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Blogs Grid / Empty State */}
          {blogsData.length === 0 ? (
            <div 
              data-aos="fade-up"
              className="flex flex-col items-center justify-center text-center py-24 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200/80 shadow-sm"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                <FaBullhorn className="text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1E4A] mb-3">
                No blogs yet
              </h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                We are working hard to bring you amazing content. Blogs will appear here once they are published.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogsData.map((blog, i) => {
                const isActive = activeId === blog.id;

                return (
                  <article
                    key={blog.id}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    onMouseEnter={() => setActiveId(blog.id)}
                    onMouseLeave={() => setActiveId(null)}
                    className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col hover:border-[#2563EB]/30 hover:shadow-[0_25px_70px_-20px_rgba(37,99,235,0.35)] hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Blog Image */}
                    {blog.image && (
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    )}

                    <div className="relative p-6 lg:p-8 flex flex-col flex-1">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

                      <h3 className="text-lg lg:text-xl font-bold text-[#0F1E4A] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-300 relative z-10">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1 relative z-10">
                        {blog.description}
                      </p>

                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F1E4A]/70 group-hover:text-[#2563EB] transition-all duration-300 pt-4 border-t border-gray-100 relative z-10"
                        aria-label={`Read more about ${blog.title}`}
                      >
                        <span className="relative">
                          Read More
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
                        </span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>

                      <span
                        className={`absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#2563EB] via-[#2563EB] to-transparent transition-all duration-700 ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <FooterCTA whiteBg={true} />
    </>
  );
};

export default Blogs;