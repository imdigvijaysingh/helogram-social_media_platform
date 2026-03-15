import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import TempPage from "./pages/tempPage";
import Authentication from "./pages/Authentication";
import CreateProfile from "./pages/CreateProfile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/profile" element={<CreateProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/temp" element={<TempPage />} />
      </Routes>
    </div>
  );
};

export default App;
