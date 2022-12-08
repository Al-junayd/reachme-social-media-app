import Axios from "axios";
import React, { useState, useContext } from "react";
import ExampleContext from "../ExamplContext";

const HeaderLoggedOut = (props) => {
  const { setLoggedIn } = useContext(ExampleContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", {
        username,
        password,
      });
      if (response.data) {
        localStorage.setItem("reachMeAppToken", response.data.token);
        localStorage.setItem("reachMeAppUsername", response.data.username);
        localStorage.setItem("reachMeAppAvatar", response.data.avatar);
        setLoggedIn(true);
      } else {
        alert("Incorrect username/password");
      }
    } catch (e) {
      alert("There was a problem");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button type="submit" className="btn btn-success btn-sm">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderLoggedOut;
