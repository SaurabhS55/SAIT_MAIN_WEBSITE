import React from "react";

const Image = ({ mentor }) => {
  return (
    <img
      loading="lazy"
      placeholder={mentor.Names}
      src={mentor.Photo}
      alt={mentor.Name}
      className="w-[9rem] h-[9rem] mx-auto rounded-full aspect-square bg-gray-400 transition-all duration-300"
    ></img>
  );
};

export default Image;
