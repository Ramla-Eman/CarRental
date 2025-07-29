import React from 'react'
import Hero from '../components/Hero'
import FeauteredSection from '../components/FeauteredSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeauteredSection/>
      <Banner/>
      <Testimonial/>
      <NewsLetter/>
    </div>
  )
}

export default Home