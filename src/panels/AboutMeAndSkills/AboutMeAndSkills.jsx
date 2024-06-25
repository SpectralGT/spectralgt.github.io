import AboutMe from "../AboutMe/AboutMe";
import MySkills from "../MySkills/MySkills";
import StickyBanner from "../../components/StickyBanner";
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
