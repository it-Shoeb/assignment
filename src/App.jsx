import "./App.css";
import Course from "./components/courses/Course.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/Hero/Hero.jsx";
import Opportunity from "./components/Opportunity/Opportunity.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Course></Course>
      <Opportunity></Opportunity>
    </>
  );
}

export default App;
