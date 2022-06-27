import React from "react";
import { Container, Row, Dropdown, Button } from "react-bootstrap";
import Logo from "../../assets/fashion-logo.webp";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="questions">
            <p>FREE SHIPPING ON ALL ORDER</p>
            <p>100% MONEY BACK GUARANTEE</p>
            <p>ONLINE SUPPORT 24/6</p>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="middle-nav">
            <div className="logo">
              <img src={Logo} alt="fashion store" height="120px" width="230" />
            </div>
            <div className="search">
              <div className="category-filter">
                <input type="text" placeholder="Search" />
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button>Click</Button>
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
          </div>
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
