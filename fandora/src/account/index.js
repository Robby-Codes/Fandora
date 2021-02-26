import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { data, coverpage } from "../other/data";
import "./account.css";

// Main Account Page Component using framer motion for page transition animations
const AccountPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <section id="log-in-section">
          <NavBar2 />
          <LogInSection />
          <RegisterSection />
        </section>
      </motion.div>
    </>
  );
};

// Nav Bar for account page
const NavBar2 = () => {
  // find number of items in cart to display on navbar
  let num_of_items = 0;
  for (const [key, value] of Object.entries(data)) {
    if (value[0] === true) {
      num_of_items += 1;
    }
  }
  return (
    <nav id="navigation-2">
      <div className="nav-btn-container-2">
        <Link to="/">
          <h1 className="nav-home-2">FANDORA</h1>
        </Link>
        <Link to="/checkout">
          <h1 className="nav-buttons-2">
            CART<sub>{num_of_items}</sub>
          </h1>
        </Link>
      </div>
      <div className="nav-line-2"></div>
      <div className="message-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae libero
        tempore.
      </div>
    </nav>
  );
};

// Log In Section Component
const LogInSection = () => {
  // animate form on "register button" click
  const registerClick = () => {
    document.getElementsByClassName("form-container")[0].style.transition =
      "all 1s";
    document.getElementsByClassName("form-container")[0].style.transform =
      "translate(-200%, 0)";
    document.getElementsByClassName("register-container")[0].style.transition =
      "all 1s";
    document.getElementsByClassName("register-container")[0].style.transform =
      "translate(-50%, 0)";
  };
  return (
    <div className="form-container">
      <h1>Log In</h1>
      <form action="." method="GET">
        <div>
          <input type="text" id="username" placeholder="Username" required />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-buttons">
          <input type="submit" value="Log In" />
        </div>
      </form>
      <div>
        <h1>Don't Have An Account?</h1>
        <button onClick={() => registerClick()}>Register</button>
      </div>
    </div>
  );
};

// Register Section component
const RegisterSection = () => {
  // Animate form on "log in" button click
  const loginClick = () => {
    document.getElementsByClassName("form-container")[0].style.transition =
      "all 1s";
    document.getElementsByClassName("form-container")[0].style.transform =
      "translate(50%, 0)";
    document.getElementsByClassName("register-container")[0].style.transition =
      "all 1s";
    document.getElementsByClassName("register-container")[0].style.transform =
      "translate(200%, 0)";
  };
  return (
    <>
      <div className="register-container">
        <h1> Create An Account</h1>
        <form action="." method="GET">
          <div>
            <input
              type="text"
              id="username"
              placeholder="New Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="New Password"
              required
            />
          </div>
          <div>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div>
            <input type="tel" id="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-buttons">
            <input type="submit" value="Create Account" />
          </div>
        </form>
        <div>
          <h1>Already have an account?</h1>
          <button onClick={() => loginClick()}>Log In</button>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
