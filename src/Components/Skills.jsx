import {Row} from "react-bootstrap";
import ReactImage from "../assets/react.png"
import NodeImage from "../assets/node.png"
import HtmlImage from "../assets/html.png"
import Mongo from "../assets/mongo.png"
import CssImage from "../assets/css.png"
import NativeImage from "../assets/native.png"
import SkillItem from "./SkillItem";
import "./Skills.css"
const Skills = () => {
  const skills = [
    { skill: "ReactJs", proficiency: 80, image: ReactImage },
    { skill: "ReactNative", proficiency: 80, image: NativeImage },
    { skill: "NodeJs", proficiency: 60, image: NodeImage },
    { skill: "MongoDb", proficiency: 90, image: Mongo },
    { skill: "HTML5", proficiency: 90, image: HtmlImage },
    { skill: "CSS3", proficiency: 90, image: CssImage },
];
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title" >Skills</h2>
      <Row>
      {skills.map(skill=>(<SkillItem skill={skill.skill} proficiency={skill.proficiency} image={skill.image}/>))}
      </Row>
    </div>
  );
};
export default Skills;
