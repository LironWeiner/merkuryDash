import React from "react";
import timerIcon from "../../Icons/timericon.png";
import redtimerIcon from "../../Icons/tasks/redtimericon.png";
import optionsWheelIcon from "../../Icons/messages/optionswheelicon.png";
import respondIcon from "../../Icons/messages/respondicon.png";
import "./InfoCardItem.css";

export const TYPES = {
  ACTIVITY: "activity",
  MESSAGES: "messages",
  TASKS: "tasks"
};

export const InfoCardItem = props => {
  const activityCardHandler = () => {
    const paddingTopStyle = props.isFirstItem ? { paddingTop: "28px" } : null;
    return (
      <div style={paddingTopStyle} className="activityCardItenContainer">
        <div className="personImageContainer">
          <img alt="icon" src={props.data.personIcon} />
          {props.listLength - 1 === props.data.id ? null : (
            <div className="timeLine" />
          )}
        </div>
        <div className="activityCardItemTextContainer">
          <div className="activityCardItemText">
            <span>{props.data.name} </span>
            <span>{props.data.activityType} </span>
            <span>{props.data.type}</span>
          </div>
          <div className="activityCardItemTimeContainer">
            <img alt="timer" src={timerIcon} />
            <span> {props.data.time}</span>
          </div>
        </div>
      </div>
    );
  };

  const messagesCardHandler = () => {
    const cardItemClass = ["messagesCardItemContainer"];
    if (!props.data.watched) {
      cardItemClass.push("messagesCardItemContainer-Watched");
    }
    return (
      <div className={cardItemClass.join(" ")}>
        <div className="personImageContainer">
          <img alt="icon" src={props.data.personIcon} />
        </div>
        <div className="messagesCardItemTextContainer">
          <div className="messagesCardItemTextRow1">
            <span>{props.data.name}</span>
            <span>{props.data.time}</span>
          </div>
          <div className="messagesCardItemTextRow2">
            <span>{props.data.text}</span>
          </div>
          <div className="messagesCardItemButtonGroup">
            <img alt="respond" src={respondIcon} />
            <img alt="options" src={optionsWheelIcon} />
          </div>
        </div>
      </div>
    );
  };

  const tasksCardHandler = () => {
    return (
      <div className="tasksCardItemContainer">
        <div className="taskBadge">
          <span>{props.data.text.charAt(0)}</span>
        </div>
        <div className="taskCardItemTextContainer">
          <span>{props.data.text}</span>
          {
              props.data.delay ?
                <div className="taskCardItemRow2">
                  <img alt="timer" src={redtimerIcon} />
                  <span className="delayTask">{props.data.time}</span>
                </div>
              :
                <div className="taskCardItemRow2">
                  <img alt="timer" src={timerIcon} />
                  <span>{props.data.time}</span>
                </div>
          }
        </div>
      </div>
    );
  };

  let cardTypeHandler;
  switch (props.typeOfCard) {
    case TYPES.ACTIVITY:
      cardTypeHandler = activityCardHandler();
      break;
    case TYPES.MESSAGES:
      cardTypeHandler = messagesCardHandler();
      break;
    case TYPES.TASKS:
      cardTypeHandler = tasksCardHandler();
      break;

    default:
      console.log("No such type please choose one of the valid TYPES");
      break;
  }
  return <React.Fragment>{cardTypeHandler}</React.Fragment>;
};
