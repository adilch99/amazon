import { Search, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const products = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_search">
        <input type="text" />
        <div className="search_icon">
          <Search />
        </div>
      </div>
      <div className="header_links">
        <div className="signin">
          <p>Hello {user ? user.email.split("@")[0] : "Guest"}</p>
          <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
            <p className="header_link_bold">{user ? "Sign Out" : "Sign In"}</p>
          </Link>
        </div>
        <div className="orders">
          <p>Returns</p>
          <p className="header_link_bold">& Orders</p>
        </div>
        <div className="prime">
          <p>Your</p>
          <p className="header_link_bold">Prime</p>
        </div>
        <div className="basket">
          <Link to="/check_out">
            <ShoppingBasket />
          </Link>
          <p className="header_link_bold">{products.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
