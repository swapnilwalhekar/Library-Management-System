import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Library from "../Components/Library";
import Cart from "../Components/cart";
import Footer from "../Components/Footer";
import { connect } from "react-redux";
import Header from "../Components/Header";

const Home = ({ logout, stateCart }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Header />
      <Navbar setShow={setShow} size={stateCart.length} logout={logout} />

      {show === true ? (
        <Library />
      ) : (
        <Cart stateCart={stateCart} />
      )}

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stateCart: state.stateData.cart,
  };
};

export default connect(mapStateToProps)(Home);
