import "./App.css";
import Banner from "./components/Banner.jsx";
import Header from "./components/Header.jsx";
import LandingPage from "./panels/LandingPage.jsx";
import AboutMeAndSkills from "./panels/AboutMeAndSkills.jsx";
import Projects from "./panels/Projects.jsx";
import ContactMe from "./panels/ContactMe.jsx";

function App() {
  return (
    <>
      <Banner text="#Opent to Work"></Banner>
      <Header></Header>
      <LandingPage></LandingPage>
      <AboutMeAndSkills></AboutMeAndSkills>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </>
  );
}

export default App;
