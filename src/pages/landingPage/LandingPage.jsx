import React, { useState } from "react";
import "./landingPage.css";
import "animate.css";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Spotify from "../../assets/spotify.svg";
import Soundcloud from "../../assets/soundcloud.svg";
import Youtube from "../../assets/youtube.svg";
import back from "../../assets/back.png";

import CV from "../../assets/cv.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [photographySelected, setPhotographySelected] = useState(false);
  const [codeSelected, setCodeSelected] = useState(false);
  const [artSelected, setArtSelected] = useState(false);
  const [musicSelected, setMusicSelected] = useState(false);
  const [nothingSelected, setNothingSelected] = useState(true);
  const [musicTitle, setMusicTitle] = useState(false);
  const [codeTitle, setCodeTitle] = useState(false);
  const [artTitle, setArtTitle] = useState(false);
  const [mediaTitle, setMediaTitle] = useState(false);

  const resetStatus = () => {
    setNothingSelected(true);
    setCodeSelected(false);
    setArtSelected(false);
    setMusicSelected(false);
    setArtSelected(false);
    setPhotographySelected(false);
    console.log("rest");
  };
  const selectCode = () => {
    setCodeSelected(true);
    setNothingSelected(false);
  };
  const selectArt = () => {
    setArtSelected(true);
    setNothingSelected(false);
  };
  const selectPhoto = () => {
    setPhotographySelected(true);
    setNothingSelected(false);
  };
  const selectMusic = () => {
    setMusicSelected(true);
    setNothingSelected(false);
  };

  const showMusicTitle = (bool) => {
    setMusicTitle(bool);
  };

  const showCodeTitle = (bool) => {
    setCodeTitle(bool);
  };
  const showArtTitle = (bool) => {
    setArtTitle(bool);
  };
  const showMediaTitle = (bool) => {
    setMediaTitle(bool);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        {!nothingSelected && (
          <div
            className="absolute top-0 left-0 ml-2 mt-2 text-4xl clickable"
            onClick={resetStatus}
          >
            <img src={back} alt="" />
          </div>
        )}
        <div className="mainPage  grid grid-cols-2 gap-3 font-bold">
          {musicSelected && (
            <div className="w-1/2 h-1/2 flex bg-blue-500 card text-black justify-center items-center text-white text-9xl">
              I
            </div>
          )}
          {musicSelected && (
            <div className="w-1/2 h-1/2 flex bg-orange-500 card text-black justify-center items-center text-white text-9xl">
              FK*N
            </div>
          )}
          {nothingSelected && (
            <div
              className="card1 w-1/2 h-1/2 flex justify-center items-center text-white text-xl clickable"
              onClick={selectCode}
              onMouseOver={() => showCodeTitle(true)}
              onMouseOut={() => showCodeTitle(false)}
            >
              {codeTitle && (
                <div
                  className="text-7xl"
                  onMouseOver={() => showCodeTitle(true)}
                >
                  CODE
                </div>
              )}
            </div>
          )}
          {codeSelected && (
            <div className="card1 w-1/2 h-1/2 flex justify-center items-end text-white text-xl">
              {codeSelected && <div className="text-9xl">CODE</div>}
            </div>
          )}
          {codeSelected && (
            <div className="cardcode1 w-1/2 h-1/2 flex justify-center items-end text-white text-xl"></div>
          )}
          {nothingSelected && (
            <div
              className="card2 w-1/2 h-1/2 flex justify-center items-center text-white text-xl clickable"
              onClick={selectArt}
              onMouseOver={() => showArtTitle(true)}
              onMouseOut={() => showArtTitle(false)}
            >
              {artTitle && (
                <div
                  className="text-7xl"
                  onMouseOver={() => showArtTitle(true)}
                >
                  ART
                </div>
              )}
            </div>
          )}
          {artSelected && (
            <div
              className="card2 w-1/2 h-1/2 flex justify-center items-end text-white text-xl"
              onMouseOver={selectArt}
            >
              {artSelected && <div className="text-9xl">ART</div>}
            </div>
          )}
          {codeSelected && (
            <div className="cardcode2 w-1/2 h-1/2 flex justify-center items-end text-white text-xl"></div>
          )}
          {nothingSelected && (
            <div
              className="card3 w-1/2 h-1/2 flex justify-center items-center text-white text-xl clickable"
              onClick={selectMusic}
              onMouseOver={() => showMusicTitle(true)}
              onMouseOut={() => showMusicTitle(false)}
            >
              {musicTitle && (
                <div
                  className="text-7xl"
                  onMouseOver={() => showMusicTitle(true)}
                >
                  MUSIC
                </div>
              )}
            </div>
          )}
          {musicSelected && (
            <div
              className="cardmusic w-1/2 h-1/2 flex justify-center items-center text-white text-xl"
              onMouseOver={selectMusic}
            />
          )}
          {musicSelected && (
            <div
              className="relative w-1/2 h-1/2 flex flex-col bg-pink-500 card text-black justify-center items-center text-white text-7xl"
              onMouseOver={selectMusic}
            >
              MUSIC
              <div className="flex justify-around items-center mt-4 gap-3">
                <a
                  href="https://www.linkedin.com/in/germanpalero/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Spotify} alt="" className="h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/germanpalero/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Soundcloud} alt="" className="h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/germanpalero/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Youtube} alt="" className="h-6" />
                </a>
              </div>
            </div>
          )}

          {codeSelected && (
            <div className="cardcode3 w-1/2 h-1/2 flex justify-center items-end text-white text-xl"></div>
          )}
          {nothingSelected && (
            <Link to="/media">
              <div
                className="card4 w-1/2 h-1/2 flex justify-center items-center text-white text-xl clickable"
                onClick={selectPhoto}
                onMouseOver={() => showMediaTitle(true)}
                onMouseOut={() => showMediaTitle(false)}
              >
                {mediaTitle && (
                  <div
                    className="text-5xl text-center"
                    onMouseOver={() => showMediaTitle(true)}
                  >
                    VIDEO & PHOTOGRAPHY
                  </div>
                )}
              </div>
            </Link>
          )}
          {photographySelected && (
            <div className="card4 w-1/2 h-1/2 flex justify-center items-end text-white text-xl">
              {photographySelected && (
                <div className="text-xl">PHOTO & VIDEO</div>
              )}
            </div>
          )}
        </div>
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
          <a
            href="https://www.mycv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CV} alt="" className="h-6 mb-4" id="cv" />
          </a>
        </div>
        <div className="absolute right-0 text-black m-6">
          <div className="rotate-[270deg] clickable" id="about">
            ABOUT ME
          </div>
        </div>
      </div>
    </>
  );
}
