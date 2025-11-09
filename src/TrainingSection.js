import React from "react";
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";

const TrainingSection = () => {
  return (
    <section id="training-section" className="max-width-center section-block-padding">
      {/* Training Section Heading */}
      <h1 className="section-heading">Training</h1>

      {/* Training Boxes Container Start */}
      <div className="training-boxes-container d-flex justify-between">
        {/* Training Box 1 */}
        <div className="training-box d-flex flex-d-col justify-center align-center">
          <h2>Personal Training</h2>
          <p>
            Our personal training services are designed to help you achieve your
            fitness goals with expert guidance. Whether you're looking to lose
            weight, build muscle, or improve overall fitness, our trainers
            create customized workout plans tailored to your needs.
          </p>
          <button className="training-btn">View</button>
        </div>

        {/* Training Box 2 */}
        <div className="training-box d-flex flex-d-col justify-center align-center">
          <h2>Diet Consultancy</h2>
          <p>
            Our diet consultancy service provides personalized nutrition guidance
            to help you achieve your health goals. Whether you want to lose
            weight, build muscle, or maintain a balanced diet, our experts
            create customized meal plans based on your lifestyle and
            preferences. Start your journey to a healthier life with expert
            advice and support.
          </p>
          <button className="training-btn">View</button>
        </div>
      </div>
      {/* Training Boxes Container End */}
    </section>
  );
};

export default TrainingSection;