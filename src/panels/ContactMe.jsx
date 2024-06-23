import StickyBanner from "../components/StickyBanner";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <>
      <StickyBanner text="Contact Me"></StickyBanner>
      <p className="heading">ATHARV SINGH</p>
      <div className="contact">
        <p>atharvsingh1396@gmail.com</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>PlayStore</p>
        <p>Itch.io</p>
      </div>
    </>
  );
}
