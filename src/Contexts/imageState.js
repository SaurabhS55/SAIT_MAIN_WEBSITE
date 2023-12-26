import { useState } from "react";
import imageContext from "./imageContext";

const ImageState = (props) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await fetch("http://localhost:5000/images/getImages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    json = json.reverse();
    setImages(json);
  };

  return (
    //sending props in context
    <imageContext.Provider
      value={{
        images,
        setImages,
        getImages,
      }}
    >
      {props.children}
    </imageContext.Provider>
  );
};
export default ImageState;
