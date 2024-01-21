// Header.js
import React, { useState } from "react";
import "../../App.css";
import "./Header.css";
import imgSample from "../../img/Header-icon.png";

function Header() {
  // Default 2 MAX 4
  const [counter, setCounter] = useState(3);

  // Max 4 - HeaderIconDivs
  const incrementCounter = () => {
    if (counter < 4) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const HeaderIconDivs = () => {
    const divs = [];
    for (let i = 0; i < counter; i++) {
      divs.push(
        <div
          key={i}
          className="header-this-icon header-content-mid2
        animate__animated animate__flipInY"
        >
          <span className="header-icon-view">
            <img src={imgSample} alt="header icon reference" />
          </span>
        </div>
      );
    }
    return divs;
  };

  return (
    <header className="header">
      {/* ### Header Icon Controller ### */}
      {/* <div className="Header-Controller">
        <span>header-controller </span>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div> */}
      {/* ### End Header Icon Controller ### */}

      <div className="header-details">
        <h1
          className="header-patient-name header-content-mid2
        animate__animated animate__fadeInDown"
        >
          Tan Ah Kou, Micheal Jordan
        </h1>
      </div>
      <div className="header-icons">{HeaderIconDivs()}</div>
    </header>
  );
}

export default Header;
