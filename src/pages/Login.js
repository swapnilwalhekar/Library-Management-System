import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Style from "../styles/Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

const Login = ({ authenticate, myPassword, myEmail, myName, myPhone }) => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [msg, setMsg] = useState(false);
  const [home, setHome] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    if(myName && myPassword && myEmail && myPhone){
      toast.success("Register Successfully...");
    }else{
      toast("If you don't have account? "
      + "Registration Required")
    }
  },[]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (passwordlog === "") {
      document.getElementById("pass").innerHTML = "please enter the password";
      return false;
    }
    else if (passwordlog.length < 5 || passwordlog.length > 20) {
      document.getElementById("pass").innerHTML =
        "password must in between 5 to 20";
      return false;
    }
    else if (passwordlog.length >= 5 || passwordlog.length <= 20) {
      document.getElementById("pass").innerHTML = "";
    }

    if (emaillog === myEmail && passwordlog === myPassword) {
      setHome(true);
      authenticate();
      navigate("/home");
    } else {
      setHome(false);
      setMsg(true);
    }
  };

  const showToast = () => {
    if (home === false) {
      toast.error(" Enter valid credentials..!! ");
    } else {
      toast.success("Login Successfully");
    }
  };

  return (
    <div>
      {home === false ? (
        <div className={Style.forms}>
          <form onSubmit={handleLogin}>
            <h3>Login Page </h3>
            <br />
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <span id="emaillog" className="text-danger "></span>
            </div>
            <div className="form-group">
              <label>Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="true"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
              <span id="pass" className="text-danger font-weight-bold"></span>
            </div>
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block"
              onClick={showToast}
            >
              login
              <ToastContainer />
            </button>
            <br /> <br />
            
            {msg === false ? (
              ""
            ) : (
              <label className="text-danger">
                Enter Valid EmailId and Password ?
              </label>
            )}
            <Link to="/Register">
              <p className=" text-primary">New user register</p>
            </Link>
          </form>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myEmail: state.stateData.currentUser.email,
    myPassword: state.stateData.currentUser.password,
    myName: state.stateData.currentUser.name1,
    myPhone: state.stateData.currentUser.phone 
  };
};

export default connect(mapStateToProps)(Login);
