/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutComponent from "../../../components/aboutComponent/AboutComponent";
import Socials from "../../../components/socialsComponent/Socials";
import XComponent from "../../../components/xComponent/XComponent";
import "../galleryComponent/Gallery.css";
import "animate.css";

export default function ThreeCardsComponent() {
  const [showTitle, setShowTitle] = useState(false);
  const [title, setTitle] = useState("");
  const [key, setKey] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  const photos = require("../ImageSets.json").imageCategories;

  const showThisTitle = (title, e) => {
    setShowTitle(true);
    setTitle(title);
    setKey(e);
  };

  const dontShowThisTitle = (e) => {
    setShowTitle(false);
    setTitle("");
  };

  useEffect(() => {
    setFadeIn(!fadeIn);
  }, []);

  return (
    <div
      className={
        fadeIn
          ? "flex justify-center items-center h-screen animate__animated animate__fadeInRight"
          : "flex justify-center items-center h-screen"
      }
    >
      <XComponent route={""}></XComponent>
      <Socials></Socials>
      <div className="grid grid-cols-3 gap-3 items-center pointer ">
        {photos.map((photo, i) => (
          <Link to={photo.nav}>
            <div
              className="enlarge relative"
              key={i}
              onMouseOver={() => showThisTitle(photo.title, i)}
              onMouseOut={() => dontShowThisTitle(photo.title, i)}
            >
              <img
                src={photo.link}
                className="imageGallery  clickable"
                alt={i}
              />
              {showTitle && i === key && (
                <div className="absolute right-0 left-0 bottom-0 text-center text-6xl text-white font-bold">
                  {title}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <AboutComponent></AboutComponent>
    </div>
  );
}
