import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import MainContent from "../src/components/MainContent/MainContent";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <MainContent /> 
      <Footer />
    </div>
  );
}

export default App;
