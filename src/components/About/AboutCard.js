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

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
