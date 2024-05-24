import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import StarRating from "./StarRating";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.count);
  const quantities = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems)

  const calculateSubtotal = (item) => {
    const quantity = quantities[item.id] || 1;
    return quantity * item.price;
  };

  const subtotal = cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto p-5 rounded">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div className="product-box row my-3 p-3 bg-light rounded" key={index}>
                  <div className="col-md-3 d-flex justify-content-center">
                    <img className="img-thumbnail" src={item.thumbnail} alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <StarRating rating={item.rating} />
                  </div>
                  <div className="col-md-3">
                    <select
                      value={quantities[item.id] || 1}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                    <h6>{item.price}</h6>
                    <button onClick={() => handleRemoveFromCart(index)} className="btn btn-danger text-white">
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-12 dflex-centered">
                    <img
                      className="img-product"
                      src="https://static.vecteezy.com/system/resources/previews/005/073/073/non_2x/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                      alt="Empty Cart"
                    />
                  </div>
                  <div className="col-lg-12 dflex-centered">
                    <Link to={"/product"}>
                      <button className="btn btn-primary">Product Page</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between">
                <span>Sub Total</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="col-md-12 d-flex justify-content-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="col-md-12 d-flex justify-content-between">
                <span>Total</span>
                <span>₹ {subtotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
