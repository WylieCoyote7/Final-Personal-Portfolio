import "./Introduction.css";
import React from "react";
//import { FaLinkedin, FaXing, FaRegShareSquare } from 'react-icons/fa'; // Assuming you're using React Icons for the icons

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src="profilepic.jpg" alt="profile" clasName="pofilepic" />
      <h1>Cybersecurity analyst, software enthusiast</h1>
      <p>
        My name is Alex Wylie and I am currently a cybersecurity analyst. I also love to learn about code and
        how to build software and scripts that make life easier. Technology is supposed to be used, so
        let's use it!
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/alexander-wylie-8867a9157/" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.xing.com/profile/yourprofile" target="_blank" rel="noopener noreferrer"></a>
        <a href="/share" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

export default ProfileSection;
