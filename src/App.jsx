import "./App.css";
import Banner from "./components/Banner.jsx";
import Header from "./components/Header.jsx";
import LandingPage from "./panels/LandingPage/LandingPage.jsx";
import AboutMeAndSkills from "./panels/AboutMeAndSkills/AboutMeAndSkills.jsx";
import Projects from "./panels/Projects/Projects.jsx";
import ContactMe from "./panels/ContactMe/ContactMe.jsx";

function App() {
  return (
    <>
      <Banner text="#Opent to Work"></Banner>
      <Header></Header>
      <LandingPage id="home"></LandingPage>
      <AboutMeAndSkills id="aboveMe"></AboutMeAndSkills>
      <Projects id="projects"></Projects>
      <ContactMe></ContactMe>
    </>
  );
}

export default App;
