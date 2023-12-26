import React from "react";
import { Routes, Route } from "react-router-dom";

import EventDetails from "./Components/EventDetails";

import Main from "./Main";
import ClubServices from "./Components/ClubServices";
import ImageState from "./Contexts/imageState";

const App = () => {

  return (
    <div className="App overflow-hidden">
      <ImageState>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/clubservice" element={<ClubServices />} />
          <Route path="/EventDetails/:id" element={<EventDetails />} />
        </Routes>
      </ImageState>
    </div>
  );
}

export default App;
