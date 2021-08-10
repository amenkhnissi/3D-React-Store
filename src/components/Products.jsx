import React from 'react'

const Products = () => {
    const products = [
        {
            name : "H-phones",
            price : "50",
            desc: "High Quality",
            image : "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

        },
        {
            name : "H-phones",
            price : "100",
            desc: "High Quality",
            image : "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

        },
        {
            name : "H-phones",
            price : "100",
            desc: "High Quality",
            image : "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

        }
    ]
    return (
        <div className="Products">
            <div className="container">
                <div class="row">
                    {products.map((val,key) =>
                     
                        <div className="col-md-4 mb-2" key={key} >
                            <div class="card">
  <img class="card-img-top" src={val.image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{val.name}</h5>
    <p class="card-text">{val.desc}</p>
    <span>{val.price} $</span>
  </div>
</div>
                        </div>

                    )}
                </div>
            </div>

      </div>
    )
}

export default Products
