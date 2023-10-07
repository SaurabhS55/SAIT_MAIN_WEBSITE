import React from "react";
import {  Routes, Route } from "react-router-dom";

import EventDetails from "./Components/EventDetails";

import Main from "./Main";
import ClubServices from "./Components/ClubServices";

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Main/>} />
            <Route path="/clubservice" element={ <ClubServices/>} />
            <Route path="/EventDetails/:id" element={<EventDetails />} />
        </Routes>
     
    </div>
  );
}

export default App;