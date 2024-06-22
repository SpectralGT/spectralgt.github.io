import StickyBanner from "../components/StickyBanner";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <StickyBanner text="About Me"></StickyBanner>
      <div className="content"></div>
    </>
  );
}
