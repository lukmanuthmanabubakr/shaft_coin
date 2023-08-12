import React from 'react'
import AboutSecOne from './AboutSecOne/AboutSecOne'
import Navbar from '../NavHome/Navbar/Navbar'
import AboutSecTwo from './AboutSecTwo/AboutSecTwo'
import Footer from '../NavHome/Home/Footer/Footer'
import BackToTopButton from "../BackToTopButton"

const About = () => {
  return (
    <>
      <Navbar/>
      <AboutSecOne/>
      <AboutSecTwo/>
      <Footer/>
      <BackToTopButton/>
    </>
  )
}

export default About