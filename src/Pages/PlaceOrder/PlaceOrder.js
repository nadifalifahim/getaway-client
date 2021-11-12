import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="place-order-container">
        <div>
          <h1 className="section-title">Billing Details</h1>
          <form>
            <label>
              Full Name
              <input type="text" required value={user.displayName}></input>
            </label>
            <label>
              Email Address
              <input type="email" required value={user.email}></input>
            </label>
            <label>
              Shipping Address
              <input type="text" required></input>
            </label>
            <label>
              Phone Number
              <input type="number" required></input>
            </label>
            <button type="submit" className="primary-button">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
