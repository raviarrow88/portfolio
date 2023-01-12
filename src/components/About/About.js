import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about_avatar.png";
import Toolstack from "./Toolstack";
import OsStack  from "./OperatingSys";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <img src={laptopImg} alt="about" className="img-fluid" style={{ position:"relative",zindex:"2" }} />

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Professional</strong>  Summary 
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
        Techincal <strong className="purple">Stack</strong> 
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Development</strong> Tools
        </h1>
        <Toolstack />

        <h1 className="project-heading" >
          Operating<strong className="purple"> Systems</strong>  
        </h1>
        <OsStack/>
      </Container>
    </Container>
  );
}

export default About;
