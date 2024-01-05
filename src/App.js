import React from "react";
import { Routes, Route } from "react-router-dom";

import EventDetails from "./Components/EventDetails";

import Main from "./Main";
import ClubServices from "./Components/ClubServices";
import InstaPosts from "./Components/InstaPosts";
import OurTeam from "./Components/OurTeam";
import Reports from "./Components/Reports";
const App = () => {

  return (
    <div className="App overflow-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/clubservice" element={<ClubServices />} />
          <Route path="/EventDetails/:id" element={<EventDetails />} />
          <Route path="/instaposts" element={<InstaPosts />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/reports" element={<Reports/>}/>
        </Routes>
    </div>
  );
}

export default App;
