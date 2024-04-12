import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects1 from "./components/Projects1";
import DSAques from "./components/DSAques";
function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/projects" element={<Projects1 />} />
        <Route exact path="/dsaques" element={<DSAques />} />
        <Route exact path="/" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
