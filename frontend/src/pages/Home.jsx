import React from 'react'

import HeroSection from '../components/HeroSection'
import WhyChooseBSH from '../components/WhyChooseBSH'
import Services from './Services'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <WhyChooseBSH />
        <Services />
    </div>
  )
}

export default Home