import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Director from "../../../../../Asset/Director.png";
import Eazy from "../../../../../Asset/eazy.png";
import celo from "../../../../../Asset/celo.png";
import Khady from "../../../../../Asset/khady.png";
import Naheem from "../../../../../Asset/naheem.png";
import Seyi from "../../../../../Asset/seyi.png";
import Soliu from "../../../../../Asset/soliu.png";
import "./Sponsors.css";
import { AiFillStar } from "react-icons/ai";

const data = [
  {
    id: 1,
    image: Director,
    title: "Director",
    Name: "Aliu",
    Carrier: "Blockchain Engineer",
    About:
      "Aliu Musa has wealth of experience in Software Engineering and Business Operations, having worked with top web3 companies.",
    Linledin: "https://www.linkedin.com/in/aliumusa/",
    Twitter: "https://twitter.com/herlew99",
  },
  {
    id: 2,
    image: Eazy,
    title: "Eazy",
    Name: "Isiaq",
    Carrier: "Software Developer",
    About:
      "Isiaq is a fullstack software developer who creates responsive websites and high-performing applications with mouthwatering.",
    Linledin: "https://www.linkedin.com/in/tajudeen-isiaq-adeshola-73964a1b7",
    Twitter: "https://twitter.com/iambigeazi?t=uAmqToGF02vWWuZMpuJTUw&s=09",
  },
  {
    id: 3,
    image: Khady,
    title: "Khady",
    Name: "Khadijah",
    Carrier: "Blockchain Engineer",
    About:
      "Khadijah is a software developer who love beautiful designs and this is why she became passionate about Frontend software.",
    Linledin: "https://www.linkedin.com/in/khadijah-musa-851a80251/",
    Twitter: "https://twitter.com/khady_bola",
  },
  {
    id: 4,
    image: Naheem,
    title: "Naheem",
    Name: "Naheem",
    Carrier: "Software Developer",
    About:
      "Naheem is a witty and result oriented full stack developer. Naheem's astuteness, resilience and zeal for excellent.",
    Linledin: "https://www.linkedin.com/in/naheem-oloyede-593809251",
    Twitter: "https://twitter.com/oloyedeNaheem",
  },
  {
    id: 5,
    title: "Seyi",
    image: Seyi,
    Name: "Oluwaseyi",
    Carrier: "Product Designer",
    About:
      "Oluwaseyi is a Product designer with a background in Computer Science, debitis at! Ad aliquam hic iusto",
    Linledin: "https://www.linkedin.com/in/oluwaseyi-abolaji-8b936a213",
    Twitter: "https://twitter.com/Oluwaseyi_7",
  },
  {
    id: 6,
    title: "Soliu",
    image: Soliu,
    Name: "Soliu",
    Carrier: "Software Developer",
    About: "Soliu is a software developer, he is a very good team worker incidunt quaerat maxime debitis at! Ad aliquam hic iusto",
    Linledin: "https://www.linkedin.com/in/soliu-ahmad-31b049240/",
    Twitter: "https://twitter.com/ahmadsoliu1",
  },
];


const isMobileView = () => window.innerWidth <= (320, 480, 600);

const Sponsors = () => {
  return (
    <div className="mentors" data-aos="fade-up">
      <Swiper
        className={"navigation"}
        spaceBetween={40}
        slidesPerView={isMobileView() ? 1 : 2}
        size={5}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          el: "",
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        
      >
      
        {data.map(({ id, Name, Carrier, image, title, About }, index) => {
          return (
            
            <SwiperSlide key={index}>
            {isMobileView() ? (
                      <></>
                    ) : (
                      <div className="mentors-description">
                <div className="mentors-description-content">
                  <div className="content">
                    <img src={image} alt={title} />
                    <h1>{Name}</h1>
                    <p className="carrier">{Carrier}</p>
                  </div>
                  <div className="star">
                    {/* <h1>
                      <AiFillStar />
                    </h1> */}

                   

                    {isMobileView() ? (
                      <></>
                    ) : (
                      <h1>
                      <AiFillStar />
                    </h1> 
                    )}
                    {/* <img src={celo} alt="celo" /> */}
                    {isMobileView() ? (
                      <></>
                    ) : (
                      <img src={celo} alt="celo" />
                    )}
                  </div>
                </div>
                <p className="title">{About}</p>
              </div>
                    )}
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Sponsors