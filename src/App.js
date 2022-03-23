import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import CheckOut from "./pages/checkout_page/CheckOut";
import Login from "./pages/login/Login";
import { Provider, useSelector } from "react-redux";
import { store } from "./reduxStore";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/check_out" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
