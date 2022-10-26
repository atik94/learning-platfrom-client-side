import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftSide from "../Pages/Shared/LeftSide/LeftSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
          <Col lg="1">
            <h2>sign in google</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
