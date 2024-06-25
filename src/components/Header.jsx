import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="#landingPage">
        <p>AS</p>
      </a>
      <a href="#projects">
        <p>My Work</p>
      </a>
      <a href="#skills">
        <p>Skills</p>
      </a>
      <a href="https://atharvsingh.vercel.app/" target="_blank" rel="noopener noreferrer" >
        <p>Blog</p>
      </a>
      <a href="#contact">
        <p>Contact Me</p>
      </a>
    </div>
  );
}
