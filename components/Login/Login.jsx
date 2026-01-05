import React, { useState } from "react";
import "../Login/Login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("derek");
  const [password, setPassword] = useState("jklg*_56");
  const navigate = useNavigate();
  const API = `https://fakestoreapi.com/auth/login`;

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  function handleClick(e) {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    axios.post(API, user).then((data) => {
      const token = data.data.token;
      if (data.status == 201) {
        navigate("/");
        toast.success("Succesfully code Congretulation", {
          position: "top-center",
        });
      }
      localStorage.setItem("token", token);
    });
  }

  return (
    <div>
      <div class="container">
        <h2>Admin Panel</h2>
        <div class="input-box">
          <input
            required
            value={username}
            onChange={handleUsername}
            type="text"
            placeholder=" "
          />
          <label>Username</label>
        </div>
        <div class="input-box">
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            required
            placeholder=" "
          />
          <label>Password</label>
        </div>
        <button onClick={handleClick} class="btn">
          Login
        </button>
        <div class="links">
          <p>
            Forgot password? <a></a>
          </p>
          <p>
            Create new account <a></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
