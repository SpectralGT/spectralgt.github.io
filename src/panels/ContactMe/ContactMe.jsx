import StickyBanner from "../../components/StickyBanner";
import "./ContactMe.css";
//prettier-ignore
export default function ContactMe() {
  return (
    <>
      {/*
    Email
    LinkedIn
    Indeed
    Github

    PlayStore
    Itch.io
    Blog
    Youtube
     */}
      <StickyBanner text="Contact Me"></StickyBanner>
      <div className="contact" id="contact">
        <div className="links">
          <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
            <p>
              <i className="fa-solid fa-envelope"></i> &nbsp; atharvsingh1396@gmail.com
            </p>
          </a>
          <a href="https://www.linkedin.com/in/atharv-singh-54bb731a2/" target="_blank" rel="noopener noreferrer">
            <p>
              <i className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"></i> &nbsp; LinkedIn
            </p>
          </a>
          <a href="https://github.com/SpectralGT" target="_blank" rel="noopener noreferrer">
            <p>
              <i className="fa-brands fa-github"></i> &nbsp; GitHub
            </p>
          </a>
        </div>
        <div>
          <p className="heading">ATHARV</p>
          <p className="heading">SINGH</p>
        </div>
        <div className="links2">
          <a href="https://apps.atharvsingh.co.in/notice" target="_blank" rel="noopener noreferrer">
            <p>
              PlayStore &nbsp; <i className="fa-brands fa-google-play"></i>
            </p>
          </a>
          <a href="https://spectralgt.itch.io/" target="_blank" rel="noopener noreferrer">
            <p>
              Itch.io &nbsp; <i className="fa-brands fa-itch-io"></i>
            </p>
          </a>
          <a href="https://blog.atharvsingh.co.in" target="_blank" rel="noopener noreferrer">
            <p>
              Blog &nbsp; <i className="fa-solid fa-pen"></i>
            </p>
          </a>
          <a href="https://www.youtube.com/@spectralgt4170" target="_blank" rel="noopener noreferrer">
            <p>
              Youtube &nbsp; <i className="fa-brands fa-youtube"></i>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
