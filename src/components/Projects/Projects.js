import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Taste Recovery"
              description="Real State application, Where addicts can take their home according to their prescribed plan by doctor"
              demoLink="https://www.tasterecovery.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Haver ERP"
              description="An ERP Application to manages industries inventory to payments, oders etc."
              demoLink="https://haverstandard.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Covenda AI"
              description="An Online cyber Security threat prediction to aware users about cyber security attacks"
              demoLink="https://www.covenda.ai/welcome"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tutort"
              description="An Online Ed-Tech platform, where students can enroll thereself and study listed course"
              demoLink="https://www.tutort.net/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
