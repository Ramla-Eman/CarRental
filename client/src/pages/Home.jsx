import React from 'react'
import Hero from '../components/Hero'
import FeauteredSection from '../components/FeauteredSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeauteredSection/>
      <Banner/>
      <Testimonial/>
    </div>
  )
}

export default Home