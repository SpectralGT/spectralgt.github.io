import { useState } from "react";
import StickyBanner from "../../components/StickyBanner";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio",
    tag1: "HTML1",
    tag2: "CSS1",
    tag3: "JS1",
    image: "/img1.jpg",
    description: "description1",
  },
  {
    title: "title 2",
    tag1: "HTML2",
    tag2: "CSS2",
    tag3: "JS2",
    image: "/img2.jpg",
    description: "description1",
  },
  {
    title: "title 3",
    tag1: "HTML3",
    tag2: "CSS3",
    tag3: "JS3",
    image: "/img3.jpg",
    description: "description1",
  },
];
export default function Projects() {
  const [index, changeState] = useState(0);

  function changeIndex(change) {
    if (change == 1) {
      if (index == projects.length - 1) changeState(0);
      else changeState(index + 1);
    }

    if (change == -1) {
      if (index == 0) changeState(projects.length - 1);
      else changeState(index - 1);
    }
    console.log(index);
  }

  return (
    <>
      <StickyBanner text="PROJECTS"></StickyBanner>
      <div className="projects" id="projects">
        <button id="inc_btn" onClick={() => changeIndex(1)}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <button id="dsc_btn" onClick={() => changeIndex(-1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <p id="title">{projects[index].title}</p>

        <div id="description">
          <p>{projects[index].tag1}</p>
          <p>{projects[index].tag2}</p>
          <p>{projects[index].tag3}</p>
        </div>
        <div id="image">
          <img src={projects[index].image}></img>
        </div>
      </div>
    </>
  );
}
