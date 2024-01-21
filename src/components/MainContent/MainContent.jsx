// MainContent.js
import React, { useState } from "react";
import "../../App.css";
import "./MainContent.css";

// Left icons
import Picon1 from "../../img/Patient-icon1.png";

// Precaution Icon
import PcautioniconBox from "../../img/precaution-icon-box.png";

// Mobility Icon
import MiconSquare from "../../img/mobility-icon-box.png";
import MiconCircle from "../../img/mobility-icon-circle.png";

function MainContent() {
  const [PatientIconCounter, setPatientIconCounter] = useState(3); // Default 3 Max 4?
  const [PrecautionCounter, setPrecautionCounter] = useState(7); // Default 7 Max 7 - DONE
  const [MobilityCounter, setMobilityCounter] = useState(4); // Default 4 Max 4 - DONE
  const [MobilitySqaureCounter, setMobilitySqaureCounter] = useState(2); // Default 2 Max 2 - DONE
  const [CareInstructionCircleCounter, setCareInstructionCircleCounter] =
    useState(7); // Default 7 Max 8 - DONE

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Max 4 - Patient Icon
  const incrementPatientIconCounter = () => {
    if (PatientIconCounter < 4) {
      setPatientIconCounter(PatientIconCounter + 1);
    }
  };
  const decrementPatientIconCounter = () => {
    if (PatientIconCounter > 0) {
      setPatientIconCounter(PatientIconCounter - 1);
    }
  };
  const PatientIconDivs = () => {
    const divs = [];
    for (let i = 0; i < PatientIconCounter; i++) {
      divs.push(
        <div key={i} className="PatientIcon animate__animated animate__flipInX">
          <img src={Picon1} alt="Patient icon" />
        </div>
      );
    }
    return divs;
  };

  //  Max 4 - Mobility Icon Circle
  const incrementMobilityCounter = () => {
    if (MobilityCounter < 4) {
      setMobilityCounter(MobilityCounter + 1);
    }
  };
  const decrementMobilityCounter = () => {
    if (MobilityCounter > 0) {
      setMobilityCounter(MobilityCounter - 1);
    }
  };
  const MobilityDivs = () => {
    const divs = [];
    for (let i = 0; i < MobilityCounter; i++) {
      divs.push(
        <div key={i} className="box-content-circle-img">
          <img
            className="square-icon-img animate__animated animate__flipInX"
            src={MiconCircle}
            alt="Mobility icon"
          />
        </div>
      );
    }
    return divs;
  };

  //  Max 2 - Mobility Icon Sqaure
  const incrementMobilitySqaureCounter = () => {
    if (MobilitySqaureCounter < 2) {
      setMobilitySqaureCounter(MobilitySqaureCounter + 1);
    }
  };
  const decrementMobilitySqaureCounter = () => {
    if (MobilitySqaureCounter > 0) {
      setMobilitySqaureCounter(MobilitySqaureCounter - 1);
    }
  };
  const MobilitySqaureDivs = () => {
    const divs = [];
    for (let i = 0; i < MobilitySqaureCounter; i++) {
      divs.push(
        <div key={i} className="box-content-text-img">
          <img
            className="square-icon-img animate__animated animate__flipInX"
            src={MiconSquare}
            alt="Mobility icon"
          />
        </div>
      );
    }
    return divs;
  };

  // Max 7 - Precaution
  const incrementPrecautionCounter = () => {
    if (PrecautionCounter < 7) {
      setPrecautionCounter(PrecautionCounter + 1);
    }
  };
  const decrementPrecautionCounter = () => {
    if (PrecautionCounter > 0) {
      setPrecautionCounter(PrecautionCounter - 1);
    }
  };
  const PrecautionIconDivs = () => {
    const divs = [];
    for (let i = 0; i < PrecautionCounter; i++) {
      divs.push(
        <div key={i} className="picon-image animate__animated animate__flipInY">
          <img
            className="square-icon-img"
            src={PcautioniconBox}
            alt="Precaution icon"
          />
        </div>
      );
    }
    return divs;
  };

  // Max 8 - Care Instructions
  const incrementCareInstructionCircleCounter = () => {
    if (CareInstructionCircleCounter < 8) {
      setCareInstructionCircleCounter(CareInstructionCircleCounter + 1);
    }
  };
  const decrementCareInstructionCircleCounter = () => {
    if (CareInstructionCircleCounter > 0) {
      setCareInstructionCircleCounter(CareInstructionCircleCounter - 1);
    }
  };
  const CareInstructionCircleDivs = () => {
    const divs = [];
    for (let i = 0; i < CareInstructionCircleCounter; i++) {
      divs.push(
        <div key={i} className="box-content-circle-img-25">
          <img
            className="square-icon-img  animate__animated animate__flipInX"
            src={MiconCircle}
            alt="Care Instructions icon"
          />
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="flex-container">
      {/* START CONTROLLER  */}
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleContent}>
          .
        </button>
        {isContentVisible && (
          <div className="hidden-content">
            <span>Patient</span>
            <button onClick={incrementPatientIconCounter}>sqaure +</button>
            <button onClick={decrementPatientIconCounter}>sqaure -</button>
            <br />
            <span>Precaution</span>
            <button onClick={incrementPrecautionCounter}>square + </button>
            <button onClick={decrementPrecautionCounter}>square - </button>
            <br />
            <span>Mobility</span>
            <button onClick={incrementMobilityCounter}>cirlce +</button>
            <button onClick={decrementMobilityCounter}>cirlce -</button>
            <button onClick={incrementMobilitySqaureCounter}>square +</button>
            <button onClick={decrementMobilitySqaureCounter}>square -</button>
            <br />
            <span>Care Instructions</span>
            <button onClick={incrementCareInstructionCircleCounter}>
              cirlce +
            </button>
            <button onClick={decrementCareInstructionCircleCounter}>
              cirlce -
            </button>
          </div>
        )}
      </div>
      {/* END CONTROLLER  */}

      <main className="content">
        {/* LEFT SIDE  */}
        <div className="left-column">
          <div className="header-title header-align-left text-nowrap">
            <span className="sub-content-header"> Ward 55 </span>
            <span> | </span>
            <span className="sub-content-header"> Room 77 </span>
            <span> | </span>
            <span className="sub-content-header"> Bed 77 </span>
          </div>

          <div className="header-title header-align-left spacing-top-10">
            <span className="sub-content-header"> Doctor In-Charge </span>
          </div>
          <div className="sub-content-data">
            <span className="margin-left-5">Dr. Marianne Christy</span>
          </div>

          <div className="header-title header-align-left spacing-top-10">
            <span className="sub-content-header"> Nurse </span>
          </div>
          <div className="sub-content-data">
            <span className="margin-left-5">Ms. Tan Ah Beng</span>
          </div>

          <div className="sub-content-language spacing-top-10">
            {/* Max of 2 language  */}
            <div className="language-content animate__animated animate__flipInX">
              <span>English</span>
            </div>
            <div className="language-content animate__animated animate__flipInX">
              <span>Mandarin</span>
            </div>
          </div>

          {/* Max of 3 Patient Icon  */}
          <div className="sub-content-picons">{PatientIconDivs()}</div>

          <div className="sub-content-datetime spacing-top-10">
            <span className="margin-left-5">FRI, 12/01/24, 10:00 AM</span>
          </div>

          <div className="sub-content-other">
            <div className="sub-content-otherline">
              <span className="margin-left-5">ADM: TUE, 09/01/24</span>
            </div>
            <div className="sub-content-otherline">
              <span className="margin-left-5">EDD: TUE, 09/01/24</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className="right-column">
          {/* PRECAUTIONS  */}
          <div className="header-title header-align-left">
            <span className="sub-content-header"> Precautions </span>
          </div>
          <div className="sub-contentbox-one">
            <div className="sub-content-iconSquare">{PrecautionIconDivs()}</div>
          </div>

          {/* ###############
                Start - Nutrition | Mobility
                ############### */}
          <div className="content-column-2 spacing-top-1-2">
            {/* NUTRITION */}
            <div className="column-2 margin-right-05">
              <div className="header-title header-align-left ">
                <span className="sub-content-header"> Nutrition </span>
              </div>

              <div className="sub-contentbox-two">
                <div className="sub-content-iconSquareTwo">
                  <div className="box-content-text animate__animated animate__flipInX">
                    <span>Moderately Thick</span>
                  </div>
                  <div className="box-content-text animate__animated animate__flipInX">
                    <span>Transitional Feeding</span>
                  </div>
                  <div className="box-content-text animate__animated animate__flipInX">
                    <span>Therapeutic</span>
                  </div>
                  <div className="box-content-text animate__animated animate__flipInX">
                    <span>Soft & Bite Size</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILIY */}
            <div className="column-2 margin-left-05">
              <div className="header-title header-align-left ">
                <span className="sub-content-header"> Mobility </span>
              </div>

              <div className="sub-contentbox-two-img">
                {/* MOBILITY - Circle  */}
                <div className="box-content-image-2col">{MobilityDivs()}</div>

                {/* MOBILITY - Square  */}
                <div className="box-content-image-1col">
                  {MobilitySqaureDivs()}
                </div>
              </div>
            </div>
          </div>
          {/* ###############
                End - Nutrition | Mobility  
                ############### */}

          {/* ###############
                Start - Care Instruction | Special Instruction
                ############### */}
          <div className="content-column-2 spacing-top-1-2">
            {/* CARE INSTRUCTIONS */}
            <div className="column-2 margin-right-05">
              <div className="header-title header-align-left ">
                <span className="sub-content-header"> Care Instructions </span>
              </div>

              <div className="sub-contentbox-two">
                {CareInstructionCircleDivs()}
              </div>
            </div>

            {/* SPECIAL INSTRUCTIONS */}
            <div className="column-2 margin-left-05">
              <div className="header-title header-align-left ">
                <span className="sub-content-header">Special Instructions</span>
              </div>

              <div className="sub-content-information">
                <span>More information will be added in this secion...</span>
              </div>
            </div>
          </div>
          {/* ###############
                End - Care Instruction | Special Instruction  
                ############### */}
        </div>
      </main>
    </div>
  );
}

export default MainContent;
