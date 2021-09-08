import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';



const Brands = () => {
    const brands = [
        {
            logo : "/images/Sony.png"
        },
        {
            logo : "/images/apple.png"
        },
       
    ]
    return (
        <div className="brands" >
            
            {brands.map((brand,key) =>   
            <ScrollAnimation key={key} animateIn="fadeIn" delay={1000 * key}  >
                       <img    src={brand.logo} style={{height:"100px",width:"200px",objectFit:'contain'}}  alt="brand"  />

          </ScrollAnimation>
           
           
            
            )}

            
        </div>
    )
}

export default Brands
