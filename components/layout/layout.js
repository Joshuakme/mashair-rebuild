import { Fragment } from "react";
// Import Components
import Header from "./header/header";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

export default Layout;
