import React from 'react';

const Products = ({ products }) => {
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
