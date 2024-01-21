// Footer.js
import React from "react";
import "./Footer.css";

import imgPinLocation from "../../img/PinLocation-icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left-column">
          <div className="footer-left-content">{/* NO CONTENT  */}</div>
        </div>

        <div className="footer-right-column">
          <div className="footer-right-content">
            <div className="footer-content-name footer-column-80"> 
                <img src={imgPinLocation} alt="Pin location" height={30} /> 
              <span className="pin-span"> X-RAY ROOM 1</span>
            </div>
            <div className="footer-column-20">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
