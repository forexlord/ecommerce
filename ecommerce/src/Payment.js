import React from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function Payment() {
  const [{ user, basket }] = useStateValue();
  const stripe = useStripe();
  const element = useElements();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Akwa ibom state</p>
            <p>Nigeria</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  item={item.id}
                  rating={item.rating}
                  price={item.price}
                  image={item.images}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>
              <CardElement />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
