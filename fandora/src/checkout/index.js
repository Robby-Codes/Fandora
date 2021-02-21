import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { data, totalAmount } from "../other/data";
import { formatNumbers } from "../other/formatnumbers";
import { images } from "../other/images";
import "./checkout.css";

// Main Checkout Page Component, using framer motions for page transition animations
const CheckoutPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <NavBar3 />
      </motion.div>
    </>
  );
};

// Nav Bar for Checkout page
const NavBar3 = () => {
  // find number of items in cart to display on navbar
  let num_of_items = 0;
  for (const [key, value] of Object.entries(data)) {
    if (value[0] === true) {
      num_of_items += 1;
    }
  }
  const [cartamount, setCartAmount] = useState(num_of_items);
  return (
    <>
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
              CART<sub>{cartamount}</sub>
            </h1>
          </Link>
        </div>
        <div className="nav-line-3"></div>
        <div className="message-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          libero tempore.
        </div>
      </nav>
      <CartAndCheckoutSection
        cartamount={cartamount}
        setCartAmount={setCartAmount}
      />
    </>
  );
};

// Cart and Checkout Section Component
const CartAndCheckoutSection = ({ cartamount, setCartAmount }) => {
  return (
    <section id="cart-and-checkout-section">
      <div className="section-container">
        <Cart cartamount={cartamount} setCartAmount={setCartAmount} />
      </div>
    </section>
  );
};

// Cart Component
const Cart = ({ cartamount, setCartAmount }) => {
  const [totalamount, setTotalAmount] = useState(totalAmount(data));
  return (
    <>
      <div className="cart">
        <div className="cart-message">
          <h1>THANK YOU FOR SHOPPING AT FANDORA</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="product-num">
          <h1>
            YOUR CART (<span className="cart-amount">{cartamount}</span>)
          </h1>
        </div>
        <div className="products-container">
          <CartItem
            id={1}
            action={data[1][0]}
            title={data[1][1]}
            price={data[1][2]}
            image={images.ac_shelby_cobra}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={2}
            action={data[2][0]}
            title={data[2][1]}
            price={data[2][2]}
            image={images.audi_r8}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={3}
            action={data[3][0]}
            title={data[3][1]}
            price={data[3][2]}
            image={images.audi_r8_spyder}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={4}
            action={data[4][0]}
            title={data[4][1]}
            price={data[4][2]}
            image={images.bugatti_chiron}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={5}
            action={data[5][0]}
            title={data[5][1]}
            price={data[5][2]}
            image={images.chevrolet_camaro_ss}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={6}
            action={data[6][0]}
            title={data[6][1]}
            price={data[6][2]}
            image={images.delorean}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={7}
            action={data[7][0]}
            title={data[7][1]}
            price={data[7][2]}
            image={images.ford_thunderbird}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={8}
            action={data[8][0]}
            title={data[8][1]}
            price={data[8][2]}
            image={images.mclaren_f1}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
          <CartItem
            id={9}
            action={data[9][0]}
            title={data[9][1]}
            price={data[9][2]}
            image={images.peogeot_onyx}
            cartamount={cartamount}
            setCartAmount={setCartAmount}
            setTotalAmount={setTotalAmount}
          />
        </div>
      </div>
      <Checkout totalamount={totalamount} />
    </>
  );
};

// Cart Item Component
const CartItem = ({
  id,
  action,
  title,
  price,
  image,
  cartamount,
  setCartAmount,
  setTotalAmount,
}) => {
  // Delete cart item on "remove button" click
  const deleteItem = (id) => {
    data[id][0] = false;
    setCartAmount(cartamount - 1);
  };
  if (action === true) {
    return (
      <div className="item-container">
        <div className="product-image">
          <img src={image} />
        </div>
        <div className="product-info">
          <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <button
              onClick={() => {
                deleteItem(id);
                setTotalAmount(totalAmount(data));
              }}
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="product-price">
          <p>
            $<span>{formatNumbers(price)}</span>
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// Checkout component
const Checkout = ({ totalamount }) => {
  return (
    <div className="checkout">
      <h1>SUMMARY</h1>
      <div>
        <h2>SUBTOTAL</h2>
        <p>
          $<span>0.00</span>
        </p>
      </div>
      <div>
        <h3>
          ESTIMATED SHIPPING AND HANDLING
          <br />
          Standard: Free / Arrives 25-30 Days
        </h3>
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
          $<span className="t_price">{formatNumbers(totalamount)}</span>
        </p>
      </div>
      <div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
