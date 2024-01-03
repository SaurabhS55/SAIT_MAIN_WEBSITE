import React from "react";
import { Routes, Route } from "react-router-dom";

import EventDetails from "./Components/EventDetails";

import Main from "./Main";
import ClubServices from "./Components/ClubServices";
import InstaPosts from "./Components/InstaPosts";

const App = () => {

  return (
    <div className="App overflow-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/clubservice" element={<ClubServices />} />
          <Route path="/EventDetails/:id" element={<EventDetails />} />
          <Route path="/instaposts" element={<InstaPosts />} />
        </Routes>
    </div>
  );
}

export default App;
