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

  const hiddenDiv = document.createElement("div");

  function checkTextWidth(e) {
    let content = null;
    let txtaHeightNum = 0;

    content = e.target.value;

    hiddenDiv.className = classes.inputMsg;

    e.target.parentNode.appendChild(hiddenDiv);

    hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

    hiddenDiv.style.visibility = "hidden";
    hiddenDiv.style.display = "block";
    e.target.rols = "auto";
    e.target.style.height = hiddenDiv.offsetHeight + "px";

    // Make the hidden div display:none again
    hiddenDiv.style.visibility = "visible";
    hiddenDiv.style.display = "none";

    // e.target.style.height = e.target.scrollHeight + "px";

    txtaHeightNum = parseInt(e.target.style.height.replace("px", ""));

    if (txtaHeightNum === 120) {
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
                className={classes.inputMsg}
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
