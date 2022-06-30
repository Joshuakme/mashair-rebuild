import React from "react";
// Improt Third Party Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrin,
  faEllipsis,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
// Import Styles
import classes from "./msginput.module.css";

function MsgInput() {
  return (
    <form className={classes.inputContainer}>
      <span className={classes.emojiContent}></span>
      <span>
        <div className={classes.divContainer}>
          <div className={classes.divLeftContainer}>
            <div
              className={classes.iconContainer}
              style={{ marginRight: "0.5rem" }}
            >
              <FontAwesomeIcon icon={faGrin} />
            </div>
            <div className={classes.iconContainer}>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>

          <div className={classes.divRightContainer}>
            <div className={classes.inputTextContainer}>
              <input type="text" name="message" placeholder="Type a message" />
            </div>

            <div className={classes.iconContainer}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      </span>
    </form>
  );
}

export default MsgInput;
