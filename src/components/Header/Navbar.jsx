import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkS }from 'react-scroll'





export default function Navbar({ totalItems }) {
    const location = useLocation()
    



    


    return (



        <section className="nav-wrapper" >
            <div className=" discount "><span>OUR ONLINE STORE IS OPEN IN LEVEL 4. ORDERS WILL BEGIN SHIPPING IN LEVEL 3. NZ FREE SHIPPING.
            </span></div>
            <nav className="navbar  navbar-expand-lg " >
                <div className="container-fluid fixed-top py-4">
                    <a href="#home" className="navbar-brand  text-uppercase font-weight-bold mr-2"><i className='bx bx-headphone bx-spin' ></i>
                        {location.pathname === "/cart" ?
                            <Link to="/" className="navbar-brand" ><b>AK Store</b></Link>
                            : <a href="#home" className="navbar-brand" ><b>AK Store</b></a>

                        }
                    </a>


                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className='bx bx-menu bx-tada bx-rotate-180 bx-lg' style={{ "color": "#fffcfc" }} ></i></button>

                    <div id="navbarSupportedContent" className="collapse navbar-collapse justify-content-center ">
                        {location.pathname === "/"
                            ?
                            
                            <ul className="navbar-nav ml-2"style={{cursor:"pointer"}} >
                                <li className="nav-item active"><a href="#home" className="nav-link text-uppercase font-weight-bold">Home </a></li>
                                <li className="nav-item">
                                    <LinkS
                                        to="Discover"
                                        spy={true} 
                                        smooth={true}
                                         duration={1000}
                                       
                                        className="nav-link text-uppercase font-weight-bold"

                                    >
                              Discover
                                    </LinkS>
                                </li>
                                <li className="nav-item">
                                    <LinkS
                                        to="Gallery"
                                        spy={true} 
                                        smooth={true}
                                         duration={1000}
                                       
                                        className="nav-link text-uppercase font-weight-bold"

                                    >
                               Gallery
                                    </LinkS>
                                </li>
                                <li className="nav-item">
                                    <LinkS
                                        to="Contact"
                                        spy={true} 
                                        smooth={true}
                                         duration={1000}
                                       
                                        className="nav-link text-uppercase font-weight-bold"

                                    >
                                 Contact
                                    </LinkS>
                                </li>
                            </ul>
                            : ""
                        }


                    </div>
                    <ul className="navbar-nav align-items-baseline flex-row social" >
                        {location.pathname === "/" ?
                            (
                                <>
                                    <li className="nav-item" > <i className='bx bx-user bx-sm '></i></li>
                                    <li className="nav-item" > <i className='bx bx-search bx-sm  '></i></li>
                                    <li className="nav-item"  ><Link to="/cart" ><i className='bx bx-shopping-bag bx-sm'></i><span className="badge" style={{ 'backgroundColor': 'red' }}>{totalItems}</span></Link></li>

                                </>
                            )
                            : (<li className="nav-item"  ><Link to="/" ><i className='bx bx-shopping-bag bx-sm'></i><span className="badge" style={{ 'backgroundColor': 'red' }}>{totalItems}</span></Link></li>

                            )

                        }
                    </ul>
                </div>
            </nav>

        </section>


    );
}

