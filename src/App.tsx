import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";

// let test: string = 'test';
// test = 'test2';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
      </main>
      <Footer />
    </>
  );
}

export default App;
