import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";
import offer1 from "./assets/offer-1.jpg";
import offer2 from "./assets/offer-2.jpg";
import offer3 from "./assets/offer-3.jpg";
import { trainers } from "./Trainer"; // Import trainers list

const OfferBox = ({ image, title, description, onClick }) => {
  return (
    <div className="offer-box">
      <img
        src={image}
        alt={title}
        onClick={() => onClick(title)}
        style={{ cursor: "pointer" }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const OfferSection = () => {
  const navigate = useNavigate();

  const handleFilterTrainers = (category) => {
    const filtered = trainers.filter((trainer) => trainer.expertise === category);

    // Redirect to the trainers page with state
    navigate("/trainers", { state: { title: category, filteredTrainers: filtered } });
  };

  return (
    <section id="offer-section" className="max-width-center section-block-padding">
      <h1 className="section-heading">What We Offer</h1>
      <div className="offer-boxes-container d-flex justify-between">
        <OfferBox
          image={offer1}
          title="Body building"
          description="At FitGuide, we offer a comprehensive and scientifically designed approach to bodybuilding, ensuring you achieve maximum muscle growth and strength gains effectively."
          onClick={handleFilterTrainers}
        />
        <OfferBox
          image={offer2}
          title="Fat Loss"
          description="At FitGuide, we offer a science-backed and effective approach to fat loss, helping you achieve a leaner, healthier, and more energetic body."
          onClick={handleFilterTrainers}
        />
        <OfferBox
          image={offer3}
          title="Weight Gaining"
          description="At FitGuide, we help you gain healthy weight and build muscle with personalized training, expert nutrition plans, and cutting-edge fitness tools."
          onClick={handleFilterTrainers}
        />
      </div>
    </section>
  );
};

export default OfferSection;
