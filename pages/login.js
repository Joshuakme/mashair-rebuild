// Import Next Components
import Head from "next/head";
// Import Components
import LoginForm from "../components/auth/loginForm";
// Import Styles
import classes from "../styles/login.module.css";

function Login() {
  return (
    <section className={classes.loginSection}>
      <Head>
        <title>Login</title>
      </Head>

      <LoginForm />
    </section>
  );
}

export default Login;
