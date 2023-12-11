import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ price, id, title, images, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        images,
        rating,
        price,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={id}>⭐</p>
            ))}
        </div>
      </div>

      <img src={images} alt="na" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
