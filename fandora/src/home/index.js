import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./homeanimations";
import { data } from "../other/data";
import mcar from "../assets/im1.png";
import jet from "../assets/jet1.png";
import star from "../assets/star.png";
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

const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <NavBar1 />
        <Footer />
      </motion.div>
    </>
  );
};

const NavBar1 = () => {
  const [cart, setCart] = useState(0);
  const productClick = () => {
    document
      .getElementById("product-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  let num_of_items = 0;
  for (const [key, value] of Object.entries(data)) {
    if (value[0] === true) {
      num_of_items += 1;
    }
  }
  return (
    <>
      <nav id="navigation">
        <div className="nav-btn-container">
          <Link to="/">
            <h1 className="nav-home">FANDORA</h1>
          </Link>
          <Link to="/" className="product-link" onClick={() => productClick()}>
            <h1 className="nav-buttons">PRODUCTS</h1>
          </Link>
          <Link to="/account">
            <h1 className="nav-buttons">ACCOUNT</h1>
          </Link>
          <Link to="/checkout">
            <h1 className="nav-buttons">
              CART<sub>{num_of_items}</sub>
            </h1>
          </Link>
        </div>
        <div className="nav-line"></div>
        <div className="message">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          libero tempore.
        </div>
      </nav>
      <IntroSection />
      <ProductSection cart={cart} setCart={setCart} />
    </>
  );
};

const IntroSection = () => {
  const introButtonClick = () => {
    document
      .getElementById("product-section")
      .scrollIntoView({ behavior: "smooth" });
  };
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
              <button
                className="intro-button"
                onClick={() => introButtonClick()}
              ></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const buttons = [];
let count = 0;
const ProductSection = ({ cart, setCart }) => {
  const addCart = (btn) => {
    count += 1;
    if (buttons.includes(btn) === false) {
      setCart(cart + 1);
      buttons.push(btn);
    } else {
      setCart(cart - 1);
      const index = buttons.indexOf(btn);
      if (index > -1) {
        buttons.splice(index, 1);
      }
    }
  };
  return (
    <>
      <section id="product-section">
        <h1>CAR COLLECTION</h1>
        <Product
          car_name="AC SHELBY COBRA"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="170,000.00"
          car_image={ac_shelby_cobra}
          btn_id={1}
          addCart={addCart}
        />
        <Product
          car_name="AUDI R8"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="169,000.00"
          car_image={audi_r8}
          btn_id={2}
          addCart={addCart}
        />
        <Product
          car_name="AUDI R8 SPYDER"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="219,445.00"
          car_image={audi_r8_spyder}
          btn_id={3}
          addCart={addCart}
        />
        <Product
          car_name="BUGATTI CHIRON"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="3,000,000.00"
          car_image={bugatti_chiron}
          btn_id={4}
          addCart={addCart}
        />
        <Product
          car_name="CHEVROLET CAMARO SS"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="25,000.00"
          car_image={chevrolet_camaro_ss}
          btn_id={5}
          addCart={addCart}
        />
        <Product
          car_name="DELOREAN"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="999,999,999.00"
          car_image={delorean}
          btn_id={7}
          addCart={addCart}
        />
        <Product
          car_name="FORD THUNDERBIRD 1961"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="27,000.00"
          car_image={ford_thunderbird}
          btn_id={8}
          addCart={addCart}
        />
        <Product
          car_name="MCLAREN F1 1994"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="14,500,000.00"
          car_image={mclaren_f1}
          btn_id={9}
          addCart={addCart}
        />
        <Product
          car_name="PEOGEOT ONYX"
          car_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus voluptatum, assumenda et dicta nostrum exercitationem deleniti officia quo ipsam veniam error tempore sunt? Debitis atque sit quia porro natus?"
          car_price="2,500,000.00"
          car_image={peogeot_onyx}
          btn_id={6}
          addCart={addCart}
        />
      </section>
    </>
  );
};

const Product = ({
  car_name,
  car_description,
  car_price,
  car_image,
  btn_id,
  addCart,
}) => {
  const [button_text, setButton_Text] = useState("Add to Cart");
  const changeBtnDesign = (btn_id) => {
    if (button_text === "Add to Cart") {
      setButton_Text("Remove");
    } else {
      setButton_Text("Add to Cart");
    }
  };
  const rememberStyle = () => {
    if (data[btn_id][0] === true) {
      setButton_Text("Remove");
    }
  };
  useEffect(() => {
    rememberStyle();
  }, []);

  return (
    <div className="car-container">
      <h1>{car_name}</h1>
      <div className="car-content">
        <div className="car-info">
          <p>{car_description}</p>
          <p>${car_price}</p>
          <div className="button-container">
            <Link to="/checkout">
              <button
                onClick={() => {
                  data[btn_id][0] = true;
                }}
              >
                Buy Now
              </button>
            </Link>
            <button
              id={btn_id}
              className="car-add"
              onClick={() => {
                addCart(btn_id);
                changeBtnDesign(btn_id);
                data[btn_id][0] = !data[btn_id][0];
              }}
            >
              {button_text}
            </button>
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
        <div className="footer-container">
          <div className="footer-line"></div>
          <div className="footer-links">
            <Link>Fandora</Link>
            <Link>News</Link>
            <Link>Support</Link>
            <Link>Career</Link>
            <Link>Investor</Link>
            <Link>Media</Link>
            <Link>contact</Link>
          </div>
          <div className="other-links">
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
          <div className="footer-images">
            <img src={mc} />
            <img src={visa} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
