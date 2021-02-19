import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./home";
import AccountPage from "./account";
import CheckoutPage from "./checkout";

// Using framer motion to create page transition animations and
// using react-router-dom for custom paths
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
