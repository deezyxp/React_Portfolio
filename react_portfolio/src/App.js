import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Socials from "./pages/Socials"
import Contact from "./pages/Contact"
import './App.css'


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
            <Route path='/'/>
     </Switch>
     </Router>
    </>
  );
}

export default App;
