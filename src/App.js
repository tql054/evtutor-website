import React from "react";
import AgoraMeet from "./pages/AgoraMeet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.scss"
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">
        <Router>
            <AllRoutes/>
        </Router>
    </div>
  );
}

export default App;
