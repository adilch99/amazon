import "./HomePage.css";
import React from "react";
import Home from "../../components/home/Home";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default HomePage;
