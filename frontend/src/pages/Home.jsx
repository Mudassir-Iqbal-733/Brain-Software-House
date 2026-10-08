import React from 'react'

import HeroSection from '../components/HeroSection'
import WhyChooseBSH from '../components/WhyChooseBSH'
import Services from './Services'
import HappyClients from '../components/HappyClients'
import CEOMessage from '../components/CEOMessage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <WhyChooseBSH />
        <Services />
        <CEOMessage />
        <HappyClients />
        <Footer />
    </div>
  )
}

export default Home