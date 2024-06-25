import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import motion_logo from '../assets/img/motion_logo.svg';
import nav_icon1 from '../assets/img/nav_icon1.svg';
import nav_icon2 from '../assets/img/nav_icon2.svg';
import nav_icon3 from '../assets/img/nav_icon3.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={motion_logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav> 
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hassan-azad-75240368/"><img src={nav_icon1} alt=""/></a>
              <a href="https://www.facebook.com/hasan.azad.566"><img src={nav_icon2} alt=""/></a>
              <a href="https://www.instagram.com/leatheronwillow/"><img src={nav_icon3} alt=""/></a>
            </div>
            <button className="vvd" onClick={(e) => {e.preventDefault(); window.location.replace("/#connect"); }}>
              <span>Let's Connect</span>  
            </button>    
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;