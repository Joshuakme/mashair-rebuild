// Import Next & React Components
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// Import Third Party Packages
import { useSession } from "next-auth/react";
import { Sling as Hamburger } from "hamburger-react";
// Import Components
import Nav from "./nav";
import BackDrop from "../../ui/backdrop/backdrop";
// Import Styles
import classes from "./header.module.css";

function Header() {
  // Sessions
  const { data: session, status } = useSession();
  // States
  const [isActive, setIsActive] = useState(false);
  let profileThumbPath;

  if (session) {
    if (!session.user.imgUrl || session.user.imageUrl === "") {
      profileThumbPath = "/images/users/user-skeleton.png";
    } else {
      profileThumbPath = session.user.imgUrl;
    }
  }

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
      <h2>
        <Link href="/">Mashair Beauty</Link>
      </h2>
      <div className={classes.center}></div>
      {!session ? (
        <></>
      ) : (
        <div className={classes.userThumbnail}>
          <p>
            {session.user.name.first} {session.user.name.last}
          </p>

          <Link href="/user">
            <a>
              <div className={classes.profileThumbnail}>
                <Image src={profileThumbPath} width={48} height={48} />
              </div>
            </a>
          </Link>
        </div>
      )}

      <Nav isActive={isActive} setIsActive={setIsActive} />
      {isActive && <BackDrop />}
    </header>
  );
}

export default Header;
