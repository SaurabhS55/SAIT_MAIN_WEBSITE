
import React, { useState, forwardRef } from "react";
import "../Style/Gallery.css";
import data from "../Data/GalleryImage";

const ResponsiveGallery = forwardRef((props, ref) => {
  const [selectedImage, setSelectedImage] = useState({ imageLink: "" });
  const images = data

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="try px-8 py-4 mt-12" ref={ref}>
      <h2 className="colorfont text-lg">GALLERY</h2>
      {images.length !== 0 ? (
        <div className="responsive-gallery">
          <div className="left-gallery">
            {images.slice(0, 3).map((image) => (
              <img
                key={image.id}
                src={image.imageLink}
                alt={image.title}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          <div className="left-gallery">
            {images.slice(3, 6).map((image) => (
              <img
                key={image.id}
                src={image.imageLink}
                alt={image.title}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          <div className="center-gallery">
            <img
              src={selectedImage.imageLink || images[7].imageLink}
              alt={images[7].title}
              onClick={() => handleImageSelect(null)}
            />
          </div>
          <div className="right-gallery">
            {images.slice(8, 11).map((image) => (
              <img
                key={image.id}
                src={image.imageLink}
                alt={image.title}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          <div className="right-gallery">
            {images.slice(11, 14).map((image) => (
              <img
                key={image.id}
                src={image.imageLink}
                alt={image.title}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
});

export default ResponsiveGallery;
