import { useState } from "react";
import imageContext from "./imageContext";

const ImageState = (props) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const password = process.env.REACT_APP_PASSWORD;
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    console.log(password)
    const response = await fetch(`${backendUrl}/images/getImages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "password":password
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
