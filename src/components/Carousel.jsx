import React from 'react'

const Carousel = () => {
    return (
      <div className="Features d-flex justify-content-center align-items-center ">
        <div className="container ">
          <div className="row" >
          <div className=" col-md-6  col-lg-6 mt-3  ">
          <h4 className="carousel-desc">Discover the new AK Store collection online.</h4>
      </div>
        <div id="carouselExampleIndicators" class="carousel slide col-md-6 col-lg-6 mt-3" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
          <h5>New Collection</h5>
          <p>High Quality</p>
        </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Second slide"/>
            <div class="carousel-caption  d-none d-md-block">
          <h5 style={{"color":"black"}}>New Collection</h5>
          <p style={{"color":"black"}}>High Quality</p>
        </div>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Second slide"/>
            <div class="carousel-caption  d-none d-md-block">
          <h5 style={{"color":"black"}}>New Collection</h5>
          <p style={{"color":"black"}}>High Quality</p>
        </div>
          </div>
         
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      </div>
     </div>
    )
}

export default Carousel
