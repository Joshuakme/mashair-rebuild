// Import Next & React Components
import { useState } from "react";
import Link from "next/link";
// Import Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// Import Styles
import classes from "./loginForm.module.css";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [isFormSignUp, setIsFormSignUp] = useState(false);
  // States
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
    remember: false,
  });

  //   Functions
  function inputHandler(e) {
    const { name, value } = e.target;

    setLoginCred({ ...loginCred, [name]: value });
  }

  function formCHangeHandler() {
    setIsFormSignUp((prevState) => !prevState);
  }

  return (
    <form className={classes.form}>
      <div className={classes.loginHeader}>
        <h2>{isFormSignUp ? "註冊" : "登錄"}</h2>
        <p>
          Or&nbsp;
          <span className={classes.signup} onClick={formCHangeHandler}>
            {isFormSignUp ? "Log in" : "Sign up a new account"}
          </span>
        </p>
      </div>

      <div className={classes.formElementContainer}>
        <label htmlFor="email-address">Email address</label>
        <div className={classes.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} className={classes.inputIcon} />
          <input
            id="email-address"
            type="email"
            name="email"
            autoComplete="on"
            value={loginCred.email}
            className={classes.input}
            placeholder="Email Address"
            required
            onChange={inputHandler}
          />
        </div>
      </div>

      <div className={classes.formElementContainer}>
        <label htmlFor="email-address">Password</label>
        <div className={classes.inputContainer}>
          <FontAwesomeIcon icon={faKey} className={classes.inputIcon} />
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="on"
            value={loginCred.password}
            className={classes.input}
            placeholder="Password"
            required
            onChange={inputHandler}
          />
        </div>
      </div>

      <div className={classes.addContainer}>
        <div className={classes.rememberContainer}>
          <input
            id="remember"
            type="checkbox"
            name="remember"
            value={loginCred.remember}
            onChange={inputHandler}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        {isFormSignUp ? (
          <></>
        ) : (
          <Link href="#">
            <a>
              <span className={classes.forgotPassword}>
                Forgot your password?
              </span>
            </a>
          </Link>
        )}
      </div>

      <button className={classes.button}>
        {isFormSignUp ? "Create an Account" : "Sign In"}
      </button>

      <div className={classes.continueContainer}>
        <span className={classes.continueSpan}></span>
        <p className={classes.continue}>Or continue with</p>
        <span className={classes.continueSpan}></span>
      </div>

      <div className={classes.otherLoginContainer}>
        <div className={classes.buttonContainer}>
          <FontAwesomeIcon icon={faFacebook} className={classes.faIcons} />
        </div>
        <div className={classes.buttonContainer}>
          <FontAwesomeIcon icon={faTwitter} className={classes.faIcons} />
        </div>
        <div className={classes.buttonContainer}>
          <FontAwesomeIcon icon={faGithub} className={classes.faIcons} />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
