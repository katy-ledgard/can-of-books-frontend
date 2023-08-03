import React from "react";
import BestBooks from "./BestBooks";
import About from "./About";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<BestBooks />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}
