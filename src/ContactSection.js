import React from "react";
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";

const ContactSection = () => {
  return (
    <>
      {/* Footer Banner with Quote */}
      <div className="footer-banner">
        <div className="footer-banner-overlay">
          <h2 className="footer-quote">
            "Your body, your temple. Let us help you worship it."
          </h2>
        </div>
      </div>

      {/* Contact Section Start */}
      <section id="contact-section" className="section-block-padding">
        {/* Contact Boxes Start (Contact Center) */}
        <div className="contact-center max-width-center d-flex justify-between">
          <div className="contact-box d-flex align-center">
            <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
            <div className="contact-info">
              <h3>Location</h3>
              <p>PUNE</p>
            </div>
          </div>

          <div className="contact-box d-flex align-center">
            <span><i className="fa-solid fa-phone" aria-hidden="true"></i></span>
            
            <div className="contact-info">
              <h3>Call Now</h3>
              <p>+91 8080614313</p>
            </div>
          </div>

          <div className="contact-box d-flex align-center">
            <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <div className="contact-info">
              <h3>Email</h3>
              <p>inquiry@fitguide.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
