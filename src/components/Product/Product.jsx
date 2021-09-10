import React from 'react'
import {  useParams } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,Pagination , Navigation
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Mousewheel,Pagination,Navigation]);









const Product = ({product,addtocart}) => {

  const {id} = useParams()
    
    console.log(product)

   

    return !product ? <h1>loading</h1>: (
      <section  className="product"  >
        <div className="contaiter-fluid h-50 ">
          <div className="row">
            <div className="col-md-6 ">
            <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{
        "clickable": true
      }}   className="mySwiper">
        {product.map(product =>  product.id === id &&  (
            product.assets.map(img => 
              <SwiperSlide  key={img.id}><img src={img.url} />
              </SwiperSlide>  
              )
         
        ))}
    
        </Swiper> 
            </div>
            <div className="col-md-6  d-flex flex-column justify-content-evenly ">
            {product.map(product =>  product.id === id &&  (
              <>
              <span> SKU : {product.sku} </span>
              <h1> {product.name} </h1>
              <p  dangerouslySetInnerHTML={{__html: product.description}}  ></p>
              <span>{product.price.formatted_with_symbol} </span>
              <div  className="product-add-cart" onClick={ ()=> addtocart(product.id,1)   } >Add To Cart</div>
              <img className="logo" src="/images/pay-pal.png" alt="paypal" />
              </>
        ))}
            </div>
          </div>
        </div>
        <div className="container-fluid h-50 related-product " >
          <div className="row  ">
            <h1 className="d-flex flex-row align-content-center justify-content-center " >You may also like</h1>
          <Swiper slidesPerView={3} spaceBetween={10} navigation={true} pagination={{
        "clickable": true
      }} className="mySwiper">
        {product.map(product =>  product.id === id &&  (
            product.related_products.map(product => 
              <SwiperSlide  key={product.id}>
               <div className="d-flex flex-column align-items-center justify-content-evenly " style={{height:'550px',width:'300px'}} >
                <img className="mb-1 "   width="100%" src={product.media.source} alt="related product" />
                <h4> {product.name} </h4>
                <span> {product.price.formatted_with_symbol} </span>
                <div className="related-btn" onClick={()=>  addtocart(product.id,1) } >Add to cart</div>
               </div>
              </SwiperSlide>  
              )
         
        ))}
    
        </Swiper> 
          </div>
        </div>



      </section>
    )
}

export default Product
