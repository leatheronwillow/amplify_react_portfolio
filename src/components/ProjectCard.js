import { Col } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <Col sm={6} md={4}>
      <div className="project-image-box">
        <img src={props.image} alt="thumbnail"/>
        <div className="project-text">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p><strong>Stack: </strong>{props.stack}</p>
          <p>
            <a href={props.github}>Github</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={props.live}>Live</a>
          </p>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;