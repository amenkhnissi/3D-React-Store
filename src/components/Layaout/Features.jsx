import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


const Features = () => {
    return (
        <div className="features">
          <div className="container  p-3 ">
              <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center " style={{color:"white",textAlign:"center"}} >
              <ScrollAnimation animateIn="fadeIn" delay={1000}  >
              <h3>New Collection</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, consectetur.</p>
                <button className="btn btn-dark" >Find Out more</button>
              </ScrollAnimation>
              
             </div>
              <div className="col-md-6">
                  <img style={{width:"100%",height:"100%"}} src="https://images.unsplash.com/photo-1620578077612-b0fa340237de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="news" /> 
              </div>
              </div>
              
          </div>

            
        </div>
    )
}

export default Features
