import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import TeamCarousel from '../components/TeamCarousel';
import ServiceCTA from '../components/services/ServiceCTA';
import WhoWeAre from '../components/about/WhoWeAre';
import Achievements from '../components/about/Achievements';
import OurProcess from '../components/about/OurProcess';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Brain Software House — a passionate team of engineers, designers, and strategists building digital solutions for modern businesses."
        keywords="about Brain Software House, software company, web development, digital solutions"
      />

      <PageHeader
        title="About Us"
        subtitle="We are a team of passionate creators building digital solutions that drive real business growth."
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
      />

      <WhoWeAre />
      <Achievements />
      <TeamCarousel />
      <OurProcess />
      <ServiceCTA serviceTitle="your next big project" />
    </>
  );
};

export default About;