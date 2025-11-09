import React from "react";
import "./css/style.css";
import "./css/utils.css";
import "./css/media-queries.css";
import gallery1 from "./assets/gallery-1.jpg";
import gallery2 from "./assets/gallery-2.jpg";
import gallery3 from "./assets/gallery-3.jpg";
import gallery4 from "./assets/gallery-4.jpg";
import gallery5 from "./assets/gallery-5.jpg";
import gallery6 from "./assets/gallery-6.jpg";

const GalleryBox = ({ image, title }) => {
  return (
    <div className="gallery-box">
      <img src={image} alt={title} />
      <div className="gallery-box-overlay">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const galleryItems = [
    { image: gallery1, title: "Weight Losing" },
    { image: gallery2, title: "Weight Gaining" },
    { image: gallery3, title: "Exercises Routine" },
    { image: gallery4, title: "Body Building" },
    { image: gallery5, title: "Muscles Making" },
    { image: gallery6, title: "Arms Building" }
  ];

  return (
    <section id="gallery-section" className="section-inline-padding section-block-padding">
      <h1 className="section-heading">Gallery</h1>
      
      <div className="gallery-row gallery-row-1">
        {galleryItems.slice(0, 3).map((item, index) => (
          <GalleryBox key={index} image={item.image} title={item.title} />
        ))}
      </div>
      
      <div className="gallery-row gallery-row-2">
        {galleryItems.slice(3).map((item, index) => (
          <GalleryBox key={index + 3} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export { GallerySection };