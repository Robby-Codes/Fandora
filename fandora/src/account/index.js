import React from "react";
import { Link } from "react-router-dom";
import { data } from "../other/data";
import "./account.css";

const AccountPage = () => {
  return (
    <>
      <LogInSection />
    </>
  );
};

const LogInSection = () => {
  return (
    <section id="log-in-section">
      <NavBar2 />
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

const NavBar2 = () => {
  let num_of_items = 0;
  for (const [key, value] of Object.entries(data)) {
    console.log(value[0]);
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

export default AccountPage;
