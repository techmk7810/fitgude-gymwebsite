import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Nav";
// import Home from "./pages/Home";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import AboutSection from "./AboutSection";
import OfferSection from "./OfferSection";
import PricingSection from "./PricingSection";
import { GallerySection } from "./GallerySection";
import ContactSection from "./ContactSection";
import Home from "./home";
// import Footer from "./Footer";
import FilteredTrainers from "./FilteredTrainers";
import TrainerCard from "./Trainer";
import MyBookings from "./MyBookings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/trainers" element={<FilteredTrainers />} />
        <Route path="/training" element={<TrainerCard />} />
        <Route path="/offers" element={<OfferSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      {/* <Footer /> */}
      </>
  );
}

export default App;
