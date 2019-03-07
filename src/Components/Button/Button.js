import React from "react";
import "./Button.css";

export const TYPES = {
  SIDEMENU: "sideButtonWithIcon",
  ROUND: "roundButtonWithIcon"
};

export const Button = props => {
  return (
    <div className={props.buttonType == null ? TYPES.SIDEMENU:props.buttonType}>
      <img alt={props.Alt} src={props.icon} />
      { 
        props.buttonType === TYPES.ROUND
        ?
        props.text
        :
        <a href={props.theRoute}>{props.text}</a>
      }
    </div>
  );
};
