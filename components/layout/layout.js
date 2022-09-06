import Header from "./header";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
