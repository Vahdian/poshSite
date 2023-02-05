import React from "react";
import CV from "../../assets/cv.png";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import "../../pages/landingPage/LandingPageComponent/landingPageComponent.css";
import useWindowSize from "../../hooks/useWindowSize";

export default function Socials() {
  const width = useWindowSize();
  const soul = require("../../assets/soul.png");
  return (
    <div className="fixed sm:left-0 top-0 sm:top-auto space-x-8 sm:space-x-0 text-black mt-6 sm:mt-0 cursor-pointer flex sm:flex-col justify-center items-center sm:h-screen w-screen sm:w-auto sm:ml-6 z-20">
      {width < 900 && <img className="mb-4 text-sm w-32 " src={soul} alt="" />}
      <a
        href="https://www.instagram.com/soulofkumami"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Instagram}
          alt=""
          className="h-4 sm:h-6 mb-4"
          id="instagram"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/germanpalero/"
        target="_blank"
        rel="noopener noreferrer"
        id="linkedin"
      >
        <img src={LinkedIn} alt="" className="h-4 sm:h-6 mb-4" id="linkedin" />
      </a>
      <a
        href="https://www.germanpalerocv.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={CV} alt="" className="h-4 sm:h-6 mb-4" id="cv" />
      </a>
    </div>
  );
}
