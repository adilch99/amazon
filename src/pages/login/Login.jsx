import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const { email } = userCredentials.user.reloadUserInfo;
        dispatch(userLoggedIn({ email: email }));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const { email } = userCredentials.user.reloadUserInfo;
        dispatch(userLoggedIn({ email }));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login_page">
      <div className="login_img">
        <Link to="/">
          <img
            src="https://www.pngmart.com/files/8/Amazon-PNG-Pic.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login_form">
        <div className="login_form_alpha">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_form_alpha">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login_btn" onClick={loginHandler}>
          Log In
        </button>
        <p className="login_agreement">
          By signing-in your are agree to amazon fake clone. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Consequuntur
        </p>
        <button className="login_create" onClick={createHandler}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
