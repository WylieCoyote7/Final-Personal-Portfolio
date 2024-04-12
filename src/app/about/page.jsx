import React from "react";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./about.css";
import SocialWidget from "@/components/Widget/SocialWidget";
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

const socialLinks = [
  {
    text: "Follow me on Facebook",
    url: "https://www.facebook.com/alexander.wylie.92",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png",
  },
  {
    text: "Follow me on LinkedIn",
    url: "https://www.linkedin.com/in/alexander-wylie-8867a9157/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    text: "Follow me on GitHub",
    url: "https://github.com/WylieCoyote7",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    text: "Email me",
    url: "mailto:alexw2@ensign.edu",
    logo: "https://img.icons8.com/?size=64&id=6mtfF8X7F8eV&format=png",
  },
];

export default function About() {
  //Return HTML elements for About page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="aboutBody">
        <div className="aboutDescription">
          <h1 className="h1">Hello, my name is Alex Wylie!</h1>
          <br></br>
          <br></br>
          <p>
            Thank you for visiting my portfolio page. I am a cybersecurity analyst and software enthusiast. I love to
            learn about code and how to build software and scripts that make life easier.
          </p>
          <br></br>
          <p>
            I have been an information security analyst for almost 4 years now, and I really enjoy it!
            I am currently finishing my Bachelors degree in Cybersecurity at Ensign College. I also love to drum, hike, and bike.
          </p>
          <br></br>
          <p>
            {" "}
            While I am not primarily a software developer, I have a passion for learning and using code to solve problems.
            For example, at work, I built a basic browser extension that provides shortcuts to tools and lookups
            that I commonly use. I also have written some python to scrape information on the web and
            have written some scripts in Microsoft Excel to organize scraped data.
          </p>
          <br></br>
          <p>
            If you ever have questions about cybersecurity, microautomation, or music, please reach out! I am
            always willing to help and learn from others.
          </p>
          <br></br>
          <br></br>
        </div>

        <div className="aboutColumn">
          <div className="imageStyle">
            <img src="large_profile.png" />
          </div>

          <SocialWidget links={socialLinks} />
        </div>
      </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
      </div>
  );
}
