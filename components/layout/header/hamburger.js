// Import Styles
import { useEffect } from "react";
import classes from "./hamburger.module.css";

function Hamburger(props) {
  // Constants & State
  const { isActive, setIsActive } = props;

  // Functions
  function hamburgerAnimationHandler() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    const backdrop = document.getElementById("backdrop");

    backdrop.addEventListener("click", () => {
      setIsActive(false);
    });
  }, []);

  return (
    <div
      className={classes.hamburger}
      active={isActive.toString()}
      onClick={hamburgerAnimationHandler}
    >
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
    </div>
  );
}

export default Hamburger;
