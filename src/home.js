import React, { useState, useEffect } from "react";
import './css/Home.css';
import { useNavigate } from "react-router-dom";
export default function Home() {

    const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by checking localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUser(storedUsername);
    }
  }, []);

  const handleNavigation = (path) => {
    if (!user) {
      alert("Please log in to access this page.");
      navigate('/'); // Redirect to login page
    } else {
      navigate(path); // Proceed with navigation
    }
  };
  
  return (
    <>
      <section className="hero">
  <div className="hero-container">
    <div className="row">
      <div className="col hero-content">
        <h2 className="hero-heading white">
          Transform Your Fitness Journey with The <strong>FitGuide</strong>
        </h2>
        <p className="para-line white">
          we are committed to helping you achieve your health and fitness goals. 
          Whether you want to build strength, lose weight, or improve your overall wellness, we offer personalized 
          workout plans, expert guidance, and nutrition tips to keep you on track.
        </p>
        <p className="para-line white">
          Join our community of fitness enthusiasts and take the first step towards a healthier, stronger you. 
          Let's make fitness a lifestyle, not just a goal!
        </p>
        <div className="inner-row">
          <div className="inner-col">
            <button
              className="btn btn-full-w btn-blue"
              onClick={() => handleNavigation('/offers')}
            >
              Explore Programs
            </button>
          </div>
          <div className="inner-col">
            <button className="btn btn-full-w btn-yellow">
              <a href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
