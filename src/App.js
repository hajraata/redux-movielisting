import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./styles/style.css";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/moviedetails" element={<MovieDetails />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
