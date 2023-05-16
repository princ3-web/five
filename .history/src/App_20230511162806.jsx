import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import Animals from "./pages/Animals.jsx";
import News from "./pages/News.jsx";
import Scrolltotop from "./components/Scrolltotop";

function App() {
  return (
    <div className={app.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/News" element={<News />} exact />
      </Routes>
      <Bottombar />
      <Scrolltotop />
    </div>
  );
}

export default App;
