// Import Next & React Components
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Import Third Party Packages
import { signIn } from "next-auth/react";
// Import MUI Icons
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// Import Styles
import classes from "./loginForm.module.css";

function LoginForm() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isFormSignUp, setIsFormSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // States
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
    isRemember: false,
  });

  //   Functions
  function inputHandler(e) {
    const { name, value, id } = e.target;

    if (id === "remember") {
      const { checked } = e.target;
      setLoginCred({ ...loginCred, [name]: checked });
    }

    setLoginCred({ ...loginCred, [name]: value });
  }

  function showPasswordHandler() {
    const password = document.getElementById("password");

    setShowPassword((prevState) => {
      if (!prevState) {
        password.type = "text";
      } else {
        password.type = "password";
      }

      return !prevState;
    });
  }

  function formChangeHandler() {
    setIsFormSignUp((prevState) => !prevState);
  }

  function validateFormData(formData) {
    const { email, password, isRemember } = formData;

    if (isFormSignUp) {
      if (
        !email ||
        !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        // alert("Invalid Email Address");
        alert("郵件地址格式無效");
        return false;
      } else if (!password || password.trim() === "") {
        // alert("Invalid Password");
        alert("密碼輸入無效");
        return false;
      } else if (password.trim().length < 8 || password.trim().length > 16) {
        // "Password must be eight characters or more and cannot contain spaces"
        alert("密碼長度應為八個字符或更多並不能包括空格");
        return false;
      }

      return true;
    }
  }

  async function loginFormSubmitHandler(e) {
    e.preventDefault();

    if (isFormSignUp) {
      if (!validateFormData(loginCred)) return;

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(loginCred),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      alert(data.message);
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        email: loginCred.email,
        password: loginCred.password,
      });

      if (!result.ok) {
        alert(result.error);
      } else {
        alert("Logged In Successfully");
        router.push("/");
      }
    }

    // setLoginCred({
    //   email: "",
    //   password: "",
    //   isRemember: false,
    // });
  }

  return (
    <form className={classes.form} onSubmit={loginFormSubmitHandler}>
      <div className={classes.loginHeader}>
        <h2>{isFormSignUp ? "註冊" : "登錄"}</h2>
        <p>
          Or&nbsp;
          <span className={classes.signup} onClick={formChangeHandler}>
            {isFormSignUp ? "Log in" : "Sign up a new account"}
          </span>
        </p>
      </div>

      <div className={classes.formElementContainer}>
        <label htmlFor="email-address">Email address</label>
        <div className={classes.inputContainer}>
          <EmailIcon className={classes.inputIcon} />
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
        <label htmlFor="password">Password</label>
        <div className={classes.inputContainer}>
          <KeyIcon className={classes.inputIcon} />
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
            onPaste={(e) => e.preventDefault()}
          />
          {showPassword ? (
            <VisibilityOffIcon
              className={classes.passwordEye}
              onClick={showPasswordHandler}
            />
          ) : (
            <VisibilityIcon
              className={classes.passwordEye}
              onClick={showPasswordHandler}
            />
          )}
        </div>
      </div>

      <div className={classes.addContainer}>
        <div className={classes.rememberContainer}>
          <input
            id="remember"
            type="checkbox"
            name="isRemember"
            value={loginCred.isRemember}
            onChange={inputHandler}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        {isFormSignUp ? (
          <></>
        ) : (
          <Link href="/">
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
          <FacebookIcon
            className={classes.muiIcons}
            onClick={() => signIn("facebook")}
          />
        </div>
        <div className={classes.buttonContainer}>
          <TwitterIcon className={classes.muiIcons} />
        </div>
        <div className={classes.buttonContainer}>
          <GitHubIcon
            className={classes.muiIcons}
            onClick={() => signIn("github")}
          />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
