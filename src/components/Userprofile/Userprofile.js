import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  Alert,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import UpdateProfile from "../UpdateProfile";
import Addwinery from "../Addwinery";
import Bookingsuser from "../Bookingsuser";
import Updateuser from "../Updateuser";

export default function Userprofile() {
  const [option, setOption] = useState("none");

  function updateprofile() {
    setOption("profile");
  }
  function userbookings() {
    setOption("none");
  }

  return (
    <Container>
      <Row>
        <Col md={2} sm={12}>
          <Button className="w-100 my-2" onClick={userbookings}>
            My Bookings
          </Button>
          <Button className="w-100 my-2" onClick={updateprofile}>
            Update Profile
          </Button>
          <Button className="w-100 my-2" href="/business">
            Business
          </Button>
        </Col>
        <Col md={10} sm={12} className="wide">
          {option === "none" && <Bookingsuser />}
          {option === "profile" && <UpdateProfile />}
        </Col>
      </Row>
    </Container>
  );
}
