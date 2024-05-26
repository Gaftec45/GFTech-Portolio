import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/ZindexSec.css';
import def  from '../Image/Logistics.jpeg'

const ZindexSec = () => {
  return (
    <section className="zindex-sec container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="zindex-container position-relative">
        <div className="product-card">
          <img src={ def } alt="Product 1" className="product-image" />
          <div className="product-description">
            <h3>Product 1</h3>
            <p>This is a brief description of Product 1. It has all the features you need.</p>
          </div>
        </div>
        <div className="product-card">
          <img src={ def } alt="Product 2" className="product-image" />
          <div className="product-description">
            <h3>Product 2</h3>
            <p>This is a brief description of Product 2. It stands out with its unique design.</p>
          </div>
        </div>
        <div className="product-card">
          <img src={ def } alt="Product 3" className="product-image" />
          <div className="product-description">
            <h3>Product 3</h3>
            <p>This is a brief description of Product 3. Experience the best quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZindexSec;