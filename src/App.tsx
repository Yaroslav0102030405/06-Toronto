import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";
import Installation from "./components/Installation/Instalation";
import Accordion from "./components/Accordion/Accordion";
import GalleryImages from "./components/GalleryImages/GalleryImages";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Installation />
        <GalleryImages />
        <Accordion
          title="Dishwasher"
          text1="Inspect supply line condition"
          text2="Inspect drain hose condition"
          text3="Inspect ring clamp tightness"
          text4="Inspect ring clamp condition"
          text5="Inspect shut off valve condition"
          text6="Inspect beneath dishwasher for signs of water leak"
          text7="Inspect supply line connection to dishwasher"
          text8="Inspect for rodent activity"
          text9="Check electric line and strain relief"
          text10="Inspect interior tub condition"
          text11="Inspect and clean drain"
          text12="basket Inspect cutlery basket condition"
        />
        <Accordion
          title="Refrigerator"
          text1="Inspect lighting condition"
          text2="Inspect air filter"
          text3="Inspect freezer for ice build up"
          text4="Inspect shelving condition"
          text5="Inspect crisper condition"
          text6="Inspect door seal condition and function"
          text7="Check temperature"
          text8="Inspect water filter"
          text9="Inspect ice maker"
          text10="Inspect water dispenser"
          text11="Inspect waterline condition"
          text12="Inspect water valve condition"
        />
        <Accordion
          title="Range Hood"
          text1="Inspect light bulb"
          text2="Inspect and clean filters"
          text3="Test blower operation"
          text4="Inspect exterior vent"
          text5="Inspect fan/blower condition"
          text6="Inspect venting connections"
          text7="Inspect damper operation"
          text8="Check and clean condenser coils"
          text9="Check level on refrigerator"
          text10="Check and clean front grill"
          text11="Inspect rack condition"
          text12="Run cycle with cleaning agent"
        />
        <Accordion
          title="Range"
          text1="Inspect all knobs/buttons for function"
          text2="Inspect burners for temperature control"
          text3="Inspect bake element for function and condition"
          text4="Inspect bake element for function and condition"
          text5="Oven temperature check"
          text6="Inspect cavity enamel condition"
          text7="Inspect door seal condition and function"
          text8="Inspect anti tip bracket"
          text9="Inspect gas supply hose condition*"
          text10="Inspect pilot*"
          text11="Inspect condition of ignitors*"
          text12="*Gas fueled appliances only"
        />
        <Accordion
          title="Washing Machine"
          text1="Inspect cold water shut off valve condition"
          text2="Inspect hot water shut off valve condition"
          text3="Inspect cold water supply hose condition"
          text4="Inspect hot water supply hose condition"
          text5="Inspect steam dryer water supply hose condition"
          text6="Inspect all hose connections for signs of leaks"
          text7="Inspect drain hose condition"
          text8="Inspect drain hose tie wrap condition"
          text9="Inspect boot for damage and mildew"
          text10="Clean boot with cleaning agent"
          text11="Inspect drum and interior condition"
          text12="Inspect coin trap"
        />
        <Accordion
          title="Dryer"
          text1="Inspect venting clamps"
          text2="Inspect venting condition"
          text3="Inspect lint screen"
          text4="Clean lint screen cavity"
          text5="Check level on dryer"
          text6="Inspect external vent outlet"
          text7="Inspect gas supply hose condition*"
          text8="Inspect pilot*"
          text9="*Gas fueled appliances only"
          text10="Inspect soap dispenser"
          text11="Run cycle with cleaning agent"
          text12="Check level"
        />
      </main>
      {/* <Modal /> */}
      <Footer />
    </>
  );
};

export default App;
