import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tarrakkiLogo from "../../Assets/Projects/TarrakkiAPIs.png";
import sbnri from "../../Assets/Projects/SBNRI.png";
import elevo from "../../Assets/Projects/Elevo.png";
import tarrakki from "../../Assets/Projects/Tarrakki.png";
import onedrop from "../../Assets/Projects/onedrop.png";
import inrelay from "../../Assets/Projects/inrelay.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tarrakkiLogo}
              isDemoOnly={true}
              title="SaaS APIs"
              description="Developed mutual funds investment APIs to offer plug in solutions to other fin-tech companies so that they can build their back end services using it."
              demoLink="https://docs.tarrakki.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sbnri}
              isDemoOnly={true}
              title="White Lable Solutions"
              description="Provided a white labled solutions for other fin-techs in the market to ready to go live within minutes on their plateforms and offer mutual funds or other wealth products to their users."
              demoLink="https://sbnri.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elevo}
              isDemoOnly={true}
              title="Elevo"
              description="Created a brand new product for the Tarrakki to on-board almost all the kind of investors individuals, minors, companies, NRIs to offer different wealth products."
              demoLink="https://elevo.money/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tarrakki}
              isDemoOnly={true}
              title="Tarrakki"
              description="Worked on backend side of the tarrakki app that offers direct invements to users and improved app performance up to 30%"
              demoLink="https://tarrakki.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inrelay}
              isDemoOnly={true}
              title="Inrelay"
              description="Led project from requiement understading to client delivery. Designed and created APIs and worked with various social media APIs directly for integration i.e twitter, facebook, linkedin"
              demoLink="https://inrelay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onedrop}
              isDemoOnly={true}
              title="OneDrop Media"
              description="Developed backend support i.e APIs for south africa based music band for its music application devloped in IOS. Designed database structure and handled its complexity."
              demoLink="https://onedropmedia.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
