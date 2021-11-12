import React, { useEffect, useState } from "react";
import Bookings from "../Shared Components/Bookings/Bookings";

const ManageAllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const admin = true;

  useEffect(() => {
    fetch("https://hidden-basin-94639.herokuapp.com/my-orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBookings(data);
      });
  }, []);

  return (
    <div>
      <div className="bookings-body">
        <div className="bookings-container">
          <div>
            <h1>All Bookings</h1>
            <h2>Displaying bookings from all users</h2>
          </div>

          <div>
            {allBookings.map((bookings) => (
              <Bookings
                key={bookings._id}
                bookingDetails={bookings}
                admin={admin}
              ></Bookings>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllBookings;
