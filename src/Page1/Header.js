import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <header id="header" className="header header-desktop header-2 header-355">
        <div className="top-search">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form>
                  <input
                    type="search"
                    className="top-search-input"
                    name="s"
                    placeholder="What are you looking for?"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="#" id="logo">
                <img
                  className="logo-image logo-image1"
                  src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e"
                  alt="Organik Logo"
                />
              </a>
              <button type="button"class="btn btn-danger" data-bs-toggle="popover" title="Welcome..." data-bs-content="We are dedicated 24/7 to satisfy your tastebuds without compromising on ur health.">FOOD HUB</button>
            </div>
            <div className="col-md-9">
              <div className="header-right">
                <nav className="menu">
                  <ul className="main-menu">
                    <li className="">
                      <a href="#">Home</a>
                    </li>
                    <li className="">
                      <a href="#">About Us</a>
                    </li>
                    <li className="">
                      <a href="#">Recipes</a>
                    </li>
                    <li className="">
                      <a href="#">Blog</a>
                    </li>
                    <li className="">
                      <a href="#">Contact</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Categories</a>
                      {/* <i className="sub-menu-toggle fa fa-angle-down"></i>  */}
                      <ul className="sub-menu">
                        <li>
                          <a href="#">FOOD HUB Pizza</a>
                        </li>
                        <li>
                          <a href="#">FOOD HUB Burger</a>
                        </li>
                        <li>
                          <a href="#">FOOD HUB Sambhar-Dosa</a>
                        </li>
                        <li>
                          <a href="#">Milk Shake</a>
                        </li>
                        <li>
                          <a href="#">Hot Chocolate</a>
                        </li>
                        <li>
                          <a href="#">Mango Shake</a>
                        </li>
                        <li>
                          <a href="#">Festive Pack</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="btn-wrap">
                  <div className="mini-cart-wrap">
                    <div className="mini-cart">
                      <div
                        className="mini-cart-icon cart-count"
                        id="cart-count"
                        data-count="0"
                      >
                        <i>🌮</i>
                      </div>
                    </div>
                    <div
                      className="widget-shopping-cart-content"
                      id="cart-items"
                      style={{ top: "121px" }}
                    >
                      <p className="mt-1 pl-3 text-left">Cart is empty.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
