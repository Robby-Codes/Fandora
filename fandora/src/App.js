import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./home";
import AccountPage from "./account";
import CheckoutPage from "./checkout";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/account" exact component={AccountPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
      </Switch>
    </>
  );
}

export default App;
