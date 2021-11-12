import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [serviceInfo, setServiceInfo] = useState({});
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const handleOrder = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const serviceId = id;
    const orderStatus = "Pending";

    const orderDetails = {
      orderStatus,
      serviceId,
      name,
      email,
      phone,
      address,
    };

    fetch("http://localhost:5000/new-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          alert("Order placed successfully!");
          e.target.reset();
          navigate("/home");
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/place-order/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceInfo(data));
  }, [id]);

  const [userName, setUserName] = useState(user.displayName);
  const [userEmail, setUserEmail] = useState(user.email);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div>
      <div className="place-order-container">
        <div className="order-details-container">
          <h1 className="section-title">Order Details </h1>
          <div className="order-details-content">
            <img src={serviceInfo.serviceImage} alt="service" />
            <div>
              <h2>{serviceInfo.serviceName}</h2>
              <h3>Description</h3>
              <p>{serviceInfo.serviceDescription}</p>
            </div>
          </div>
        </div>
        <div className="billing-details">
          <div className="billing-details-content">
            <h1 className="section-title">Billing Details</h1>
            <form onSubmit={handleOrder}>
              <label>
                Full Name
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={handleNameChange}
                  ref={nameRef}
                ></input>
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={handleEmailChange}
                  ref={emailRef}
                ></input>
              </label>
              <label>
                Phone Number
                <input type="number" required ref={phoneRef}></input>
              </label>
              <label>
                Shipping Address
                <textarea type="text" required ref={addressRef}></textarea>
              </label>

              <button type="submit" className="primary-button">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
