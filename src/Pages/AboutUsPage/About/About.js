import { Grid, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="about margin">
        <div className="about1">
          <h2 className="text-light">About Us</h2>
        </div>
      </div>
      <div className="container">
        <Row lg={2} sm={12} className="mt-5">
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                style={{ width: "50%" }}
                className="img-fluid"
                src="https://i.ibb.co/k5RnwdH/Person-Image.png"
                alt=""
              />
            </div>
          </Col>
          <Col className="mt-5" sm={12}>
            <span style={{ marginBottom: "5%" }}>CEO of Travel Hero</span>
            <h3 style={{ marginBottom: "5%" }}> Silvia Marron</h3>
            <p style={{ marginBottom: "20%" }}>
              Every travel tale has something special, this is why we invite you
              all to share yours with us. We’d be more than happy to hear your
              travelling experiences of India and what in the country triggers
              your wanderlust or touched your heart the most while exploring.
              Let us together create a section where inspiration to travel
              overflows and cordial bonds are created to be cherished forever.
              This is your space to speak your mind about travel in India – make
              the most of it.
            </p>
          </Col>
        </Row>
        <Row lg={2} className="mt-5">
          <Col sm={12}>
            <span>Manager Head of Travel Hero</span>
            <h3>Victoria Paul</h3>
            <p>
              Every travel tale has something special, this is why we invite you
              all to share yours with us. We’d be more than happy to hear your
              travelling experiences of India and what in the country triggers
              your wanderlust or touched your heart the most while exploring.
              Let us together create a section where inspiration to travel
              overflows and cordial bonds are created to be cherished forever.
              This is your space to speak your mind about travel in India – make
              the most of it.
            </p>
          </Col>
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/zRvr1kC/Studio-portrait-of-successful-young-Caucasian-businesswoman-wearing-costume-and-glasses-standing-wit.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row lg={2} className="mt-5">
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/7yRy3Lx/Picture-of-cheerful-curly-business-girl-wearing-glasses-over-white-background.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12}>
            <span>Cheif Manager of Travel Hero</span>
            <h3>Hillary Jabousha</h3>
            <p>
              Every travel tale has something special, this is why we invite you
              all to share yours with us. We’d be more than happy to hear your
              travelling experiences of India and what in the country triggers
              your wanderlust or touched your heart the most while exploring.
              Let us together create a section where inspiration to travel
              overflows and cordial bonds are created to be cherished forever.
              This is your space to speak your mind about travel in India – make
              the most of it.
            </p>
          </Col>
        </Row>
        <Row lg={2} className="mt-5 mb-5">
          <Col sm={12}>
            <span>Consultant</span>
            <h3>Catherine Morgan</h3>
            <p>
              Every travel tale has something special, this is why we invite you
              all to share yours with us. We’d be more than happy to hear your
              travelling experiences of India and what in the country triggers
              your wanderlust or touched your heart the most while exploring.
              Let us together create a section where inspiration to travel
              overflows and cordial bonds are created to be cherished forever.
              This is your space to speak your mind about travel in India – make
              the most of it.
            </p>
          </Col>
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/j6StwRz/Pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction-at-camera-b.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
