import React  from 'react'
import { Link } from 'react-router-dom'



const Products = ( { products , addtocart  }) => {
  
    
    return  (
        <section className="Products mt-3" id="Products">
          <div className="container mt-3 mb-3" style={{display : "grid" , placeItems : "Center" , color : "white"}}><h1> Headphones </h1></div>
            <div className="container"style={{minHeight:"100vh" }} >
                <div class="row">
                    {products.map((product,key) => product.categories.map(cat  => cat.name === "Headphones" &&
                                     <div className="col-md-3 mb-2" key={key}  >
                                     <div class="card">
                                     <Link to={`/product/${product.id}/${product.name}`}  > 
   
         <img class="card-img-top" src={product.media.source} alt="" />
         </Link>
   
         <div class="card-body">
           <h5 class="card-title"> {product.name} </h5>
           <span>{product.price.formatted_with_symbol  }</span>
           <span className="add-to-cart" style={{cursor : 'pointer'}}><i class='bx bxs-cart-add bx-tada  bx-md' onClick={()=>addtocart(product.id,1)} ></i></span>
         </div>
       </div>
                                     
            
                               </div>
                    )

               


                    )}
                     
              

                   
                </div>
            </div>
            <div className="container mt-3 mb-3" style={{display : "grid" , placeItems : "Center" , color : "white"}}><h1> Earphones </h1></div>
            <div className="container"style={{minHeight:"100vh" }} >
                <div class="row">
                    {products.map((product,key) => product.categories.map(cat  => cat.name === "Earphones" &&
                                     <div className="col-md-3 mb-2" key={key}  >
                                     <div class="card">
                                     <Link to={`/product/${product.id}/${product.name}`}  > 
   
         <img class="card-img-top" src={product.media.source} alt="" />
         </Link>
   
         <div class="card-body">
           <h5 class="card-title"> {product.name} </h5>
           <span>{product.price.formatted_with_symbol  }</span>
           <span className="add-to-cart" style={{cursor : 'pointer'}}><i class='bx bxs-cart-add bx-tada  bx-md' onClick={()=>addtocart(product.id,1)} ></i></span>
         </div>
       </div>
                                     
            
                               </div>
                    )

               


                    )}
                     
              

                   
                </div>
            </div>

      </section>
    )   
}

export default Products
