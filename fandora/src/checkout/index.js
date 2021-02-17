import React from "react";
import { Link } from "react-router-dom";
import ac_shelby_cobra from "../assets/ac-cobra.png";
import audi_r8 from "../assets/audi-r8.png";
import audi_r8_spyder from "../assets/audi-r8-spyder.png";
import bugatti_chiron from "../assets/bugatti-chiron-.jpg";
import chevrolet_camaro_ss from "../assets/chevrolet-camaro-ss.png";
import delorean from "../assets/delorean.jpg";
import ford_thunderbird from "../assets/ford-thinderbird-1961.png";
import mclaren_f1 from "../assets/mclaren-f1-1994.jpg";
import peogeot_onyx from "../assets/peogeot-onyx.png";
import "./checkout.css";

const CheckoutPage = () => {
  return (
    <>
      <NavBar3 />
      <CartAndCheckoutSection />
    </>
  );
};

const NavBar3 = () => {
  return (
    <nav id="navigation-3">
      <div className="nav-btn-container-3">
        <Link to="/">
          <h1 className="nav-home-3">FANDORA</h1>
        </Link>
        <Link to="/account">
          <h1 className="nav-buttons-3">ACCOUNT</h1>
        </Link>
        <Link to="/checkout">
          <h1 className="nav-buttons-3">
            CART<sub>0</sub>
          </h1>
        </Link>
      </div>
      <div className="nav-line-3"></div>
      <div className="message-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae libero
        tempore.
      </div>
    </nav>
  );
};

const CartAndCheckoutSection = () => {
  return (
    <section id="cart-and-checkout-section">
      <div className="section-container">
        <div className="cart">
          <div className="cart-message">
            <h1>THANK YOU FOR SHOPPING AT FANDORA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="product-num">
            <h1>
              YOUR CART (<span className="cart-amount">9</span>)
            </h1>
          </div>
          <div className="products-container">
            <div className="cart-product ac-shelby-cobra">
              <div className="product-image">
                <img src={ac_shelby_cobra} />
              </div>
              <div className="product-info">
                <h1>AC SHELBY COBRA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-ac-shelby-cobra">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="ac-shelby-cobra-price">170,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product audi-r8">
              <div className="product-image">
                <img src={audi_r8} />
              </div>
              <div className="product-info">
                <h1>AUDI R8</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-audi-r8">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="audi-r8-price">169,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product bugatti-chiron">
              <div className="product-image">
                <img src={bugatti_chiron} />
              </div>
              <div className="product-info">
                <h1>BUGATTI CHIRON</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-bugatti-chiron">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="bugatti-chiron-price">3,000,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product chevrolet-camaro-ss">
              <div className="product-image">
                <img src={chevrolet_camaro_ss} />
              </div>
              <div className="product-info">
                <h1>CHEV. CAMARO SS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-chevrolet-camaro-ss">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="chevrolet-camaro-ss-price">25,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product delorean">
              <div className="product-image">
                <img src={delorean} />
              </div>
              <div className="product-info">
                <h1>DELOREAN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-delorean">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="delorean-price">999,999,999.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product ford-thunderbird">
              <div className="product-image">
                <img src={ford_thunderbird} />
              </div>
              <div className="product-info">
                <h1>F. THUNDERBIRD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-ford-thunderbird">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="ford-thunderbird-price">27,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product mclaren-f1">
              <div className="product-image">
                <img src={mclaren_f1} />
              </div>
              <div className="product-info">
                <h1>MCLAREN F1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-mclaren-f1">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="mclaren-f1-price">14,000,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product peugeot-onyx">
              <div className="product-image">
                <img src={peogeot_onyx} />
              </div>
              <div className="product-info">
                <h1>PEUGEOT ONYX</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-peugeot-onyx">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="peugeot-onyx-price">2,500,000.00</span>
                </p>
              </div>
            </div>
            <div className="cart-product audi-r8-spyder">
              <div className="product-image">
                <img src={audi_r8_spyder} />
              </div>
              <div className="product-info">
                <h1>AUDI R8 SPYDER</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <button className="remove-audi-r8-spyder">REMOVE</button>
                </div>
              </div>
              <div className="product-price">
                <p>
                  $<span className="audi-r8-spyder-price">219,000.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout">
          <h1>SUMMARY</h1>
          <div>
            <h2>SUBTOTAL</h2>
            <p>
              $<span>0.00</span>
            </p>
          </div>
          <div>
            <h3>ESTIMATED SHIPPING AND HANDLING</h3>
            <h3>Standard: Free / Arrives 25-30 Days</h3>
            <p>$0.00</p>
          </div>
          <div>
            <h3>TAX</h3>
            <p>
              $<span>0.00</span>
            </p>
          </div>
          <div className="total-price">
            <h1>TOTAL</h1>
            <p>
              $<span className="t_price">1,020,109,999.00</span>
            </p>
          </div>
          <div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
