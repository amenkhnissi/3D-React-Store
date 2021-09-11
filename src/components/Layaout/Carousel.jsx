import VanillaTilt from "vanilla-tilt";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

// Social Nav
export const SocialNav = () => {
  const Nav = [
    {
      title: "facebook",
      icon: <i className="bx bxl-facebook-square bx-md"></i>,
      link: "https://www.facebook.com",
    },
    {
      title: "instagram",
      icon: <i className="bx bxl-instagram-alt bx-md"></i>,
      link: "https://www.instagram.com",
    },
    {
      title: "twitter",
      icon: <i className="bx bxl-twitter bx-md"></i>,
      link: "https://www.twitter.com",
    },
  ];
  return (
    <div className="social-nav">
      {Nav.map((nav, key) => (
        <a key={key} href={nav.link} title={nav.title}>
          {nav.icon}
        </a>
      ))}
    </div>
  );
};

const Carousel = ({ features }) => {
  // Vanilla transition effect
  let slideCard = document.querySelectorAll(".shop-now");
  slideCard.forEach((slide) =>
    VanillaTilt.init(slide, {
      max: 20,
      speed: 500,
    })
  );

  return (
    <>
      <SocialNav />
      <div className=" container-fluid position-relative" id="Gallery">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <img src={feature.media.source} />
              <div className="slide-card">
                <h3>{feature.name}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/products" className="bold">
          <div className="shop-now">
            <h2>Shop now</h2>
          </div>
<<<<<<< HEAD
        </Link>
      </div>
    </>
  );
};
=======
          </SwiperSlide>
        ))}
    
        </Swiper> 
        
       <Link to="/products" className="bold"><div className="shop-now">Shop now</div></Link>
    </div> 

     </>
    
}
>>>>>>> 36eccb6a3273468417b843f2f79209b561cff984

export default Carousel;
