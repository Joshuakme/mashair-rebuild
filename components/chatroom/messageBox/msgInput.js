import React, { useRef } from "react";
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
  const inputMsgTxta = useRef();

  if (!window) {
    return;
  }

  function checkTextWidth(e) {
    let content = null;
    let txtaHeightNum = 0;

    content = e.target.value;

    e.target.rols = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    txtaHeightNum = e.target.style.height.replace("px", "");

    if (txtaHeightNum > 120) {
      e.target.style.overflowY = "scroll";
    } else {
      e.target.style.overflowY = "hidden";
    }
  }

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

          <div className={classes.divMiddleContainer}>
            <div className={classes.inputTextContainer}>
              <textarea
                type="text"
                ref={inputMsgTxta}
                id="inputMsg"
                name="message"
                cols={1}
                rows={1}
                placeholder="Type a message"
                onChange={checkTextWidth}
              ></textarea>
            </div>
          </div>
          <div className={classes.divRightContainer}>
            {" "}
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
