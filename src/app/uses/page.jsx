import React from "react";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import UsesSection from "@/components/UsesCard/UsesSection.jsx";
import "./uses.css";

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

const items = [
  {
    groupName: 'Computer',
    items: [
      {
        title: 'Dell Inspiron 15 5000',
        description:
          'This is the current computer I use. It is almost 6 years old and still going, with a battery and hard drive update of course. It has an Intel 8th generation processor, fast enough to code and run some virtual machines.',
      },
      {
        title: 'Dell Keyboard',
        description:
          'You can use whatever keyboard you feel comfortable with, but for some reason, I like the basic stock Dell keyboards. They are quiet, smooth, and the keys are short.',
      },
      {
        title: 'Logitech G502 Gaming Mouse',
        description:
          'I love this mouse, mainly because I can program the extra buttons to use the copy, paste, and clipboard history function on Windows.',
      },
    ],
  },
  {
    groupName: 'Coding',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for most of my development work. It’s fast, has great extensions, and is highly customizable.',
      },
      {
        title: 'Notepad++',
        description:
          'I used to use Notepad++ for my development. It works well as it customizes based on the coding language you are using.',
      },
    ],
  },
  {
    groupName: 'Drums',
    items: [
      {
        title: 'Tama Shells',
        description:
          'My drum shells are Tama superstar hyperdrive with a 22" bass drum.',
      },
      {
        title: 'Evans Drumheads',
        description:
          'I currently have Evans two-ply drumheads on all my drum shells. They have a built-in muffler ring and are very durable.',
      },
      {
        title: 'Zildjian Cymbals',
        description:
          'I have been using Zildjian cymbals since I started drumming. They sound great and last a long time, as long as you treat them right (Don’t hit them in the center. That goes for any cymbals).',
      },
    ],
  },
];

export default function Uses() {
  //Return HTML elements for Project page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="projectBody">
          <h1 className="h1">What do I recommend?</h1>
          <br></br>
          <p>
            Below is a list of hardware, tools, drums and other things I recommend you buy when you are starting out on cyber, coding, or music!
          </p>
          <br></br>
          </div>
        <div>
          <UsesSection items={items} />
        </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
