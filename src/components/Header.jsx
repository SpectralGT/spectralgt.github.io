import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="#landingPage">
        <p>AS</p>
      </a>
      <a href="https://apps.atharvsingh.co.in" target="_blank" rel="noopener noreferrer">
        <p>Apps</p>
      </a>
      <a href="https://spectralgt.itch.io/" target="_blank" rel="noopener noreferrer">
        <p>Itch.io</p>
      </a>
      <a href="https://blog.atharvsingh.co.in" target="_blank" rel="noopener noreferrer">
        <p>Blog</p>
      </a>
      <a href="https://drive.google.com/file/d/1QP-ROoDSfAa4sy61mlBS6y2Y0fjYCOFv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <p>Resume</p>
      </a>
      <a href="#contact">
        <p>Contact Me</p>
      </a>
    </div>
  );
}
