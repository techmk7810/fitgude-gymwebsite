import React, { useEffect, useState } from "react";
import "./css/MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("myBookings", JSON.stringify(updatedBookings));
  };

  return (
    <section className="my-bookings-container">
      <h1>My Bookings</h1>
      {bookings.length > 0 ? (
        <div className="bookings-grid">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <img src={booking.image} alt={booking.name} className="booking-img" />
              <h3>{booking.name}</h3>
              <p><strong>Experience:</strong> {booking.experience}</p>
              <p><strong>Charges:</strong> {booking.charges}</p>
              <p><strong>RollTag:</strong> {booking.rollTag}</p>
              <button className="cancel-btn" onClick={() => handleCancelBooking(index)}>
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-bookings-msg">No bookings available.</p>
      )}
    </section>
  );
};

export default MyBookings;
