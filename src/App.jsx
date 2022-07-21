import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
        </Routes>
      </GlobalProvider>
    </Router>
    
  );
}

export default App;
