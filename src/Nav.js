import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // State to manage user info
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the username from localStorage when the component loads
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUser(storedUsername);
    }
  }); // Add an empty dependency array to run only once on mount

  const handleLogout = () => {
    localStorage.removeItem('username'); // Clear the username from localStorage
    localStorage.removeItem('cart');
    setUser(null); // Update state to reflect logged-out status
    navigate('/'); // Redirect to the homepage
  };

  return (
    <header id="home">
      <nav className="section-inline-padding d-flex justify-between align-center">
        {/* Logo */}
        <div className="logo-box d-flex align-center">
          <img src={logo} alt="logo" />
          <h2>FitGuide</h2>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="d-flex">
            <li className="active"><Link to="/">Home</Link></li>
            {user && (
              <>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/offers">Offer</Link></li>
                <li><Link to="/Training">Trainers</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/bookings">My Bookings</Link></li>
                {/* <li className="cart">
                  <Link to="/cart" className="cart-link">Cart</Link>
                </li> */}
              </>
            )}
          </ul>
        </div>

        {/* User Info & Logout */}
        <div className="nav-buttons">
  {user ? (
    <div className="welcome-box">
      <span className="welcome-msg">WELCOME, {user.toUpperCase()}!</span>
      <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
    </div>
  ) : (
    <button className="login-btn" onClick={() => navigate("/login")}>LOGIN</button>
  )}
</div>


        {/* Mobile Toggle Button */}
        <span className="mobile-toggle-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="fa fa-bars"></i>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
