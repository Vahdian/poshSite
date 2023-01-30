import React from "react";
import CV from "../../assets/cv.png";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import "../../pages/landingPage/landingPage.css";

export default function Socials() {
  return (
    <div className="absolute left-0 text-black m-6 cursor-pointer">
      <a
        href="https://www.instagram.com/soulofkumami"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="" className="h-6 mb-4" id="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/germanpalero/"
        target="_blank"
        rel="noopener noreferrer"
        id="linkedin"
      >
        <img src={LinkedIn} alt="" className="h-6 mb-4" id="linkedin" />
      </a>
      <a href="https://www.mycv.com" target="_blank" rel="noopener noreferrer">
        <img src={CV} alt="" className="h-6 mb-4" id="cv" />
      </a>
    </div>
  );
}
