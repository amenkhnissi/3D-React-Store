import React from "react";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="features" id="Discover">
      <div className="container  p-3 ">
        <div className="row">
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center "
            style={{ color: "white", textAlign: "center" }}
          >
            <Bounce left>
              <h3>New Collection</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                consectetur.
              </p>
              <Link to="/products">
                {" "}
                <button className="btn btn-dark">Find Out more</button>
              </Link>
            </Bounce>
          </div>
          <div className="col-md-6">
            <Bounce right>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.unsplash.com/photo-1620578077612-b0fa340237de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                alt="news"
              />
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
