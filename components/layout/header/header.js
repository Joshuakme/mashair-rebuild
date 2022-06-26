// Import Next & React Components
import Link from "next/link";
import { useState } from "react";
// Import Components
import Hamburger from "./hamburger";
import Nav from "./nav";
import BackDrop from "../../ui/backdrop/backdrop";
// Import Styles
import classes from "./header.module.css";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState("customer");

  return (
    <header className={classes.header}>
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <h2>
        <Link href="/">Mashair Beauty</Link>
      </h2>
      <Nav
        isLogin={isLogin}
        userType={userType}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {isActive && <BackDrop />}
    </header>
  );
}

export default Header;
