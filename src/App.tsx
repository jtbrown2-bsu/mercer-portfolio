import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.scss"
import { About, Home, Projects } from "./components"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/cjs/Nav"
import logo from "./images/white_logo.png"

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="navbar" sticky="top">
        <Navbar.Brand><Link to="/"><img className="top-logo" src={logo} alt="home" width="32" height="34"/></Link></Navbar.Brand>
        <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link><Link className="link" to="/projects">Projects</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
