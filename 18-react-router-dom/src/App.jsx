import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
