import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ServiceCTA from '../components/services/ServiceCTA';
import { FaArrowRight, FaCalendarAlt, FaUser } from 'react-icons/fa';

// Filhal ke liye mock data taake design dikh sake
// Baad mein isko empty array [] kar dein
const dummyBlogs = [
  {
    id: 1,
    title: 'How to Build a Modern Website in 2024',
    description: 'Learn the latest trends in web development, from React to Tailwind CSS, and how to build a responsive, fast website.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    category: 'Web Development',
    date: 'Oct 15, 2024',
    author: 'Admin',
  },
  {
    id: 2,
    title: 'Why Your Business Needs a Custom Software',
    description: 'Off-the-shelf software can only do so much. Discover how custom software can streamline your business operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Business',
    date: 'Oct 12, 2024',
    author: 'Admin',
  },
  {
    id: 3,
    title: 'Top 5 UI/UX Design Principles',
    description: 'A great design is invisible. Learn the core principles of UI/UX that make user experiences seamless and enjoyable.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    category: 'Design',
    date: 'Oct 10, 2024',
    author: 'Admin',
  }
];

const Blogs = () => {
  // Jab data add karna ho, to dummyBlogs ki jagah apna data fetch karein
  const blogs = dummyBlogs; 

  return (
    <>
      <SEO
        title="Our Blogs"
        description="Read our latest articles, insights, and updates on web development, design, and technology."
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

      <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Agar blogs empty hain to yeh dikhega */}
          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No blogs yet
              </h2>
              <p className="text-gray-500">
                Blogs will appear here once data is added.
              </p>
            </div>
          ) : (
            /* Blogs Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#0F1E4A]">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaUser /> {blog.author}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F1E4A] leading-tight mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1 line-clamp-3">
                      {blog.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <Link
                        to={`/blog/${blog.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0F1E4A] hover:text-[#2563EB] transition-colors duration-300 group/link"
                      >
                        Read Article
                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Agar ServiceCTA error de raha hai to check karein uski props */}
      <ServiceCTA serviceTitle="blog idea?" />
    </>
  );
};

export default Blogs;