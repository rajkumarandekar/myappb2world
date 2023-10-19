import React, { useState } from "react";
import "./index.css";

function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container">
      <button className="btn" onClick={openPopup}>
        Submit
      </button>
      {isPopupOpen && (
        <div className="popup open-popup">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1694007226/404-tick_oazj6y.png"
            alt="kk"
          />
          <h2>Thank You!</h2>
          <p>Your details have been successfully submitted. Thanks!</p>
          <button onClick={closePopup}>OK</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
