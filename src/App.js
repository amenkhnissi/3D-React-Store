import React, { useState, useEffect } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

//Components
import Carousel from "./components/Layaout/Carousel";
import Home, { Arrow } from "./components/Header/Home";
import Navbar from "./components/Header/Navbar";
import Products from "./components/Product/Products";
import { commerce } from "./lib/Commerce";
import { newfeatures } from "./lib/Commerce";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import Quotes from "./components/Layaout/Quotes";
import Video from "./components/Layaout/Video";
import Features from "./components/Layaout/Features";
import Brands from "./components/Layaout/Brands";
import ContactForm from './components/Footer/ContactForm'
import Checkout from "./Checkout/Checkout";



export default function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [features, setFeatures] = useState([]);
  const [Loading, SetLoading] = useState(true)







  const fetchProducts = async () => {

    const { data } = await commerce.products.list()
    setProducts(data)
    SetLoading(false)



  }


  const fetchCart = async () => {

    setCart(await commerce.cart.retrieve())

  }

  const fetchFeatures = async () => {

    const { data } = await newfeatures.products.list()
    setFeatures(data)


  }

  const addToCart = async (productid, quantity) => {
    const { cart } = await commerce.cart.add(productid, quantity)
    setCart(cart)



  }
  const updateCart = async (productid, quantity) => {
    const { cart } = await commerce.cart.update(productid, { quantity })
    setCart(cart)



  }
  const removeFromCart = async (productid) => {


    const { cart } = await commerce.cart.remove(productid)
    setCart(cart)
  }
  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }




  useEffect(() => {

    fetchProducts()
    fetchCart()
    fetchFeatures()




  }, [])
  return Loading ?
    <div style={{ width: '100%', height: '100vh', display: 'grid', placeItems: 'center' }}>
      <iframe src="https://giphy.com/embed/VseXvvxwowwCc" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

    </div>
    : (
      <Router>
        <div>
          <Navbar totalItems={cart.total_items} />
          <Switch>

            <Route exact path="/" >
              <>
                {/* <Home /> */}
                <Carousel features={features} />
                <Quotes />
                <Arrow />

                <Video />
                 <Features />
                <Brands />
                <ContactForm />


              </>
            </Route>

            <Route exact path="/products"   >
              <Products products={products} addtocart={addToCart} />
              <Arrow />

            </Route>

            <Route exact path="/cart">
              <Cart
                cart={cart}
                addcart={addToCart}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
                emptyCart={emptyCart}
              />
            </Route>

            <Route exact path="/product/:id/:prodName" >
              <Product product={products} addtocart={addToCart} />
              <Arrow />

            </Route>
              <Route exact path='/checkout' >
                <Checkout cart={cart} />
              </Route>
          </Switch>
        </div>
      </Router>





    );
}
