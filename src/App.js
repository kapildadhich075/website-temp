import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Index';
import { BrowserRouter as Router} from "react-router-dom";
import Sidebar from './components/Sidebar/Index';

function App() {
  return (
    <Router>
      <Sidebar />
      <NavBar />
    </Router>
  );
}

export default App;
