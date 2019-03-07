import React from "react";
import { CSSTransition } from "react-transition-group";
import logoIcon from "../../Icons/logoicon.png";
import ButtonList from "../ButtonList/ButtonList";
import "./SideMenu.css";

const SideMenu = props => {
  return (
    <CSSTransition
      in={props.isVisible}
      timeout={{ enter: 0, exit: 150 }}
      unmountOnExit
      classNames={{
        enterActive: "SideContainerHidden",
        enterDone: "SideContainer",
        exit: "SideContainerExit",
        exitDone: "SideContainerHidden"
      }}
    >
      <div>
        <div className="logo">
          <img alt="logo" src={logoIcon} />
        </div>
        <ButtonList />
      </div>
    </CSSTransition>
  );
};
export default SideMenu;
