import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import './App.css'


function App() {
  return (
    <>
    <Router>
     <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
