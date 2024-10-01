import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/400/320', // New photo placeholder
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery">
      <h2>Memories You Cherish</h2>
      <div className="image-slider">
        <button onClick={prevImage} className="slider-btn prev">&#10094;</button>
        <img 
          src={images[currentImage]} 
          alt={`Memory ${currentImage + 1}`} 
          style={{maxWidth: '100%', height: 'auto'}}
        />
        <button onClick={nextImage} className="slider-btn next">&#10095;</button>
      </div>
      <p>Image {currentImage + 1} of {images.length}</p>
    </section>
  );
}

export default Gallery;