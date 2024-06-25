import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import portfolio from '../assets/img/portfolio.png';

function Projects() {
  const projectsTab1 = [
    {
      title: "Portfolio",
      description: "A single page platform to showcase my projects.",
      stack: "React, Javascript, HTML, CSS (with Bootstrap), Github",
      github: "https://github.com/leatheronwillow/amplify_react_portfolio",
      live: "",
      image: portfolio
    },
    {
      title: "Blueberries BnB",
      description: "A short-term vacation rentals platform created in a team of 4.",
      stack: "Flask, Jinja, PostgreSQL, Javascript, HTML, CSS (with Bootstrap), Github",
      github: "",
      live: "",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Contrast",
      description: "An accounting and inventory management app for a printing company.",
      stack: "Flask, Jinja, SQLite3, Javascript, HTML, CSS (with Bootstrap), Github",
      github: "",
      live: "",
      image: "https://via.placeholder.com/150"
    },
  ];

  const projectsTab2 = [
    {
      title: "South Asian Cricket Academy",
      description: "A talent scouting app with an e-commerce section for cricket equipment.",
      stack: "Django, Vue3, SQLite3, Javascript, CSS (with Bulma), Github",
      github: "",
      live: "",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Athlete Marketplace",
      description: "A talent-scouting app to showcase cricketers from non-traditional routes",
      stack: "Django, React, SQLite3, CSS (with Bulma), Github",
      github: "",
      live: "",
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p> Here are some of my projects </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projectsTab1.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            github={project.github}
                            live={project.live}
                            image={project.image}
                          /> 
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {
                      projectsTab2.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            github={project.github}
                            live={project.live}
                            image={project.image}
                          /> 
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    Lorem Ipsum
                </Tab.Pane>
                
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Projects;
