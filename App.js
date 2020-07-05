import React from "react";
// import logo from './logo.svg';

//css
// import "font-awesome/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

//routing
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

//redux
import store from "./redux/store";
import { Provider } from "react-redux";
// import { SET_USER, SET_AUTHENTICATED } from "./redux/actions/userTypes";
// import { logOut } from "./redux/actions/userActions";

//routing and api
// import axios from "axios";
// import jwtDecode from "jwt-decode";
// axios.defaults.baseURL = "http://localhost:5000/api";

// const token = localStorage.myProjectToken;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(logOut());
//     window.location.href = "/signin-signup";
//   } else {
//     store.dispatch({ type: SET_AUTHENTICATED });
//     store.dispatch({ type: SET_USER, user: decodedToken });
//     axios.defaults.headers.common["Authorization"] = token;
//   }
// }

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
  );
}

export default App;
