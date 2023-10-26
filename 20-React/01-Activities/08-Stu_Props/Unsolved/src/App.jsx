import Display from "./components/Display";

const name = "eve";
const description = "nice kitty.";
const id = "001";

function App() {
  return <Display name={name} description={description} id={id}/>;
}

export default App;
