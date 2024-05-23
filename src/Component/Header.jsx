import React from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const countReducer = useSelector((state)=>state.countReducer)
  return (
    <header className="bg-dark ">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="text-center text-white">React Redux</h1>
          </div>
          <div className="col-lg-4">
            <button className="btn btn-danger "> Add to cart {countReducer.count}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
