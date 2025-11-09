import React from "react";
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";

const Footer = () => {
  return (
    <footer className="d-flex align-center justify-center section-inline-padding">
      {/* Social Media Accounts Links Start */}
      <div className="social-media-icons d-flex">
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;