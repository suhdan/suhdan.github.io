import { h } from "preact";
import "./styles.css";

const Modal = (props) => {
  return (
    <div className={`modal ${props.visible ? "" : "hide"}`}>
      {props.children}
    </div>
  );
};

export default Modal;
