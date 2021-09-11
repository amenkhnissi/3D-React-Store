import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Cart = ({cart  , updateCart , removeFromCart , emptyCart}) => {
    if(!cart.line_items) return "loading"
    if(!cart) return "loading"
    const IsEmpty =() =>
       <div style={{"display" : "grid","placeItems" :"center" , 'color' : 'white' , 'height' : 'calc(100vh - 80px)'}}>
        <h1 >Your shopping cart is empty ! Go shopping Now <Link to='/products' class="fa fa-shopping-bag " style={{"color" : "blue"}} aria-hidden="true">Shop Now</Link></h1>
        </div>
   
  
    return (
        <section class="h-100 gradient-custom">
          { cart.total_items !== 0 ? (

<div class="container cart p-1">
<div class="row cart-flex  d-flex justify-content-center " style={{margin : "0.5rem 0" }}>
  <div class="col-md-8">
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between py-3">
        <h5 class="mb-0">Cart - {cart.total_items} items</h5>
        <button type="button" class="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item" 
                onClick={()=> emptyCart() }
                >
                  Empty cart
                </button>
      </div>
      <div class="card-body">
          {cart.line_items.map((item)=> 
            <div class="row" key={item.id}>
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src={item.media.source}
                  class="w-100 h-100" />
                <a href="#!">
                  <div class="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.3)"}}></div>
                </a>
              </div>
            </div>
{console.log(cart)}
            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
              <p><strong>{item.name}</strong></p>
              <p>Color: blue</p>
              <p>Size: M</p>
              <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item" 
                onClick={()=> removeFromCart(item.id)}
                >
                <i class="fas fa-trash"></i>
              </button>
              <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                title="Move to the wish list">
                <i class="fas fa-heart"></i>
              </button>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="d-flex mb-4" style={{"maxWidth": "300px"}}>
                <button class="btn btn-primary px-3 me-2"
                onClick={()=> updateCart(item.id,item.quantity - 1 )}
                 >
                  <i class="fas fa-minus"></i>
                </button>

                <div class="form-outline d-grid " style={{"placeItems": "center"}}>
                  <input id="form1" value={item.quantity}  type="number" class="form-control"
                 
                  />                </div>

                <button class="btn btn-primary px-3 ms-2"
               onClick={()=> updateCart(item.id,item.quantity + 1 )}
                >
                  <i class="fas fa-plus"  ></i>
                </button>
              </div>

              <p class="text-start text-md-center">
                <strong>{item.line_total.formatted_with_symbol}</strong>
              </p>
            </div>
            <hr class="my-4" />

          </div>
             
          
          )}
      

    

       
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-body">
        <p><strong>Expected shipping delivery</strong></p>
        <p class="mb-0">12.10.2020 - 14.10.2020</p>
      </div>
    </div>
    <div class="card mb-4 mb-lg-0">
      <div class="card-body">
        <p><strong>We accept</strong></p>
        <img class="me-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa" />
        <img class="me-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          alt="American Express" />
        <img class="me-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          alt="Mastercard" />
        <img class="me-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
          alt="PayPal acceptance mark" />
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4">
      <div class="card-header py-3">
        <h5 class="mb-0">Summary</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>{cart.subtotal.formatted_with_symbol}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Gratis</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p class="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>{cart.subtotal.formatted_with_symbol}</strong></span>
          </li>
        </ul>

        <button type="button" class="btn btn-primary btn-lg btn-block">
          Go to checkout
        </button>
      </div>
    </div>
  </div>
</div>
</div>
          ) : <IsEmpty />  }  
 
</section>
        
    )
}

export default Cart
