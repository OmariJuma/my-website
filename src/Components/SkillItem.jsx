import { Card, Col, ProgressBar } from "react-bootstrap";
import "./SkillItem.css";
const SkillItem = (props) => {
  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="skill">
        <Card.Img className="skill-image" variant="top" src={props.image} />
        <Card.Body>
          <Card.Text className="skill-title">{props.skill}</Card.Text>
          <Card.Text className="skill-subtitle">
            proficiency
            <br />
            </Card.Text>
            <Card.Text>
            <ProgressBar
              animated
              now={props.proficiency}
              variant="success"
              label={`${props.proficiency}%`}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SkillItem;
