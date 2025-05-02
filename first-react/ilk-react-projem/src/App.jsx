
import React from "react";
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./sections/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;