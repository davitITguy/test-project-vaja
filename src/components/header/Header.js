import React from "react";
import { Container, Row, Dropdown, Button, Col } from "react-bootstrap";
import Logo from "../../assets/fashion-logo.webp";
import { BsFacebook, BsSearch } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xl="4" xxl="4" className="questions">
            <p>FREE SHIPPING ON ALL ORDER</p>
          </Col>
          <Col xl="4" xxl="4" className="questions">
            <p>100% MONEY BACK GUARANTEE</p>
          </Col>
          <Col xl="4" xxl="4" className="questions">
            <p>ONLINE SUPPORT 24/6</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xxl="12" className="row-marginer middle-nav">
            <div className="logo">
              <img src={Logo} alt="fashion store" height="90px" width="230" />
            </div>
            <div className="search">
              <div className="category-filter">
                <input type="text" placeholder="Search" />
                <Dropdown>
                  <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button variant="danger">
                <BsSearch size="25" />
              </Button>
            </div>
            <div className="media">
              <ul>
                <li>
                  <BsFacebook size="25" />
                </li>
                <li>
                  <AiFillTwitterCircle size="25" />
                </li>
                <li>
                  <AiFillInstagram size="25" />
                </li>
                <li>
                  <AiFillYoutube size="25" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="fluid-nav">
        <Row>
          <nav>
            <ul>
              <li>HOME</li>
              <li>SHOP</li>
              <li>FEATURES</li>
              <li>MEGA GROUP</li>
              <li>ABOUT</li>
              <li>BLOG</li>
              <li>CONTACT</li>
              <button>Shopping Cart (0)</button>
            </ul>
          </nav>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
