import React from "react";
import { Link } from "react-router-dom";
import "./account.css";

const AccountPage = () => {
  return (
    <>
      <NavBar2 />
      <LogInSection />
    </>
  );
};

const NavBar2 = () => {
  return (
    <nav id="navigation-2">
      <div className="nav-btn-container-2">
        <Link to=".">
          <h1 className="nav-home-2">FANDORA</h1>
        </Link>
        <Link to="cart.html">
          <h1 className="nav-buttons-2">
            CART<sub>0</sub>
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

const LogInSection = () => {
  return (
    <section id="log-in-section">
      <div className="form-container">
        <form action="." method="GET">
          <div>
            <label for="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-buttons">
            <input type="submit" />
          </div>
        </form>
        <div>
          <h1>Don't Have An Account?</h1>
          <button>Register</button>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
