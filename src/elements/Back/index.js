import { h } from "preact";
import "./styles.css";

const Back = ({ onClick }) => (
  <div onClick={onClick} className="back">
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

export default Back;
