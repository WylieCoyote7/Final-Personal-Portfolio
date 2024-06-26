import React from "react";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./projects.css";
import logo from "./projectPic.png";
const links = [
  {
    title: "Home",
    url: "/Final-Personal-Portfolio/",
  },
  {
    title: "About",
    url: "/Final-Personal-Portfolio/about",
  },
  {
    title: "Projects",
    url: "/Final-Personal-Portfolio/projects",
  },
  {
    title: "Uses",
    url: "/Final-Personal-Portfolio/uses",
  },
];
function ProjectCard({ logos, name, content, link }) {
  return (
    <div className="relative">
      <div className="flex">
        <div>
          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>

          <div style={{ marginBottom: "0.5cm" }}> </div>

          {/* <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div> */}
        </div>

        <br></br>
        <div style={{ marginLeft: "0.5cm" }}>
          {/* <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div> */}

          <div style={{ marginBottom: "0.5cm" }}> </div>

          {/* <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div> */}
        </div>

        <br></br>
        {/*third column */}
        <div style={{ marginLeft: "0.5cm", marginBottom: "2cm" }}>
          {/* <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div> */}

          <div style={{ marginBottom: "0.5cm" }}> </div>

          {/* <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div> */}
        </div>

        <br></br>

        <br></br>
      </div>
    </div>
  );
}

export default function Projects() {
  //Return HTML elements for Project page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="projectBody">
        <h1 className="h1">What have I been working on?</h1>
        <br></br>
        <p>
          I am always working to build my skills and learn new things. Here are some of the projects I have been working on!
        </p>
        <br></br>
      </div>

      <ProjectCard
        name="Home pfSense Firewall"
        logos={"https://wpcomputersolutions.com/wp-content/uploads/2018/07/pfsense-logo-e1534531558807.png"}
        content={"A tutorial I am following to install a customizable home firewall"}
        link={"https://marcus-e.se/2016/07/19/diy-pfsense-firewall-router-part-1-introduction/"}
      />

      <ProjectCard
        name="Drumming - Private School Boys"
        logos={"https://yt3.googleusercontent.com/ytc/AIdro_mZQL8paFnJn1C1lVaUog6kL6UxzRx5-bNuaxnKfU9b8Q=s176-c-k-c0x00ffffff-no-rj"}
        content={"Listen to some of the drumming parts I have written with my band, Private School Boys"}
        link={"https://www.youtube.com/@privateschoolboys6919"}
      />

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}

