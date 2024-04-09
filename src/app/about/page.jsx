import React from "react";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./projects.css";
import logo from "./projectPic.png";
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];
function ProjectCard({ logos, name, content, link }) {
  return (
    <>
      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="./link.svg" alt="" /> View Project
          </a>
        </div>
      </div>

      <br></br>

            <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="./link.svg" alt="" /> View Project
          </a>
        </div>
      </div>

      <br></br>

      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="./link.svg" alt="" /> View Project
          </a>
        </div>
      </div>

      <br></br>

      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="./link.svg" alt="" /> View Project
          </a>
        </div>
      </div>

      <br></br>

      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="./link.svg" alt="" /> View Project
          </a>
        </div>
      </div>

      <br></br>

      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="./link.svg" alt="" /> View Project
          </a>
        </div>
      </div>
      <br></br>
    </>

  );
}

export function Projects(logo, name, content, link) {
  return (
    <div className="project-card">
      <div>
        <img src={logo} alt={`${name} logo`} className="project-logo" />
        <h2 className="project-name">{name}</h2>
      </div>
      <div>
        <p className="project-content">{content}</p>
        <a href={link} className="project-link">
          <img src="https://icon.now.sh/arrow/ffffff" alt="arrow" className="project-link-icon" />
          View project
        </a>
      </div>

      <div className="projectBody">
        <h1 className="h1">Things I’ve made trying to put my dent in the universe.</h1>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi..
        </p>
        <br></br>
      </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
