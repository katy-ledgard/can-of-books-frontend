import React from "react";
import BestBooks from "./BestBooks";
import About from "./About";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BestBooks />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
