import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, animationControls, motion } from "framer-motion";
import HomePage from "./home";
import AccountPage from "./account";
import CheckoutPage from "./checkout";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/account" exact component={AccountPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
