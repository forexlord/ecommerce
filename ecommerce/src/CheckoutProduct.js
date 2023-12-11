import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, item, title, image, price, rating }) {
  console.log(image);
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="na" className="checkoutProduct__image" />
      <div className="checkProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="chckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={item}>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
