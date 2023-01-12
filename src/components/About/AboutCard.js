import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body style ={{display:"flex",justifyContent:"center"}}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Myself, <span className="purple">Ravi Teja </span>
            belongs to southern part of India, <span className="purple"> Hyderabad, Telagana. </span>
            Currently working as a <span className="purple">Module Lead </span> at LTIMindtree. Possess 6+ years
            of experience in developing web applications by following agile methodologies.
          </p>
          <p style={{ textAlign: "justify" }}>
            Developed applications from scratch such as building API's for the Mobile & UI components.
          </p>

          <ul>
            <li style={{ textAlign: "justify" }}> A python developer with 6+ years of IT Experience in requirement gathering,development and troubleshooting the web applications using Python frameworks such as <span className="purple">Django(MVC) ,Flask & Django Rest Framework (DRF).</span>
Experience in starting the applications from scratch both frontend and backend.</li>

<li style={{ textAlign: "justify" }}>Worked on the python modules such as requests, <span class="purple">multithreading, multiprocessing & Pandas.</span></li>
<li style={{ textAlign: "justify" }}>Experience in front-end and back-end development technologies and deployment of web based applications using <span class="purple">AWS (EC2 & S3).</span></li>
<li style={{ textAlign: "justify" }}>Hands-on experience on React,Redis & Celery.</li>
<li style={{ textAlign: "justify" }}>Troubleshoot and debugged production level code.</li>
<li style={{ textAlign: "justify" }}>Followed <span class="purple">AGILE & SCRUM </span>process.</li>

          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
