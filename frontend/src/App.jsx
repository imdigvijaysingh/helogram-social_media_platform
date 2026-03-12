import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import Authentication from "./pages/Authentication";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
