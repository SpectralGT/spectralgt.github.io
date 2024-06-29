import { useState } from "react";
import StickyBanner from "../../components/StickyBanner";
import "./Projects.css";

import * as data from "./projects.json";
const { projects } = data;

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

        <div id="image">
          <img src={projects[index].image}></img>
        </div>
        <div id="description">
          <p className="tag">{projects[index].tag1}</p>
          <p className="tag">{projects[index].tag2}</p>
          <p className="tag">{projects[index].tag3}</p>
          <p className="desc_text">{projects[index].description}</p>
        </div>
      </div>
    </>
  );
}
