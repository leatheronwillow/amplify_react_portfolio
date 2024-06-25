import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my skills and experiences</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <h5>Web App Development</h5>
                  <p>
                    Multiple full stack personal and freelance projects including apps for stock-trading
                    , short-term rentals, invoicing and inventory management and talent-scouting.
                  </p>
                </div>
                <div className="item">
                  <h5>Data Engineering</h5>
                  <p>
                    Industrial experience with data wrangling, cleaning, and analysis using Python, Pandas, and SQL.
                    Performed ETL (Extract, Transform, Load) operations on data from external APIs to the company's database
                    via an ineternal API.
                  </p>                
                </div>
                <div className="item">
                  <h5>Process Systems Engineering</h5>
                  <p>
                    Experience with multi physics software like COMSOL for reactor design,
                    and UNISIM for process simulation and optimization.
                    Designed and optimized processes for large-scale cell culture using MATLAB.
                  </p>
                </div>
                <div className="item">
                  <h5>DevOps</h5>
                  <p>
                    Experience with CI/CD pipelines on industrial project.
                    Deployed a full stack web app on a cloud server using Docker.
                    Experience with Git for version control in a team environment.
                    Experience with AWS Lambdas and products like S3 and Amplify. 
                  </p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )


}

export default Skills;