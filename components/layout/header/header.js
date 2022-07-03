// Import Next & React Components
import Link from "next/link";
import { useEffect, useState } from "react";
// Import Third Party Packages
import { useSession } from "next-auth/react";
import { Sling as Hamburger } from "hamburger-react";
// Import Components
// import Hamburger from "./hamburger";
import Nav from "./nav";
import BackDrop from "../../ui/backdrop/backdrop";
// Import Styles
import classes from "./header.module.css";

function Header() {
  // States
  const [isActive, setIsActive] = useState(false);

  // Functions
  function hamburgerAnimationHandler(toggled) {
    setIsActive(!toggled);
  }

  return (
    <header className={classes.header}>
      <Hamburger
        label="Show menu"
        toggle={setIsActive}
        toggled={isActive}
        rounded
        direction="left"
        color="white"
        duration={0.5}
      />
      {/* <Hamburger isActive={isActive} setIsActive={setIsActive} /> */}
      <h2>
        <Link href="/">Mashair Beauty</Link>
      </h2>
      <Nav isActive={isActive} setIsActive={setIsActive} />
      {isActive && <BackDrop />}
    </header>
  );
}

export default Header;
