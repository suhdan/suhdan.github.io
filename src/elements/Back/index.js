import { h, Component } from "preact";
import "./styles.css";

const Back = (props) => {
  return (
    <div onClick={props.onClick} className="back">
      <div>
        <div id="back-grid-item-1"></div>
        <div id="back-grid-item-2"></div>
      </div>
      <div>
        <div id="back-grid-item-3"></div>
        <div id="back-grid-item-4"></div>
      </div>
    </div>
  );
};

export default Back;
