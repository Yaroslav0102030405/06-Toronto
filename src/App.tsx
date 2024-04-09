import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";
import Installation from "./components/Installation/Instalation";
import Accordion from "./components/Accordion/Accordion";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Installation />
        <Accordion
          title="Dishwasher"
          text1="Inspect supply line condition"
          text2="Inspect drain hose condition"
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
