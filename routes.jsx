import React from "react";
import { Route } from "react-router-dom";

//utils
// import Authenitication from "./utils/Authenitication";

//pages
import IndexPage from "./pages/IndexPage/IndexPage";

function Routes() {
  return (
    <>
      <Route exact path="/" component={IndexPage} />
      {/* <Authenitication exact path="/login-signup" component={LoginSignUpPage} /> */}
    </>
  );
}

export default Routes;
