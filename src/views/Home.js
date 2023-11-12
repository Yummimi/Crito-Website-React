import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import CompanyLogo from '../components/CompanyLogo'
import Features from '../components/Features'
import AboutCompany from '../components/AboutCompany'
import Services from '../components/Services'
import Consulting from '../components/Consulting'
import ProjectAndCases from '../components/ProjectAndCases'
import MeetOurTeam from '../components/MeetOurTeam'
import Testimonial from '../components/Testimonial'
import News from '../components/News'
import Subscribe from '../components/Subscribe'
import Links from '../components/Links'

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <CompanyLogo />
      <Features />
      <AboutCompany />
      <Services />
      <Consulting />
      <ProjectAndCases />
      <MeetOurTeam />
      <Testimonial />
      <News />
      <Subscribe />
      <Links />
      <Footer />
    </>
  )
}

export default Home