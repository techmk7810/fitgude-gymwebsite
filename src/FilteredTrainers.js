import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls
import "./css/Filtered.css";

const FilteredTrainers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, filteredTrainers } = location.state || { title: "", filteredTrainers: [] };

  const [hasBooking, setHasBooking] = useState(false); // Track if there's an existing booking

  useEffect(() => {
    const storedBooking = JSON.parse(localStorage.getItem("myBookings")) || [];
    setHasBooking(storedBooking.length > 0); // If a booking exists, restrict further bookings
  }, []);

  // Function to generate a 4-digit unique RollTag
  const generateRollTag = () => Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number

  // Function to handle Razorpay payment
  const handlePayment = (trainer) => {
    if (hasBooking) {
      alert("You already have a booking! Please cancel it first before booking a new trainer.");
      return;
    }
  
    const rollTag = generateRollTag(); // Generate a unique 4-digit RollTag
  
    const options = {
      key: "rzp_test_t6HpjLCGPzrBb2", // Replace with your Razorpay Key ID
      amount: parseInt(trainer.charges.replace(/\D/g, ""), 10) * 100, // Convert to paisa
      currency: "INR",
      name: "FitGuide",
      description: `Booking for ${trainer.name}`,
      handler: async function () {
        alert(`Your Unique RollTag: ${rollTag} \nBooking Confirmed! ✅`);
  
        const bookingData = {
          rollTag,
          name: trainer.name,
          experience: trainer.experience,
          charges: trainer.charges,
          image: trainer.image, // Include image for UI display
        };
  
        // 1️⃣ Save booking in the backend
        try {
          await axios.post("http://localhost:8080/buy", bookingData);
          console.log("Booking saved successfully.");
        } catch (error) {
          console.error("Error saving booking:", error.response ? error.response.data : error.message);
        }
  
        // 2️⃣ Store the booking in localStorage
        localStorage.setItem("myBookings", JSON.stringify([bookingData])); // Only allow one booking at a time
        setHasBooking(true); // Update state to restrict further bookings
      },
      prefill: {
        name: "Kaushal B. Kadam",
        email: "kadamkaushal40@gmail.com",
        contact: "8421331753",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };
  

  return (
    <section className="filtered-trainers-container">
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Go Back</button>
      <h1 className="filtered-title">{title} Trainers</h1>

      {filteredTrainers.length > 0 ? (
        <div className="filtered-trainers-grid">
          {filteredTrainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <img src={trainer.image} alt={trainer.name} className="trainer-img" />
              <h3 className="trainer-name">{trainer.name}</h3>
              <p className="trainer-info"><strong>Experience:</strong> {trainer.experience}</p>
              <p className="trainer-price"><strong>Charges:</strong> {trainer.charges}</p>
              <button 
                className="get-plan-btn" 
                onClick={() => handlePayment(trainer)} 
              >
                {hasBooking ? "Booking Exists" : "Book Now"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-trainers-msg">No trainers available for {title}.</p>
      )}
    </section>
  );
};

export default FilteredTrainers;
