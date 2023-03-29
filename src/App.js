import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { userLogout } from "./Redux/Actions/actions";

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userPresent = localStorage.getItem("user");
    userPresent === "true" ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const logout = () => {
    setUser(false);
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <>
      <Routes>
        {user === false && (
          <>
            <Route exact path="/Register" element={<Registration />} />
            <Route
              path="/"
              element={<Login authenticate={() => setUser(true)} />}
            />
          </>
        )}
        {user === true && (
          <Route path="/home" element={<Home logout={logout} />} />
        )}
        <Route
          path="*"
          element={<Navigate to={user === true ? "/home" : "/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
