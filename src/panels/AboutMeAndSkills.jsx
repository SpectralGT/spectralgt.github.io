import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import StickyBanner from "../components/StickyBanner";
import "./AboutMeAndSkills.css";

export default function AboutMeAndSkills() {
  return (
    <>
      <StickyBanner text="About Me • Skills"></StickyBanner>
      <div className="aboutMeAndSkills" id="skills">
        <AboutMe></AboutMe>
        <MySkills></MySkills>
      </div>
    </>
  );
}
