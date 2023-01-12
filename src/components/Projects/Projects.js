import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project_img from "../../Assets/Projects/project_img2.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              isDemoOnly={true}
              title="Azure Phynet"
              description="SONiC is an open source network operating system based on Linux that runs on switches from
              multiple vendors such as Cisco,Juniper etc.Primary responsibility is to develop and test the various api's/functionalities of operating
              system using python and Pytest."
              demoLink="https://github.com/sonic-net/SONiC"
              tags = "Python,Sonic & Pytest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              isDemoOnly={true}
              title="Tekkr Organics"
              description="Tekkr Organics is a fresh organic fruits and vegetable ecommerce delivery app. Developed backend apis for the
              Login,Booking order,Add to cart functionalities and payment gateway functionalities."
              demoLink="http://www.farm29.com/"
              tags="Python,Django,Django Rest Framework(DRF) & REST "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              isDemoOnly={true}
              title="Ration Yojana"
              description="The main intent of the application is to distribute ration to users. Developed backend API’s for user dashboard
              and delivery executives for mobile application."
              demoLink="http://www.sendfast.in/"
              tags = "Python,Django,REST & Html/CSS/Javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              isDemoOnly={true}
              title="Sendfast Application"
              description="Developed dashboard system for operation executives to track
              the onfield delivery order details and generate reports according to store/rider."
              demoLink="http://www.sendfast.in/"
              tags = "Python,Django,Html/CSS/Javascript & JQuery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              isDemoOnly={true}
              title="UNI(CMS)"
              description="Developed operations dashboard and cash executive API’s for the Cash Management System(CMS) to manage and
              monitor the cash between supervisor and banks."
              demoLink="http://www.sendfast.in/"
              tags = "Python,Django,Html/CSS/Javascript & JQuery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              isDemoOnly={true}
              title="Lucy (Research Assistant)"
              description="is an AI based search engine which scrapes/collects data from different sources and provides the results."
              demoLink="https://invana.io/"
              tags = "Python,Django,Django Rest Framework(DRF),BeautifulSoup,Html/CSS/Javascript & JQuery"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
