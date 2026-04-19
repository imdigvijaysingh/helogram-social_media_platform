import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import Authentication from "./pages/Authentication";
import CreateProfile from "./pages/CreateProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/profile" element={<CreateProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
