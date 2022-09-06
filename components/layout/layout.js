import Header from "./header";

function Layout(props) {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
