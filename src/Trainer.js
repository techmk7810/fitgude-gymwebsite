import React from "react";
import "./css/Trainer.css"; // Import your custom CSS
import Trainer1 from "./assets/Dhiraj.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const trainers = [
    {
      id: 1,
      name: "John Doe",
      experience: "8 Years",
      expertise: "Weight Gaining",
      charges: "$50/MON (3 DAYS FREE TRIAL)",
      image: Trainer1,
    },
    {
      id: 2,
      name: "Sarah Smith",
      experience: "5 Years",
      expertise: "Fat Loss",
      charges: "$40/MON (3 DAYS FREE TRIAL)",
      image: "https://media.istockphoto.com/id/1324042769/photo/confident-gym-owner.jpg?s=612x612&w=0&k=20&c=2ARveP6nctKY2V1180dCOXS7yJrZjRg-TTIDkazond8=",
    },
    {
      id: 3,
      name: "Michael Johnson",
      experience: "10 Years",
      expertise: "Body building",
      charges: "$60/MON (3 DAYS FREE TRIAL)",
      image: "https://static.vecteezy.com/system/resources/thumbnails/046/836/977/small/african-male-fitness-trainer-in-gym-fitness-and-wellness-african-american-coach-healthy-lifestyle-photo.jpg",
    },
    {
      id: 4,
      name: "Emily Brown",
      experience: "6 Years",
      expertise: "Weight Gaining",
      charges: "$45/MON (3 DAYS FREE TRIAL)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPlCFEfwuQ4CBS5XaXMOXSb3Kh8UnBZf9GQ&s",
    },
    {
      id: 5,
      name: "David Wilson",
      experience: "7 Years",
      expertise: "Body building",
      charges: "$55/MON (3 DAYS FREE TRIAL)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6HCp9ive0livRpRFwcD5N9WDICBP49J6WA&s",
    },
    {
      id: 6,
      name: "Jessica Adams",
      experience: "4 Years",
      expertise: "Fat Loss",
      charges: "$38/MON (3 DAYS FREE TRIAL)",
      image: "https://t3.ftcdn.net/jpg/05/62/09/28/360_F_562092860_mWJBNRqTg4rarfoJaSdkaLlfy1dkrP33.jpg",
    },
    {
      id: 7,
      name: "Chris Evans",
      experience: "9 Years",
      expertise: "Weight Gaining",
      charges: "$70/MON (3 DAYS FREE TRIAL)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaYw_-BCl2dMg-QEezKMC_k4GckXiB1kDLA&s",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      experience: "3 Years",
      expertise: "Body building",
      charges: "$30/MON (3 DAYS FREE TRIAL)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZGWLJWRA2_lVFL8P9fprkv-qfBjEcREvNA&s",
    },
    {
      id: 9,
      name: "Daniel Roberts",
      experience: "11 Years",
      expertise: "Body building",
      charges: "$65/MON (3 DAYS FREE TRIAL)",
      image: "https://static.vecteezy.com/system/resources/previews/046/837/264/non_2x/smiling-young-male-fitness-trainer-in-modern-gym-perfect-for-health-and-wellness-promotions-stockgraphy-photo.jpg",
    },
    {
      id: 10,
      name: "Rachel Green",
      experience: "5 Years",
      expertise: "Fat Loss",
      charges: "$42/MON (3 DAYS FREE TRIAL)",
      image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31564.jpg",
    },
    {
      id: 11,
      name: "Tom Hardy",
      experience: "6 Years",
      expertise: "Weight Gaining",
      charges: "$50/MON (3 DAYS FREE TRIAL)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJ-f-2ElJGoagA3nWkNdK8X-E71KEEQbOtQ&s",
    },
    {
      id: 12,
      name: "Lily White",
      experience: "3 Years",
      expertise: "Fat Loss",
      charges: "$28/MON (3 DAYS FREE TRIAL)",
      image: "https://images.stockcake.com/public/3/c/5/3c5775e2-afa3-4a53-a12b-bfc0d8a7aaab_large/fitness-trainer-posing-stockcake.jpg",
    },
  ];

  export { trainers };

const TrainerCard = () => {
  const [hasBooking, setHasBooking] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    const storedBooking = JSON.parse(localStorage.getItem("myBookings")) || [];
    setHasBooking(storedBooking.length > 0);
  }, []);

  const generateRollTag = () => Math.floor(1000 + Math.random() * 9000);

  const handlePayment = (trainer) => {
    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay SDK not loaded. Please refresh the page.");
      return;
    }

    if (hasBooking) {
      alert("You already have a booking! Cancel it before booking a new trainer.");
      return;
    }

    const rollTag = generateRollTag();

    const options = {
      key: "rzp_test_t6HpjLCGPzrBb2", // Replace with your Razorpay test/live key
      amount: parseInt(trainer.charges.replace(/\D/g, ""), 10) * 100,
      currency: "INR",
      name: "FitGuide",
      description: `Booking for ${trainer.name}`,
      handler: async function () {
        alert(`✅ Booking Confirmed!\nYour RollTag: ${rollTag}`);

        const bookingData = {
          rollTag,
          name: trainer.name,
          experience: trainer.experience,
          charges: trainer.charges,
          image: trainer.image,
        };

        try {
          await axios.post("http://localhost:8080/buy", bookingData);
        } catch (error) {
          console.error("Error saving booking:", error.response?.data || error.message);
        }

        localStorage.setItem("myBookings", JSON.stringify([bookingData]));
        setHasBooking(true);
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

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="trainer-section">
      <h2>Meet Our Expert Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} className="trainer-img" />
            <h3>{trainer.name}</h3>
            <p className="trainer-info"><strong>Experience:</strong> {trainer.experience}</p>
            <p className="trainer-info"><strong>Specialty:</strong> {trainer.expertise}</p>
            <p className="trainer-price">{trainer.charges}</p>
            <button
              className="book-now-btn"
              onClick={() => handlePayment(trainer)}
              disabled={hasBooking}
            >
              {hasBooking ? "Booking Exists" : "Book Now"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainerCard;