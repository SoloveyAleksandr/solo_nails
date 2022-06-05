import { NavLink, Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
