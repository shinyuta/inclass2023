const styles = {
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
    background: "pink",
    borderRadius: "20px",
    margin: "20px",
    listStyle: "none",
    color: "white"
  },
  top: {
    marginTop: "30px",
  }
}

function List(props) {
  return (
    <ul className="list-group" style={styles.top}>
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((item) => {
        if (item.purchased == false) {
          return (
            // TODO: Your code here
            <li key={item.id} style={styles.text}> 
              {item.name}
            </li>

          );
        }
      })}
    </ul>
  );
}

export default List;
