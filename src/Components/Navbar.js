import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "../styles/Navbar.scss";
import "react-responsive-modal/styles.css";
import { BsFillCartPlusFill } from 'react-icons/bs';

const Navbar = ({ setShow, size, logout }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav_box">
        <span className="booklist" onClick={() => setShow(true)}>
          BookList
        </span>
        <div className="cart">
          <span onClick={() => setShow(false)}>
            <BsFillCartPlusFill/>            
          </span>
          <span onClick={()=>setOpen(true)}>{size}</span>
          <Modal open={open} onClose={() => setOpen(false)} center>
            <div className="popup">
              <h2 style={{ color: "blue", padding: "30px 20px 10px 20px" }}>
                Books added in the cart is:
              </h2>
              <h1 
                style={{
                  textAlign: "center",
                  paddingBottom: "30px",
                  color: "red",
                }}
              >
                {size}
              </h1>
            </div>
          </Modal>
        </div>
        <button className="btn btn-light" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
