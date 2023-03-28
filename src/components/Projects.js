import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
// import projImg4 from "../assets/img/proj4.png";
// import projImg5 from "../assets/img/proj5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';


export const Projects = () => {

  const games = [

    {
      title: "Stone Paper Scissor Game",
      description: "A Game Made with Python",
      imgUrl: projImg1,
      projLink:"https://github.com/pritish384/Rock-paper-scissors-game",

    },

  
  
  ];


  const utility = [
    {
      title: "GUI QR Code Generator",
      description: "An Amazing QR Code Generator",
      imgUrl: projImg2,
      projLink:"https://github.com/pritish384/QR-code-generator-gui",
    },

  
  
  ];

  const bot = [
    {
      title: "Discord Bot",
      description: "Coming Soon...",
      imgUrl: projImg3,
     
    },

  
  
  ];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am always ready for some hands-on experience and building projects is a great way of gaining experience, I build some awesome website projects </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Utility</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Bot</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          games.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            utility.map((project2, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project2}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            bot.map((project2, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project2}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="photo"></img> */}
      <input className="background-image-right" type="image" img src = {colorSharp2} alt="photo" />
    </section>
  )
}
