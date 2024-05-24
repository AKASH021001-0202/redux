import React from 'react';
import { useDispatch } from 'react-redux';

const Products = ({ products }) => {

  const dispatch = useDispatch();  
  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-6 mx-auto p-5 rounded" key={index}>
              <div className="product-box row p-3 rounded">
                <div className="col-md-4 d-flex justify-content-center">
                  <img className="img-thumbnail" src={product.thumbnail} alt={product.title} />
                </div>
                <div className="col-md-8">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  {/* Add additional product information here */}
                  <h6>₹{product.price}</h6>
                  {/* Add buttons or actions here */}
                 < button className='btn btn-primary' onClick={()=>dispatch( { type : 'add_to_cart' , product: { ...product } })}>ADD To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Products.defaultProps = {
    products: [],
  };
export default Products;
