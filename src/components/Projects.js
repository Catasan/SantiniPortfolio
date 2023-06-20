import { Container, Row, Col, Tab, Nav, NavItem } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import nusa from "../assets/img/nusa.png";
import nusalogo from "../assets/img/nusalogo.png";
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
      agency: "Nusa Social Media",
      url: "https://www.nusasocialmedia.com.ar/",
    },
    {
      title: "Production Studio",
      description: "Design & Development",
      imgUrl: trigal,
      agency: "Trigal",
      url: "https://trigal.tv/",
    },
    {
      title: "Plastic Industry",
      description: "Design & Development",
      imgUrl: ipar,
      agency: "Ipar",
      url: "https://iparplasticos.com.ar/",
    },
    {
      title: "Podcast",
      description: "Design & Development",
      imgUrl: harry,
      agency: "Harry mucho, mucho amor",
      url: "https://harrymuchomuchoamor.com.ar/",
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
                <p> The world of web development is constantly evolving, and I'm always eager to learn and incorporate new technologies into my projects. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">About me</Nav.Link>
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
                                agency={projects.agency}
                                url={projects.url}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <p>As a full stack developer, I focus on creating intuitive and interactive user interfaces that keep visitors engaged. By leveraging the power of front-end technologies like HTML, CSS, and JavaScript, combined with my back-end expertise, I deliver seamless and enjoyable browsing experiences.</p>
                        <p>From concept to implementation, I love transforming ideas into fully functional websites. Whether it's building an e-commerce platform, a portfolio site, or a dynamic web application, I bring creativity, attention to detail, and a user-centric approach to every project.</p>
                      </div>
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