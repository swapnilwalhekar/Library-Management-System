import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../styles/Cart.css";
import { handleRemove, adjustBookAmt } from "../Redux/Actions/actions";

const Cart = ({ stateCart, adjustcount, removeFromCart }) => {
  const [allBookCount, setAllBookCount] = useState();

  useEffect(() => {
    handleallBookCount();
  });

  const handleallBookCount = () => {
    let ans = 0;
    stateCart.map((item) => (ans = ans + item.count));
    setAllBookCount(ans);
  };

  return (
    <article>
      {stateCart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="Not found" />
            <p>{item.title}</p>
          </div>
          <div>
            <button
              onClick={() => adjustcount(item.id, -1)}
              disabled={item.count === 1}
            >
              -
            </button>
            <button min="1" disabled>
              {item.count}
            </button>
            <button onClick={() => adjustcount(item.id, 1)}> + </button>
          </div>
          <div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-danger text-white"
            >
              Remove
            </button>
          </div>
        </div>
      ))}<br/>
      <div className="allcount">
        <label style={{ text_align:"center", padding: "30px 20px 10px 20px" }}>Total Books in Cart is : </label>
        <span>{allBookCount}</span>
      </div><br/>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(handleRemove(id)),
    adjustcount: (id, n) => dispatch(adjustBookAmt(id, n)),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
