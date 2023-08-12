import React from 'react'
import Aspect1 from './Aspect1/Aspect1'
import Aspect2 from './Aspect2/Aspect2'
import './Home.css'
import Sponsors from './Aspect1/Sponsors/Sponsors'
import UseCase from './UseCase/UseCase'
import Customers from './Customers/Customers'
import ContactMe from './ContactMe/ContactMe'
import WhyUs from './WhyUs/WhyUs'
import Footer from './Footer/Footer'
import BackToTopButton from '../../BackToTopButton'

const Home = () => {
  return (
    <>
        <Aspect1/>
        <Sponsors/>
        <Aspect2/>
        <UseCase/>
        <Customers/>
        <WhyUs/>
        <ContactMe/>
        <Footer/>
        <BackToTopButton/>
    </>
  )
}

export default Home