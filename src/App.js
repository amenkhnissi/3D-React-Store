import React from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Loader from './components/Loader';
import Products from "./components/Products";



export default function App() {
  
    
  return (
    <>
      <Navbar />
       <Home />
     <Carousel />
     <Products />
     
      
      
     
    </>
  );
}
