import "./PopupServerError.css";
import React from "react";

const PopupServerError = ({ popupServerError }) => {
  return <p className="popup-server-error">{popupServerError}</p>;
};

export default PopupServerError;
