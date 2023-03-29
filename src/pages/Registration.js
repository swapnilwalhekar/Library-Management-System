import React, { Component } from "react";
import Style from "../styles/Register.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import { RegisterSuccess } from "../Redux/Actions/actions";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name1: "",
      email: "",
      password: "",
      phone: "",
      status: true,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.RegisterSuccess(this.state);

    if (this.state.name1 === "") {
      document.getElementById("username").innerHTML =
        "please enter the username";
      return false;
    }
    else if (this.state.name1.length <= 2 || this.state.name1.length > 20) {
      document.getElementById("username").innerHTML =
        "name must in between 2 to 20";
      return false;
    }
    else if (!isNaN(this.state.name1)) {
      document.getElementById("username").innerHTML =
        "only characters are allowed";
      return false;
    }
    else if (this.state.name1.length > 2 || this.state.name1.length <= 20) {
      document.getElementById("username").innerHTML = "";
    }
   
    if (this.state.email === "") {
      document.getElementById("emailid").innerHTML = "please enter the email id";
      return false;
    }

    if (this.state.password === "") {
      document.getElementById("pass").innerHTML = "please enter the password";
      return false;
    }
    else if (this.state.password.length < 5 || this.state.password.length > 20) {
      document.getElementById("pass").innerHTML = "password must in between 5 to 20";
    return false;
    }
    else if (this.state.password.length >= 5 || this.state.password.length < 20 ) {
      document.getElementById("pass").innerHTML = "";
    }

    if (this.state.phone === "") {
      document.getElementById("phone").innerHTML = "please enter the phone number";
    return false;
    }
    else if (this.state.phone.length !== 10) {
      document.getElementById("phone").innerHTML = "please enter a 10 digit";
    return false;
    }
    else if (isNaN(this.state.phone)) {
      document.getElementById("phone").innerHTML = "character's are not allowed";
    return false;
    }

    if ( this.state.name1 !== "" && this.state.phone !== "" && this.state.email !== "" && this.state.password !== "" ) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  render() {
    return (
      <>
        {this.state.status === true ? (
          <div className={Style.forms}>
            <form onSubmit={this.handleFormSubmit}>
              <label>
                <h3>Register </h3>
              </label>
              <div className="form-group">
                <label>Enter your name</label>
                <br />
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  autoComplete="off"
                  onChange={(e) => this.setState({ name1: e.target.value })}
                />
                <span
                  id="username"
                  className="text-danger font-weight-bold"
                ></span>
              </div>
              <div className="form-group">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <span
                  id="emailid"
                  className="text-danger font-weight-bold"
                ></span>
              </div>
              <div className="form-group">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  autoComplete="true"
                />
                <span id="pass" className="text-danger font-weight-bold"></span>
              </div>
              <div className="form-group">
                <label>Phone No.</label>
                <br />
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <span
                  id="phone"
                  className="text-danger font-weight-bold"
                ></span>
              </div>
              <br />
              <button type="submit" className="btn btn-success">
                Register
                <ToastContainer />
              </button>
              <br /> <br />
              <Link to="/">
                <p className={Style.goto_login}>Already registered log in ? </p>
              </Link>
            </form>
          </div>
        ) : (
          <Link to="/">
            <Login />
          </Link>
        )}
      </>
    );
  }
}

export default connect(null, { RegisterSuccess })(Registration);
