import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./home";
import AccountPage from "./account";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/account" exact component={AccountPage} />
      </Switch>
    </>
  );
}

export default App;
