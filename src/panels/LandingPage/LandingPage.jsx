import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div id="landingPage">
      <video autoPlay loop muted playsInline id="video" src="/bg.mp4" />
      <p>
        <span className="title">Hi, I'M</span>
      </p>
      <p>
        <span className="title">ATHARV </span>
      </p>
      <p>
        <span className="title">SINGH</span>
      </p>

      <p className="description">
        I am a{" "}
        <strong>
          <em>Web Developer</em>
        </strong>{" "}
        and{" "}
        <strong>
          <em>Game Developer</em>
        </strong>{" "}
        currently studying in class 12 !
      </p>
    </div>
  );
}
