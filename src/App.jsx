import { Container } from "react-bootstrap";
import "./App.css";
import Navigation from "./Components/Navigation";
import CoverImage from "./Components/CoverImage";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navigation />

      <Container>
        <CoverImage />
        <Skills/>
      </Container>
    </>
  );
}

export default App;
