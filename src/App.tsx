import { NavLink, Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
