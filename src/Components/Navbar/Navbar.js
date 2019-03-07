import React from "react";
import { Button, TYPES } from "../Button/Button";
import searchIcon from "../../Icons/searchicon.png";
import menuIcon from "../../Icons/menuicon.png";
import addIcon from "../../Icons/addicon.png";
import messagesIcon from "../../Icons/messagesicon.png";
import notificationsIcon from "../../Icons/notificationsicon.png";
import roundpersonIcon from "../../Icons/roundpersonicon.png";

import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navbarContainer">
      <div className="menuButtonContainer">
        {props.isVisible === true ? <div className="arrowLeftVisible" /> : null}
        <img
          onClick={() => props.openSideMenuHandler()}
          alt="menu"
          src={menuIcon}
        />
      </div>
      <img className="search" alt="search" src={searchIcon} />
      <div className="navbarRight">
        <Button buttonType={TYPES.ROUND} icon={addIcon} text="Add project" />
        <img className="messages" alt="messages" src={messagesIcon} />
        <div className="notificationsContainer">
          <img alt="notifications" src={notificationsIcon} />
          <span>3</span>
        </div>
        <img alt="personpicture" src={roundpersonIcon} />
        <div className="arrowDown" />
      </div>
    </div>
  );
};

export default Navbar;
