import React from "react";
import About from "./components/About";
import Contact from './components/Contact';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Project />
    <Contact />
    </div>
  )
}

