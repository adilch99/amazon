import { Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { addItem } from "../../features/basketSlice";

const Product = ({ title, rating, price, img }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      addItem({
        title: title,
        rating: rating,
        price: price,
        img: img,
      })
    );
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">$ {price}</p>
        <p>
          <Rating value={rating} readOnly />
        </p>
      </div>
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <button onClick={handleAddItem}>Add to basket</button>
    </div>
  );
};

export default Product;
