import React from "react";
import ReactDOM from "react-dom";
import CartContent from "./CartContent";

import "remixicon/fonts/remixicon.css";
import Header from "home/Header";
import Footer from "home/Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <CartContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
