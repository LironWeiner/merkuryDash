import React from "react";
import { CSSTransition } from "react-transition-group";
import downarrowIcon from "../../Icons/downarrowicon.png";
import "./Dropdown.css";

const Dropdown = props => {
  return (
    <div className="dropdownContainer">
      <div
        onClick={() => props.showDropdownHandler()}
        className="dropdownButton"
      >
        <span>Period: </span>
        {props.selectedListItem == null
          ? props.list[0].text
          : props.list[props.selectedListItem].text}
        <img alt="arrowdown" className="arrowdown" src={downarrowIcon} />
      </div>
      <CSSTransition
        in={props.isVisible}
        timeout={0}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: "dropdownMenuActive",
          enterDone: "dropdownMenuActive",
          exit: "dropdownMenu"
        }}
      >
        <div>
          <ul>
            {props.list.map(item => {
              return (
                <li
                  onClick={() => props.selectListItemHandler(item.id)}
                  key={item.id}
                >
                  <span>Period: </span>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};
export default Dropdown;
