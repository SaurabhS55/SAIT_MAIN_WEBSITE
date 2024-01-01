// import React, { useState, forwardRef, useContext, useEffect } from "react";
// import imageContext from "../Contexts/imageContext";

// const ResponsiveGallery = forwardRef((props, ref) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const context = useContext(imageContext);
//   const { images, getImages } = context;

//   useEffect(() => {
//     getImages();
//     // eslint-disable-next-line
//   }, []);

//   const handleImageSelect = (image) => {
//     setSelectedImage(image);
//   };

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const recentImages = (images.length!==0)?images.filter((image)=>{
//     if(image.identifier.indexOf("gallery")!==-1){
//       return image;
//     }else{
//       return null;
//     }
//   }).slice(0,6):[];

//   return (
//     <div>
//       {recentImages.length !== 0 ? (
//         <div className="w-11/12 mx-auto mt-24 p-6" ref={ref}>
//           <h2 className="colorfont text-3xl mb-6">Recent Gallery</h2>
//           <div className="responsive-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//             {recentImages.map((image) => (
//               <div key={image._id} className="relative group overflow-hidden cursor-pointer hover:z-10">
//                 <img
//                   src={image.imageLink}
//                   alt="Memory"
//                   className="w-full h-72 object-cover transition-transform transform scale-100 group-hover:scale-110"
//                   onClick={() => handleImageSelect(image)}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-0 flex items-center justify-center">
//                   <p className="text-white text-sm">{formatDate(image.date)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// });

// export default ResponsiveGallery;

import React, { useState, forwardRef, useContext, useEffect } from "react";
import imageContext from "../Contexts/imageContext";
import "../Style/Gallery.css";

const ResponsiveGallery = forwardRef((props, ref) => {
  const [selectedImage, setSelectedImage] = useState({imageLink:""});
  const context = useContext(imageContext);
  const { images, getImages } = context;

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="try " ref={ref}>
      <h2 className="colorfont ">GALLERY</h2>
      {images.length !== 0 ? (
        <div className="responsive-gallery">
          <div className="left-gallery">
            {images.slice(0,3).map((image) => (
              <img
                key={image.id}
                src={image.imageLink}
                alt={image.title}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          <div className="left-gallery">
            {images.slice(3,6).map((image) => (
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
            {images.slice(8,11).map((image) => (
              <img
              key={image.id}
              src={image.imageLink}
              alt={image.title}
              onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          <div className="right-gallery">
            {images.slice(11,14).map((image) => (
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
