import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
} from 'react-icons/fa';
import projectsData from '../data/projects.json';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import ServiceCTA from '../components/services/ServiceCTA';

const Projects = () => {
  return (
    <>
      <SEO
        title="Our Projects"
        description="Explore our portfolio of web apps, e-commerce platforms, and UI/UX designs."
        keywords="projects, portfolio, web development, software house"
      />

      <PageHeader
        title="Our Projects"
        subtitle="Explore our recent work — from full-scale web platforms to pixel-perfect designs."
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: 'All Projects' },
        ]}
      />

      <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#38BDF8]/10 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0F1E4A] via-[#0F1E4A]/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-linear-to-r from-[#38BDF8] to-[#2563EB] text-white shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View live"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#38BDF8] text-[#0F1E4A] hover:bg-white transition-colors duration-300 shadow-lg"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View code"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300"
                    >
                      <FaGithub className="text-xs" />
                    </a>
                  </div>
                </div>

                <div className="relative p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0F1E4A] leading-tight mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block text-[10px] font-bold tracking-wider uppercase text-[#2563EB] bg-[#38BDF8]/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0F1E4A] hover:text-[#2563EB] transition-colors duration-300 group/link"
                    >
                      <FaEye className="text-xs" />
                      View Project
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#38BDF8] to-[#2563EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yahan serviceTitle update kiya hai taake double text na aaye */}
      <ServiceCTA serviceTitle="project idea?" />
    </>
  );
};

export default Projects;