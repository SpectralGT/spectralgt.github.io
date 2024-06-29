import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div id="landingPage">
      <video autoPlay loop muted playsInline id="video" src="/bg.mp4" />
      <p>Hi, I'M</p>
      <p>ATHARV </p>
      <p>SINGH</p>

      <p className="description">
        I am a{" "}
        <strong>
          <em>Web</em>
        </strong>{" "}
        and{" "}
        <strong>
          <em>Game Developer</em>
        </strong>{" "}
        with expertise in dynamic websites and immersive games. Let's create something amazing!
      </p>
    </div>
  );
}
