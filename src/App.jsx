import "./App.css";
import Course from "./components/courses/Course.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/Hero/Hero.jsx";
import Opportunity from "./components/Opportunity/Opportunity.jsx";
import Intership from "./components/Intership/Intership.jsx";
import Enroll from "./components/Enroll/Enroll.jsx"

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Course></Course>
      <Opportunity></Opportunity>
      <Intership></Intership>
      <Enroll></Enroll>
    </>
  );
}

export default App;
