import HeroSection from '../components/HeroSection'
import WhyChooseBSH from '../components/WhyChooseBSH'
import HappyClients from '../components/HappyClients'
import FooterCTA from '../components/FooterCTA'
import TeamCarousel from '../components/TeamCarousel'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import CEOMessage from '../components/CEOMessage'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <WhyChooseBSH />
        <ServicesSection />
        <CEOMessage />
        <ProjectsSection />
         <TeamCarousel />
        <HappyClients />
        <FooterCTA />
        
    </div>
  )
}

export default Home