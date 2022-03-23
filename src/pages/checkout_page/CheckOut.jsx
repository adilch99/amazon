import { Rating } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/header/Header";
import Subtotal from "../../components/subtotal/Subtotal";
import { removeItem } from "../../features/basketSlice";

import "./CheckOut.css";

const CheckOut = () => {
  const dispatch = useDispatch();
  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const user = useSelector((state) => state.user.user);
  const products = useSelector((state) => state.basket);
  return (
    <>
      <Header />
      <div className="checkout_page">
        <div className="checkout_left">
          <img
            src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png"
            alt=""
          />

          <div className="user_welcome">
            <h4>Hello</h4>
            <p>{user ? user.email : "Guest"}</p>
          </div>

          <div className="checkout_products">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div className="checkout_product" key={index}>
                  <div className="checkout_product-img">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="checkout_product-info">
                    <p>{product.title}</p>
                    <div className="checkout_product-info-rating">
                      <Rating readOnly value={product.rating} />
                    </div>
                    <p>
                      <b>$ {product.price}</b>
                    </p>
                    <button onClick={() => handleRemoveItem(index)}>
                      Remove from basker
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>basket empty</p>
            )}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
