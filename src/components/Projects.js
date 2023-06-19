import { Container, Row, Col, Tab, Nav, NavItem } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import nusa from "../assets/img/nusa.png";
import trigal from "../assets/img/trigal.png";
import ipar from "../assets/img/ipar.png";
import harry from "../assets/img/harry.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavLink } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "Social Media Agency",
      description: "Design & Development",
      imgUrl: nusa,
      url: "https://www.nusasocialmedia.com.ar/"
    },
    {
      title: "Production Studio",
      description: "Design & Development",
      imgUrl: trigal,
    },
    {
      title: "Plastic Industry",
      description: "Design & Development",
      imgUrl: ipar,
    },
    {
      title: "Podcast",
      description: "Design & Development",
      imgUrl: harry,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Description</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Trigal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Harry mucho mucho amor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Ipar</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                
                                title={projects.title}
                                description={projects.description}
                                imgUrl={projects.imgUrl}
                                url={projects.url}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Aca pongo la descripcion de mis trabajos</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}