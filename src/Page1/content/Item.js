import React from "react";
import './style.css'
const Item = ({ booke }) => {
  const { Image1, Image2, Image3, name, id } = booke;
  return (
    
        <div class="col-md-4 col-lg-4 col-xs-6 product-item masonry-item text-center">
          <div class="product-thumb test-div">
            <a class="test-div-inner" href={Image1}>
              <img
                src={Image2}
                alt=""
                class="test-image"
                height="1000"
                width="1000"
              />
            </a>
          </div>
          <div class="product-info">
            <a href={Image3}>
              <h2 class="title" data-order={id}>
                {name}
              </h2>
            </a>
          </div>
        </div>
  
  );
};

export default Item;
