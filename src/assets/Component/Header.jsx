import React from "react";

const Header = () => {
  return (
    <header className="bg-dark ">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="text-center text-white">React Redux</h1>
          </div>
          <div className="col-lg-4">
            <button className="btn btn-danger "> Add to cart</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
