import React from "react";
import { Container, Row, Dropdown, Button, Col } from "react-bootstrap";
import Clothes from "../assets/clothes.png";
import Footwear from "../assets/footwear.png";
import HandBags from "../assets/handbags.png";
const FilterSection = () => {
  return (
    <div>
      <Container className="filter-container">
        <Row>
          <Col xxl="12" className="filter">
            <ul>
              <li>Go quickly to</li>
              <li>
                Women <span>:</span>
              </li>
              <li>Men :</li>
              <li>Accessories :</li>
              <li>Fashion :</li>
              <li>Features :</li>
              <li>Clothings :</li>
              <li>Bags and Wallers :</li>
              <li>Fragrances :</li>
              <li>Caps Hats </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xxl="12" className="filter-wrapper">
            <Col xxl="4" className="filtered-box">
              <img src={Clothes} alt="Clothes" />
              <Button variant="danger" className="ontop-btn">
                Click Here
              </Button>
            </Col>
            <Col xxl="4" className="filtered-box">
              <img src={Footwear} alt="Footwear" />
              <Button variant="danger" className="ontop-btn">
                Click Here
              </Button>
            </Col>
            <Col xxl="4" className="filtered-box">
              <img src={HandBags} alt="Hand bags" />
              <Button variant="danger" className="ontop-btn">
                Click Here
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FilterSection;
