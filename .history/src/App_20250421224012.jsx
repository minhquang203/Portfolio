import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Hero />
    <About />
    </div>
  )
}

