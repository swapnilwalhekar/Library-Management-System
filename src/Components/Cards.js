import React from "react";
import { connect } from "react-redux";
import { addToCart1 } from "../Redux/Actions/actions";

const Cards = ({ item, addToCart }) => {
  const { title, author, img } = item;

  return (
    <div className="cards">
      <div className="image_box ">
        <img src={img} alt=" Not found" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <button onClick={()=> addToCart(item) }>
          Add to cart
        </button>
        <br />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart1(item)),
  };
};
 
export default connect(null, mapDispatchToProps)(Cards);
