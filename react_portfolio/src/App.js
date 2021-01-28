import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects"
import Socials from "./pages/Socials/Socials"
import Contact from "./pages/Contact/Contact"
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
