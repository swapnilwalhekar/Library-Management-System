import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux"; 
import store from "./Redux/store";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// console.warn("Initial state:", store.getState());
// store.subscribe(() => console.warn("updated state:", store.getState()));
