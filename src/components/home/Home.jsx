import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_top">
        <img src="https://pbs.twimg.com/media/FJjgMjpVQAEHlee.jpg" alt="" />
      </div>

      <div className="products_container">
        <div className="products_row">
          <Product
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugiat quibusdam vitae recusandae optio quos a ex sunt eius voluptas."
            }
            price={440}
            rating={4}
            img={
              "https://res.cloudinary.com/grover/image/upload/e_trim/f_auto,q_auto/v1600694153/gazglmfjgr09vw3zb75n.png"
            }
          />
          <Product
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugiat quibusdam vitae recusandae optio quos a ex sunt eius voluptas."
            }
            price={440}
            rating={4}
            img={
              "http://assets.stickpng.com/thumbs/5f5696894322de00046d5775.png"
            }
          />
        </div>
        <div className="products_row">
          <Product
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugiat quibusdam vitae recusandae optio quos a ex sunt eius voluptas."
            }
            price={440}
            rating={4}
            img={
              "https://media.glamour.com/photos/5eb87ac3b678ecb2ae7f552f/1:1/w_1500,h_1500,c_limit/fenty%20beauty.png"
            }
          />
          <Product
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugiat quibusdam vitae recusandae optio quos a ex sunt eius voluptas."
            }
            price={440}
            rating={4}
            img={
              "https://www.pngmart.com/files/7/Graphics-Card-PNG-Transparent-HD-Photo.png"
            }
          />
          <Product
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugiat quibusdam vitae recusandae optio quos a ex sunt eius voluptas."
            }
            price={440}
            rating={4}
            img={"https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png"}
          />
        </div>
        <div className="products_row">
          <Product
            title={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugiat quibusdam vitae recusandae optio quos a ex sunt eius voluptas."
            }
            price={440}
            rating={4}
            img={
              "http://assets.stickpng.com/images/585680404f6ae202fedf26f0.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
