import React, { useState } from "react";
import arrowback from "../../assets/arrowback.png";
import arrowforward from "../../assets/arrowforwardwhite.png";
import "./AboutComponent.css";
import "animate.css";
import { useEffect } from "react";
import stackIcons from "../../assets/stack/techStack";
import useWindowSize from "../../hooks/useWindowSize";

export default function AboutComponent({ nav }) {
  const [aboutMe, setAboutMe] = useState(false);
  const width = useWindowSize();
  const icons = stackIcons;
  console.log(icons);

  const extendAboutMe = () => {
    setAboutMe(true);
  };
  const hideAboutMe = () => {
    setAboutMe(false);
  };
  useEffect(() => {
    if (nav) {
      setAboutMe(false);
      console.log("HIDE");
    }
  }, [nav]);

  return (
    <>
      {width > 900 && !aboutMe && (
        <div
          className="absolute right-0 text-black m-6 flex"
          onClick={extendAboutMe}
        >
          <img src={arrowback} alt="" className="mr-0 h-8 clickable" />
          <div className="rotate-[270deg] clickable" id="about">
            ABOUT ME
          </div>
        </div>
      )}
      {aboutMe && (
        <>
          <div
            className={
              aboutMe
                ? "absolute right-0 text-white bg-gray-700 glass flex items-center aboutComponent animate__animated animate__fadeInRight"
                : "absolute right-0 text-white glass flex items-center aboutComponent"
            }
            onClick={hideAboutMe}
          >
            <div className="glass absolute right-0"></div>
            <img src={arrowforward} alt="" className="ml-4 h-8 clickable" />
            <div className=" text-center flex justify-center ml-10 mr-10 h-screen items-center text-white flex-col">
              <h1 className="text-3xl mb-4 font-bold">ABOUT ME</h1>
              <img
                src="https://live.staticflickr.com/65535/52659848824_38e17a0a81_h.jpg"
                className="h-14 w-14 object-cover rounded-full mb-4 border"
                alt=""
              />
              <h1 className="mb-2">MY GOALS</h1>
              <p className="text-xs w-80 mb-4">
                My name is German I am a web developer, photographer, musician
                artist and adventurer from Madrid, Spain. I am fully commited
                with projects about equality, inclusion and making a better
                world for everyone.
              </p>
              <h1 className="mb-2">TECH STACK</h1>
              <div className="flex justify-around items-center space-x-4">
                {stackIcons.map((icon, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={icon.route}
                        alt={icon.tech}
                        className="h-8 w-8"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
