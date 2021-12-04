import { h } from "preact";
import "./styles.css";

const Modal = ({ visible, children }) => (
  <div className={`modal ${visible ? "" : "hide"}`}>{children}</div>
);

export default Modal;
