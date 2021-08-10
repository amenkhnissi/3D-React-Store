import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.js'


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
export default function Navbar() {
    
  return (
      
 
    <nav className="navbar navbar-expand-lg  py-3 "   >
       
        <div className="container">
            <a href="#home" className="navbar-brand col-md-6 text-uppercase font-weight-bold mr-2"><i class='bx bx-headphone bx-spin' ></i> <b>AK Store</b></a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className='bx bx-menu bx-tada bx-rotate-180 bx-lg' style={{"color":"#fffcfc"}} ></i></button>
            
            <div id="navbarSupportedContent" className="collapse navbar-collapse col-md-6 justify-content-between align-items-center">
                <ul className="navbar-nav ml-2">
                    <li className="nav-item active "><a href="#home" className="nav-link text-uppercase font-weight-bold">Home </a></li>
                    <li className="nav-item "><a href="!#" className="nav-link text-uppercase font-weight-bold">About</a></li>
                    <li className="nav-item"><a href="!#" className="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                    <li className="nav-item"><a href="!#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                </ul>
                <ul className="navbar-nav social">
                    <li className="nav-item"><a href="!#" className="nav-link "><i className='bx bxs-shopping-bags bx-tada bx-md'  ></i></a></li>
                    <li className="nav-item"><a href="!#" className="nav-link "><i className='bx bxs-cart-alt bx-tada bx-md' ></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
    
  );
}

