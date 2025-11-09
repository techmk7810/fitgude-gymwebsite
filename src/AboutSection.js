import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";
import aboutImg from "./assets/about.jpg";

const AboutSection = () => {
  return (
    <section id="about-section" className="section-inline-padding d-flex section-block-padding">
      {/* About Section Image */}
      <img src={aboutImg} className="about-img" alt="About" />

      {/* About Section Info */}
      <div className="about-info d-flex flex-d-col align-start justify-center">
        <h1>About me</h1>
        <h3>Transforming Lives, One Workout at a Time!</h3>
        <p>
        At FitGuide, we believe that fitness is not just about lifting weights—it's a lifestyle. Our goal is to empower you to achieve your dream physique, whether you want to build muscle, lose weight, or gain strength.

With expert guidance, customized workout plans, and nutritional advice, we ensure that you stay on track to meet your fitness goals. Our team of certified trainers and fitness experts are here to guide you every step of the way.
        </p>
        <button className="about-btn transparent-btn">read more</button>
      </div>
    </section>
  );
};

export default AboutSection;