import React, {Component} from 'react';
import profile from './pics/profile.jpeg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Education from './Components/Education';

class App extends Component {
   render() {
    return (
      <div className="App"> 
        <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Online CV</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">Work Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
            </Nav>
        </Navbar>
        <header id="home" className="App-header">
          <img src={profile} className="App-logo" alt="logo" />
          <Header />
          <About />
          <Experience />
          <Skills />
          <Education />
          
          
        </header>
      </div>
    );
  }
}

export default App;
