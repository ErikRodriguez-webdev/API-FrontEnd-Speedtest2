import React from "react";
import { Button } from "reactstrap";
import "../App.css";

const CardDisplay = (props) => {
  return (
    <div className="container">
      <div>
        <img src={props.data} />
      </div>
      <Button onClick={() => props.setTrigger(true)} color="primary">
        Click for New Dog
      </Button>
    </div>
  );
};

export default CardDisplay;
