import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ isOpen, name, onClose, infoTooltip, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
      onClick={handleOverlay}
    >
      {/* the container for the contents */}
      <div className="popup__container">
        {/* here will be anything you add as `children`*/}
        {children}
        {/* add the close button */}
        <button
          aria-label="Close"
          type="button"
          className={`close-button ${
            infoTooltip ? "close-button_type_info" : ""
          }`}
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Popup;
