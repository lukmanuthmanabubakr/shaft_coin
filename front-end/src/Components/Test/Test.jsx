import React, { useEffect } from 'react'
import "./Test.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Test = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
  return (
    <div className='top'>
            <div className='animation' data-aos="fade-up"></div>
            <div className='animation' data-aos="fade-down"></div>
            <div className='animation' data-aos="fade-left"></div>
            <div className='animation' data-aos="fade-right"></div>
            <h1>Flip</h1>
            <div className='animation' data-aos="fade-flip-right"></div>
            <div className='animation' data-aos="fade-flip-up"></div>
            <div className='animation' data-aos="fade-flip-down"></div>
            <div className='animation' data-aos="fade-flip-left"></div>
            <h1>Zoom Animation</h1>
            <div className='animation' data-aos="zoom-in"></div>
    </div>
  )
}

export default Test