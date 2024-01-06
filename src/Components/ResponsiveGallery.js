
import React, { useState, forwardRef } from "react";
import "../Style/Gallery.css";
import data from "../Data/GalleryImage";

const ResponsiveGallery = forwardRef((props, ref) => {
  const [selectedImage, setSelectedImage] = useState({ imageLink: "" });
  const images = data.slice(0,13)

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="try px-8 py-4 mt-12" ref={ref}>
      <h1 className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 mb-4">
        GALLERY
      </h1>
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
              alt={images[6].title}
            />
          </div>
          <div className="right-gallery">
            {images.slice(6, 9).map((image) => (
              <img
                key={image.id}
                src={image.imageLink}
                alt={image.title}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          <div className="right-gallery">
            {images.slice(9).map((image) => (
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
