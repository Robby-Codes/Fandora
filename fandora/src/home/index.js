import React from "react";
import { Link } from "react-router-dom";
import mcar from "../assets/im1.png";
import jet from "../assets/jet1.png";
import star from "../assets/star.png";
import down_arrow from "../assets/down-arrow.png";
import ac_shelby_cobra from "../assets/ac-cobra.png";
import audi_r8 from "../assets/audi-r8.png";
import audi_r8_spyder from "../assets/audi-r8-spyder.png";
import bugatti_chiron from "../assets/bugatti-chiron-.jpg";
import chevrolet_camaro_ss from "../assets/chevrolet-camaro-ss.png";
import delorean from "../assets/delorean.jpg";
import ford_thunderbird from "../assets/ford-thinderbird-1961.png";
import mclaren_f1 from "../assets/mclaren-f1-1994.jpg";
import peogeot_onyx from "../assets/peogeot-onyx.png";
import mc from "../assets/mc.png";
import visa from "../assets/visa.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <IntroSection />
      <ProductSection />
      <Footer />
    </>
  );
};

const IntroSection = () => {
  return (
    <>
      <section id="intro-section">
        <div className="intro-content-container">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <div className="intro-message">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
              distinctio obcaecati ullam fugit quos iusto asperiores nobis sequi
              ratione ipsam consequuntur tempore earum accusamus eum. Minima
              reprehenderit nemo cupiditate laudantium.
            </p>
            <div>
              <div className="banner-btn">
                <h1>COMING</h1>
                <p>VERY SOON</p>
              </div>
              <div className="btn-extra">
                <h1>Fandora's</h1>
                <small>Limited Exclusive</small>
              </div>
            </div>
          </div>
          <div className="banner-image">
            <img src={mcar} alt="image of car" />
          </div>
          <div className="intro-bonus">
            <div className="bonus-image">
              <img className="jet1" src={jet} />
              <img className="jet2" src={jet} />
            </div>
            <div className="bonus-text">
              <h1>Jet Engine Augmentation</h1>
              <p className="mark2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ducimus voluptatum, assumenda et dicta nostrum exercitationem
                deleniti officia quo ipsam veniam error tempore sunt? Debitis
                atque sit quia porro natus?
              </p>
              <small>Lorem ipsum dolor sit amet</small>
            </div>
          </div>
          <div className="intro-review">
            <div className="media">
              <div className="media1">
                <h1>LO-FI HH</h1>
              </div>
              <div className="media2">
                <h1>THE MONDAY TIMES</h1>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <div className="media3">
                <h1>YOUBAR</h1>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
            <div className="quote">
              <h1>
                <em>"This is an awesome quote!"</em>
              </h1>
              <button className="intro-button">
                <img src={down_arrow} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ProductSection = () => {
  return (
    <>
      <section id="product-section">
        <h1>CAR COLLECTION</h1>
        <Product
          car_name="AC SHELBY COBRA"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="170,000.00"
          car_image={ac_shelby_cobra}
        />
        <Product
          car_name="AUDI R8"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="169,000.00"
          car_image={audi_r8}
        />
        <Product
          car_name="AUDI R8 SPYDER"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="219,445.00"
          car_image={audi_r8_spyder}
        />
        <Product
          car_name="BUGATTI CHIRON"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="3,000,000.00"
          car_image={bugatti_chiron}
        />
        <Product
          car_name="CHEVROLET CAMARO SS"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="25,000.00"
          car_image={chevrolet_camaro_ss}
        />
        <Product
          car_name="AC SHELBY COBRA"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="170,000.00"
          car_image={ac_shelby_cobra}
        />
        <Product
          car_name="DELOREAN"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="999,999,999.00"
          car_image={delorean}
        />
        <Product
          car_name="FORD THUNDERBIRD 1961"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="27,000.00"
          car_image={ford_thunderbird}
        />
        <Product
          car_name="MCLAREN F1 1994"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="14,500,000.00"
          car_image={mclaren_f1}
        />
      </section>
    </>
  );
};

const Product = ({ car_name, car_description, car_price, car_image }) => {
  return (
    <div className="car-container">
      <h1>{car_name}</h1>
      <div className="car-content">
        <div className="car-info">
          <p>{car_description}</p>
          <p>${car_price}</p>
          <div className="button-container">
            <Link href="cart.html">
              <button>Buy Now</button>
            </Link>
            <button className="car-add">Add to Cart</button>
          </div>
        </div>
        <div className="car-image">
          <img className="car-pic" src={car_image} />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-line"></div>
          <div class="footer-links">
            <Link>Fandora</Link>
            <Link>News</Link>
            <Link>Support</Link>
            <Link>Career</Link>
            <Link>Investor</Link>
            <Link>Media</Link>
            <Link>contact</Link>
          </div>
          <div class="other-links">
            <small>
              <span>Site Created By: Roberto Guerra</span>
            </small>
            <small>
              <Link>Lorem</Link>
            </small>
            <small>
              <Link>Ipsum</Link>
            </small>
            <small>
              <Link>Amet</Link>
            </small>
          </div>
          <div class="footer-images">
            <img src={mc} />
            <img src={visa} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
