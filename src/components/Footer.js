import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo" >Manisha</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/1227manishajoshi/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/12manisha" ><img src={navIcon2} alt="Icon" /></a>
             
            </div>
            <p>Copyright 2023. Manisha Joshi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
