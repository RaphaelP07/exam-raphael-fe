import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import UserView from "./components/UserView";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/user" element={ <UserView /> } />
        </Routes>
      </GlobalProvider>
    </Router>
    
  );
}

export default App;
