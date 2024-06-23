import StickyBanner from "../components/StickyBanner";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <>
      <StickyBanner text="Contact Me"></StickyBanner>
      <div className="contact">
        <div className="links">
          <p>
            <i className="fa-solid fa-envelope"></i> atharvsingh1396@gmail.com
          </p>
          <p>
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </p>
          <p>
            <i className="fa-brands fa-github"></i> GitHub
          </p>
          <p>
            <i className="fa-brands fa-google-play"></i> PlayStore
          </p>
          <p>
            <i className="fa-brands fa-itch-io"></i> Itch.io
          </p>
        </div>
        <div>
          <p className="heading">ATHARV</p>
          <p className="heading">SINGH</p>
        </div>
        <div className="links2">
          <p>
            atharvsingh1396@gmail.com <i className="fa-solid fa-envelope"></i>
          </p>
          <p>
            LinkedIn <i className="fa-brands fa-linkedin"></i>
          </p>
          <p>
            GitHub <i className="fa-brands fa-github"></i>
          </p>
          <p>
            PlayStore <i className="fa-brands fa-google-play"></i>
          </p>
          <p>
            Itch.io <i className="fa-brands fa-itch-io"></i>
          </p>
        </div>
      </div>
    </>
  );
}
