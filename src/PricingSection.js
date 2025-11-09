import React from "react";
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";

const PricingSection = () => {
  return (
    <section id="pricing-section" className="max-width-center section-block-padding">
      {/* Pricing Section Heading */}
      <h1 className="section-heading">Best GYM Near Me</h1>

      {/* Pricing Boxes Container Start */}
      <div className="pricing-boxes-container d-flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097926!2d144.95373531531552!3d-37.81627977975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d476f0f0f7b%3A0x5b11b1a09c9b5c0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1600932327427!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Gym Location"
        ></iframe>
      </div>
    </section>
  );
};

export default PricingSection;