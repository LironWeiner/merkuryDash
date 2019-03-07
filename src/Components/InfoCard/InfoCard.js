import React from "react";
import { InfoCardItem } from "../InfoCardItem/InfoCardItem";
import "./InfoCard.css";

const InfoCard = props => {
  return (
    <div className="infoCardContainer">
      <div className="infoCardRow1">
        <h4>{props.cardTitle}</h4>
        {props.badges.map(badge => {
          return (
            <span key={badge.id} style={badge.style} className="badge">
              {badge.listSize}
            </span>
          );
        })}
      </div>
      <div className="infoCardRow2">
        {props.data.map((item, index) => {
          const isFirst = index === 0 ? true : false;
          return (
            <InfoCardItem
              isFirstItem={isFirst}
              typeOfCard={props.typeOfCard}
              key={item.id}
              data={item}
              listLength={props.data.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InfoCard;
