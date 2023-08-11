import { Container } from "react-bootstrap";
import "./App.css";
import Navigation from "./Components/Navigation";
import CoverImage from "./Components/CoverImage";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navigation />

      <Container fluid={true}>
        <CoverImage />
      </Container>
      <Container>
        <Skills />
      </Container>
      <Container>
        <Projects />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
