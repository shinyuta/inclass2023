// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    background: "red",
    height: "200px",
  },
  h1:{
    margin: 0,
    paddingTop: "75px",
    textAlign: "center",
    color: "white",
    fontSize: "100px",
  }
}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
