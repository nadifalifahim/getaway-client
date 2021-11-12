import React, { useRef } from "react";
import "./AddNewService.css";

const AddNewService = () => {
  const serviceNameRef = useRef();
  const serviceImageRef = useRef();
  const servicePriceRef = useRef();
  const serviceDescriptionRef = useRef();

  const handleAddNewService = (e) => {
    const serviceName = serviceNameRef.current.value;
    const serviceImage = serviceImageRef.current.value;
    const servicePrice = servicePriceRef.current.value;
    const serviceDescription = serviceDescriptionRef.current.value;

    const newService = {
      serviceName,
      serviceImage,
      servicePrice,
      serviceDescription,
    };
    fetch("http://localhost:5000/add-new-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .finally(e.target.reset());

    e.preventDefault();
  };

  return (
    <div>
      <div className="new-service-container">
        <div>
          <h1 className="section-title">Add a new service</h1>
          <form onSubmit={handleAddNewService}>
            <label>
              Service Name
              <input type="text" required ref={serviceNameRef}></input>
            </label>
            <label>
              Image URL
              <input type="text" ref={serviceImageRef}></input>
            </label>
            <label>
              Price ($)
              <input type="number" required ref={servicePriceRef}></input>
            </label>
            <label>
              Service Description
              <textarea type="text" ref={serviceDescriptionRef}></textarea>
            </label>
            <button type="submit" className="primary-button">
              Add New Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
