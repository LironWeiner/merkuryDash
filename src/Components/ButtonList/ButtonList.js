import React from "react";
import { Button } from "../Button/Button";
import { data } from "./ButtonListData";

const ButtonList = () => {
  return (
    <React.Fragment>
      {data.map(item => {
        return (
          <Button
            key={item.id}
            Alt={item.Alt}
            icon={item.icon}
            text={item.text}
            theRoute={item.theRoute}
          />
        );
      })}
    </React.Fragment>
  );
};
export default ButtonList;
