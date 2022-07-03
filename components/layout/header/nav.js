// Import Next Componenets
import Link from "next/link";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SyncIcon from "@mui/icons-material/Sync";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import MessageIcon from "@mui/icons-material/Message";
// Import Styles
import classes from "./nav.module.css";

function Nav(props) {
  const { isActive, setIsActive } = props;

  // Sessions
  const { data: session, status } = useSession();

  // const [userType, setUserType] = useState("guest");
  const allNavList = {
    guest: [
      {
        title: "主頁",
        icon: <HomeIcon className={classes.muiIcons} />,
        href: "/",
      },
      {
        title: "登入",
        icon: <LoginIcon className={classes.muiIcons} />,
        href: "/login",
      },
    ],
    customer: [
      {
        title: "主頁",
        icon: <HomeIcon className={classes.muiIcons} />,
        href: "/",
      },
      {
        title: "用戶資料",
        icon: <PersonIcon className={classes.muiIcons} />,
        href: "/user",
      },
      {
        title: "預約",
        icon: <InsertInvitationIcon className={classes.muiIcons} />,
        href: "/booking",
      },
      {
        title: "聊天室",
        icon: <MessageIcon className={classes.muiIcons} />,
        href: "/chatroom",
      },
      {
        title: "登出",
        icon: <LogoutIcon className={classes.muiIcons} />,
        href: "/signout",
      },
    ],
    seller: [
      {
        title: "主頁",
        icon: <HomeIcon className={classes.muiIcons} />,
        href: "/",
      },
      {
        title: "用戶資料",
        icon: <PersonIcon className={classes.muiIcons} />,
        href: "/user",
      },
      {
        title: "配對",
        icon: <SyncIcon className={classes.muiIcons} />,
        href: "/pairing",
      },
      {
        title: "聊天室",
        icon: <MessageIcon className={classes.muiIcons} />,
        href: "/chatroom",
      },
      {
        title: "登出",
        icon: <LogoutIcon className={classes.muiIcons} />,
        href: "/signout",
      },
    ],
  };
  let navList;

  // Logged In
  if (session && status === "authenticated") {
    if (session.user.role === "customer") {
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
