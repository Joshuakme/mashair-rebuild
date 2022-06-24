import ReactDOM from "react-dom";
// Import Styles
import classes from "./backdrop.module.css";

function BackDrop() {
  return ReactDOM.createPortal(
    <div className={classes.backdrop}></div>,
    document.getElementById("backdrop")
  );
}

export default BackDrop;
