import React from 'react';
import advert from "../Asset/myVid.mp4";
import "./Video.css"

const Video = () => {
  return (
    <div className='container'>
       <video autoPlay loop muted playsInline className='background-clip'>
         <source src={advert} type="video/mp4" />
       </video>
    </div>
  );
};

export default Video;
