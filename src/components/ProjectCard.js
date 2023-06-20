import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, agency }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        
        <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        </div>
      </div>
      <div className="divagency">
        {/* <h2>{agency}
        </h2> */}
        <a className="divagency" href={url}>{agency}</a>
      </div>
    </Col>
  )
}