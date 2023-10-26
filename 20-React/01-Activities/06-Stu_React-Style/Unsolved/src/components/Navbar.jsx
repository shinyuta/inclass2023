// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';


// TODO: Create a styles object called "styles"
const styles = {
  nav: {
    background: "green",
    justifyContent: "flex-end",
    padding: "10px",
  },
  a: {
    color: "white",
    textDecoration: "none",
  }
}

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.nav}>
      <a style={styles.a} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
