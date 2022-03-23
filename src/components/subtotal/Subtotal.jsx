import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import "./Subtotal.css";

const Subtotal = () => {
  const [total, setTotal] = useState(0);
  const products = useSelector((state) => state.basket);

  useEffect(() => {
    setTotal(
      products.reduce(
        (inititalTotal, currentProduct) => inititalTotal + currentProduct.price,
        0
      )
    );
  }, [products]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={products.length}
        displayType="text"
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        renderText={(value) => (
          <div className="subtotal_cont">
            <p>
              Subtotal {products.length} items: {total}
            </p>
          </div>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
