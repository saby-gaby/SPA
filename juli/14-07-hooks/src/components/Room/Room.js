import React, { useState } from "react";
import "./Room.scss";
import Light from "../Light/Light";
import { Button } from "react-bootstrap";

const Room = (props) => {
  const [isLightOn, setLight] = useState(false);

  const clickHandler = () => {
    setLight(!isLightOn);
  };

  const luminosity = isLightOn ? "lit" : "dark";
  const buttonText = isLightOn ? "Turn me down" : "Turn me on";

  return (
    <div className="room">
      <div>
        <Light className={luminosity} />
        <Button onClick={clickHandler} className="light-button" variant="light">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Room;
