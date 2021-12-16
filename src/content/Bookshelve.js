import React from "react";
import { Items } from "./Items";
import Item from "./Item";
import "./style.css";
function Bookshelve() {
  return (
    <div id="main">
      <div class="section pt-4 pb-0" style={{ background: "#f7f7f7" }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="text-center mb-1 section-pretitle">Discover</div>
              <h2 class="text-center section-title pb-3">Our category</h2>
              <div class="organik-seperator center">
                <span class="sep-holder">
                  <span class="sep-line"></span>
                </span>
                <div class="sep-icon">
                  <i class="organik-flower"></i>
                </div>
                <span class="sep-holder">
                  <span class="sep-line"></span>
                </span>
              </div>
            </div>
          </div>
          <div id="forun" class="row">
				<div class="product-grid masonry-grid-post">
           
              <section>
                {Items.map((meals) => (
                  <Item key={meals.id} booke={meals} />
                ))}
              </section>
            </div>
          </div>
        </div>
        </div>
        </div>
    
  );
}

export default Bookshelve;
