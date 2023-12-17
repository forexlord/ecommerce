import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no item on your basket. To buy one or more items, click
              'Add to cart' next to the item
            </p>
          </div>
        ) : (
          <div>
            <img
              className="checkout__ad"
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717RUPA1bDL._SX3000_.jpg"
            />
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  item={item.id}
                  title={item.title}
                  image={item.images}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
