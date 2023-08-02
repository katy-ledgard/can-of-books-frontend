import React from 'react';
import BestBooks from './BestBooks';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route 
            exact path="/"
            element={<BestBooks />}
          >
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}