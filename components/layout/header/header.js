// Import Next & React Components
import Link from "next/link";
import { useEffect, useState } from "react";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import Components
import Hamburger from "./hamburger";
import Nav from "./nav";
import BackDrop from "../../ui/backdrop/backdrop";
// Import Styles
import classes from "./header.module.css";

function Header() {
  // States
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={classes.header}>
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <h2>
        <Link href="/">Mashair Beauty</Link>
      </h2>
      <Nav isActive={isActive} setIsActive={setIsActive} />
      {isActive && <BackDrop />}
    </header>
  );
}

export default Header;
