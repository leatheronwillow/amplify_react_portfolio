import { Col, Container, Row } from "react-bootstrap";
import motion_logo from "../assets/img/motion_logo.svg";
import nav_icon1 from '../assets/img/nav_icon1.svg';
import nav_icon2 from '../assets/img/nav_icon2.svg';
import nav_icon3 from '../assets/img/nav_icon3.svg';



function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={5}>
            <img src={motion_logo} alt="logo" />
          </Col>
          <Col sm={6} className="">
            <p>Thank you for visiting</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={nav_icon1} alt=""/></a>
              <a href="#"><img src={nav_icon2} alt=""/></a>
              <a href="#"><img src={nav_icon3} alt=""/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;