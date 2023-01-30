import React from "react";
import Gallery from "./galleryComponent/Gallery";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import BackButton from "../../components/backButton/BackButton";

export default function Media() {
  return (
    <div className="flex justify-center items-center">
      <BackButton route={""}/>
      <Gallery />
      <AboutComponent />
    </div>
  );
}
