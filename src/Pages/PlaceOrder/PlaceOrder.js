import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [serviceInfo, setServiceInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/place-order/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceInfo(data));
  }, []);

  return (
    <div>
      <div className="place-order-container">
        <div>
          <h1 className="section-title">Order Details </h1>
          <img src={serviceInfo.serviceImage} alt="service" />
          <h2>{serviceInfo.serviceName}</h2>
        </div>
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
