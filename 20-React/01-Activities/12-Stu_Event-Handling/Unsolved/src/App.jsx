// First we import Greeting from the components folder
import Greeting from "./components/Greeting";

// Our App component returns the Greeting component
function App() {

  const welcomeClass = (studentName) => {
    alert(`Welcome, ${studentName}!`)
  };

  return <Greeting clickHandler = {welcomeClass} />;
}

export default App;
