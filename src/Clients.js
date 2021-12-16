import React from "react";

function Clients() {
  return (
    <div class="section section-bg-7 section-cover pt-4 pb-8">
      <div class="col-sm-12">
        <h2 class="text-center section-title pb-4">Clients We Served 👨🏻‍🍳</h2>
        <div class="organik-seperator center">
          <span class="sep-holder">
            <span class="sep-line"></span>
          </span>

          <span class="sep-holder">
            <span class="sep-line"></span>
          </span>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div
            class="testimonial-carousel organik-testimonial style-3 owl-carousel "
            
			data-auto-play="true"
              data-desktop="3"
              data-laptop="3"
              data-tablet="2"
              data-mobile="1"
              style={{ opacity: "1", display: "block" }}
            >
              <div class="owl-wrapper-o'uter">
                <div
                  class="owl-wrapper"
                  style={{
                    width: "3156px",
                    left: "0px",
                    display: "block",
                     transition: "all 800ms ease 0s",
                     transform: "translate3d(-100px, 0px, 0px)",
                  }}
                >
                  <div class="owl-item" style={{ width: "263px" }}>
                    <div class="testi-item">
                      <div class="text">
                        I take pride in calling myself a foodie and FOOD HUB
                        Street Style Halaal Burger complement almost all my food
                        styles. They are refreshingly good and I always carry
                        one of them.
                      </div>
                      <div class="info">
                        <div class="photo">
                          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" alt="" />
                        </div>
                        <div class="author">
                          <span class="name">Wahab Al Khumeini</span>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div class="owl-item" style={{ width: "263px" }}>
                    <div class="testi-item">
                      <div class="text">
                        I have tried all flavours of FOOD HUB Street Dosa and
                        they have the most authentic taste. Guava Chilli is my
                        favourite. You can try them and you’ll like them too.
                      </div>
                      <div class="info">
                        <div class="photo">
                          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"/> </div>
                        <div class="author">
                          <span class="name">Nitish Chaubey</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-item" style={{ width: "263px" }}>
                    <div class="testi-item">
                      <div class="text">
                        Love this Milk shake. It is healthy, natural and so
                        delicious. Perfect as an evening snack.
                      </div>
                      <div class="info">
                        <div class="photo">
                          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" alt="" />
                        </div>
                        <div class="author">
                          <span class="name">Jaikrit Rana</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-item" style={{ width: "263px" }}>
                    <div class="testi-item">
                      <div class="text">
                        Best chocolate shake till now. It is thick, creamy and
                        healthy too.
                      </div>
                      <div class="info">
                        <div class="photo">
                          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" alt="" />
                        </div>
                        <div class="author">
                          <span class="name">Sanjay Pundir</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-item" style={{ width: "263px" }}>
                    <div class="testi-item">
                      <div class="text">
                        FOOD HUB Street Style drinks have been a savior this
                        lockdown. The taste takes me on a nostalgic ride, back
                        to the days when I use to devour on street food.
                      </div>
                      <div class="info">
                        <div class="photo">
                          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" alt="" />
                        </div>
                        <div class="author">
                          <span class="name">Harish Baweja</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="owl-controls clickable">
                <div class="owl-pagination">
                  <div class="owl-page">
                    <span class=""></span>
                  </div>
                  <div class="owl-page active">
                    <span class=""></span>
                  </div>
                  <div class="owl-page">
                    <span class=""></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
