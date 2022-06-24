// Import Next Componenets
import Link from "next/link";
// Import Third Party Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignIn,
  faSignOut,
  faUser,
  faSync,
  faCalendarDay,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
// Import Styles
import classes from "./nav.module.css";

function Nav(props) {
  const { isLogin, userType, isActive, setIsActive } = props;
  const allNavList = {
    guest: [
      {
        title: "主頁",
        icon: <FontAwesomeIcon icon={faHome} />,
        href: "/",
      },
      {
        title: "登入",
        icon: <FontAwesomeIcon icon={faSignIn} />,
        href: "/login",
      },
      {
        title: "註冊",
        icon: <FontAwesomeIcon icon={faUser} />,
        href: "/signup",
      },
    ],
    customer: [
      {
        title: "主頁",
        icon: <FontAwesomeIcon icon={faHome} />,
        href: "/",
      },
      {
        title: "用戶資料",
        icon: <FontAwesomeIcon icon={faUser} />,
        href: "/user",
      },
      {
        title: "預約",
        icon: <FontAwesomeIcon icon={faCalendarDay} />,
        href: "/booking",
      },
      {
        title: "聊天室",
        icon: <FontAwesomeIcon icon={faCommentAlt} />,
        href: "/chatroom",
      },
      {
        title: "登出",
        icon: <FontAwesomeIcon icon={faSignOut} />,
        href: "/signout",
      },
    ],
    seller: [
      {
        title: "主頁",
        icon: <FontAwesomeIcon icon={faHome} />,
        href: "/",
      },
      {
        title: "用戶資料",
        icon: <FontAwesomeIcon icon={faUser} />,
        href: "/user",
      },
      {
        title: "配對",
        icon: <FontAwesomeIcon icon={faSync} />,
        href: "/pairing",
      },
      {
        title: "聊天室",
        icon: <FontAwesomeIcon icon={faCommentAlt} />,
        href: "/chatroom",
      },
      {
        title: "登出",
        icon: <FontAwesomeIcon icon={faSignOut} />,
        href: "/signout",
      },
    ],
  };
  let navList;

  if (isLogin) {
    if (userType === "customer") {
      navList = allNavList.customer;
    } else {
      navList = allNavList.seller;
    }
  } else {
    navList = allNavList.guest;
  }

  // Functions
  function navAnimationHandler() {
    setIsActive(false);
  }

  return (
    <nav className={classes.nav} active={isActive.toString()}>
      <ul>
        {navList.map((navItem, index) => (
          <li key={index} onClick={navAnimationHandler}>
            <Link href={navItem.href}>
              <a>
                <span className={classes.navIcon}>{navItem.icon}</span>
                {navItem.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
