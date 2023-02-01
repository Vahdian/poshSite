import React, { useEffect, useState } from "react";
import Gallery from "./galleryComponent/Gallery";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import BackButton from "../../components/backButton/BackButton";
import "animate.css";

export default function Media() {
  const [source, setSource] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  const params = window.location.href;
  const currentPage = params.split("/media/")[1];
  const checkPage = (params) => {
    const portraits = require("./ImageSets.json").portraits;
    const travel = require("./ImageSets.json").travel;
    const bw = require("./ImageSets.json").byw;
    switch (params) {
      case "portraits":
        return portraits;
      case "travel":
        return travel;
      case "bw":
        return bw;
      default:
        return "non";
    }
  };
  useEffect(() => {
    setSource(checkPage(currentPage));
  }, []);

  useEffect(() => {
    setFadeIn(!fadeIn);
  }, []);

  return (
    <>
      {source && (
        <div
          className={
            fadeIn
              ? "flex justify-center items-center animate__animated animate__fadeInLeft"
              : "flex justify-center items-center animate__animated animate__fadeInRight"
          }
        >
          <BackButton route={"media"} />
          <Gallery images={source} />
          <AboutComponent />
        </div>
      )}
    </>
  );
}
