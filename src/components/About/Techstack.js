import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPostgresql,
  DiPython,
  DiDjango,
  DiGit,
} from "react-icons/di";
import {
  SiFastapi
} from "react-icons/si";
import {FaAws} from 'react-icons/fa'
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
    </Row>
  );
}

export default Techstack;
