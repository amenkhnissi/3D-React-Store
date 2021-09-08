import React , { useEffect, useRef } from 'react'
import { SocialNav } from '../Layaout/Carousel'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from 'react-router-dom';
import {gsap } from 'gsap';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination , Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination, Autoplay]);



const Product = ({product,addtocart}) => {

  const logoTab = ["akstore"]
  const logo = useRef()
  const {id} = useParams()
    
    const GsapAnimtions =  () => {

       gsap.fromTo(logo.current ,{
        autoAlpha : 0
      },{
        autoAlpha : 1 ,
      duration : 5,
        
      }) 

    }

    useEffect(()=>{
      GsapAnimtions()

    },[])
   

    return  ( <div className="single-product">
        
        <SocialNav />
       
         <div className="back-home">
        <Link to="/">
       
        <i class='bx bx-arrow-back bx-fade-right bx-lg' ></i>
      
        </Link>
        </div>
       
       
        <div className="left"></div>
        <div className="right"></div>
    
        <div className="strips">
          <div className="left-strip"></div>
          <div className="right-strip"></div>
        </div>

        <div className="logo">
          <ul ref={logo}>
          {logoTab.map((e)=> e.split('').map((a,k) => <li key={k} >{ a }</li>  )

           )}
          </ul>
          
           
        </div>
    
       {product.filter(p => p.id === id ).map((p,k) => (
< div key={k} >
<div className="size">

  <span>Price : </span>
  {p.price.formatted_with_symbol}

<i style={{cursor:"pointer"}} class='bx bxs-cart-add bx-tada bx-lg' onClick={() => addtocart(p.id,1)} ></i>
</div>
<div className="product-desc">
  <p  >
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, ullam!
  </p>
</div>
<img className="product-img" src={p.media.source} alt="product" />

<div className="product-text">
<h1 className="product-title">{p.name}</h1>
</div>


<div className="swiper-bottom">
<Swiper effect={'cube'} grabCursor={true} cubeEffect={{
"shadow": true,
"slideShadows": true,
"shadowOffset": 20,
"shadowScale": 0.94
}} pagination={true} autoplay= { { delay : 2000 }  } className="mySwiper">
  {p.assets.map((img,key)  =>    
  <SwiperSlide key={key} ><img src={img.url} /></SwiperSlide>

  )}
</Swiper>

</div>
</div>


       )   )    }
        
    
       
        
    
      </div>
     
    
    )
}

export default Product
