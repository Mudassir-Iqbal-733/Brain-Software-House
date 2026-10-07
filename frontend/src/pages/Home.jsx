import React from 'react'

import HeroSection from '../components/HeroSection'
import WhyChooseBSH from '../components/WhyChooseBSH'
import Services from './Services'
import HappyClients from '../components/HappyClients'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <WhyChooseBSH />
        <Services />
        <HappyClients />
    </div>
  )
}

export default Home