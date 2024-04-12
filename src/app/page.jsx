"use client";
import React from "react";
import WorkWidget from "@/components/Widget/WorkWidget.jsx";
import SkillsWidget from "@/components/Widget/SkillsWidget.jsx";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import ArticleCard from "@/components/Article/Articlecards.jsx";
import ProfileSection from "@/components/Introduction/Introduction.jsx";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import "./page.css";

//import ThemeSwitcher from "@/components/Theme/ThemeSwitcher.jsx";

// Experiences that go into the Work Widget
//// Logo images are stored in the public folder.
//// If you need to add your own logos, you need to upload them into the public folder.

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

const experiences = [
  {
    logo: "https://a.mktgcdn.com/p/J07Q6MNlx82STGtWPX3cIbexI4iDMBtDDGc8CxB_4ys/1080x1080.png",
    organization: "The Church of Jesus Christ of Latter-day Saints",
    jobTitle: "Security Analyst",
    startYear: 2020,
    endYear: null,
  },
  {
    logo: "https://a.mktgcdn.com/p/J07Q6MNlx82STGtWPX3cIbexI4iDMBtDDGc8CxB_4ys/1080x1080.png",
    organization: "The Church of Jesus Christ of Latter-day Saints",
    jobTitle: "Technical Support Generalist",
    startYear: 2019,
    endYear: 2020,
  },
  {
    logo: "https://muskogeechamber.org/wp-content/uploads/2021/05/Reaction-Logo.jpg",
    organization: "Reaction Data",
    jobTitle: "Data Entry Intern",
    startYear: 2017,
    endYear: 2019,
  },
  {
    logo: "https://lds-business-college.brightspotcdn.com/6c/99/0317974248b7a03a5c793a124480/ensign-logo-site.svg",
    organization: "Cybersecurity Club President",
    jobTitle: "Ensign College",
    startYear: 2020,
    endYear: 2024,
  },
];

//Article Cards

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Drumeo - The Ultimate Online Drum Lessons Experience!",
    content:
      "Drumeo is the world’s biggest online drum education platform. You might know us from our world-class drum videos, our supportive community, or our awesome Drumeo Coaches. ",
    link: "https://www.drumeo.com/about",
  },
  {
    date: "Sep 2, 2020",
    title: "The Hacker News",
    content:
      "The Hacker News (THN) stands as a top and reliable source for the latest updates in cybersecurity. As an independent outlet, we offer balanced and thorough insights into the cybersecurity sector, trusted by professionals and enthusiasts alike.",
    link: "https://thehackernews.com/",
  },
  {
    date: "Mar 12, 2022",
    title: "AllTrails - Best Hikes in Utah!",
    content:
      "Ready to check out the best trails in Utah for hiking, mountain biking, climbing or other outdoor activities? AllTrails has 3,194 hiking trails, mountain biking routes, backpacking trips and more. Discover hand-curated trail maps, along with reviews and photos from nature lovers like you.",
    link: "https://www.alltrails.com/us/utah",
  },
];

// Skills that go into the Skills Widget
const skills = [
  { name: "JavaScript", proficiency: 70, icon: "javascript.png" },
  { name: "Python", proficiency: 40, icon: "https://res.cloudinary.com/teepublic/image/private/s--TwCcIoc_--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520050660/production/designs/2416585_0.jpg" },
  { name: "PowerShell", proficiency: 30, icon: "https://techmeaway.net/wp-content/uploads/2020/02/powershell_logo-1024x1024.png" },
];

export default function Home() {
  //Return HTML elements for Home page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>
      <div className="profile-section">
        <ProfileSection />
      </div>

      <div className="content">
        <div className={"articles"}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
        {/* <div className="description"></div> */}
        <div className="digits">
          <WorkWidget title={"Work"} content={"My work experience."} experiences={experiences} />
          <SkillsWidget title={"Skills"} content={"My skills."} skills={skills} />
          <>
            <SignupWidget
              title={"Stay up to date"}
              content={"Sign up for updates and tips from me here!"}
            />
          </>
        </div>
      </div>
      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
