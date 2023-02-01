import React from "react";
import Socials from "../../../components/socialsComponent/Socials";
import "./Gallery.css";
export default function Gallery({ images }) {
  const photos = images;
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div className="grid grid-cols-3 gap-3 gallery">
        {photos.map((photo, i) => (
          <div className="enlarge" key={i}>
            <img src={photo.link} className="imageGallery resize" alt="" />
          </div>
        ))}
      </div>
      ;<Socials></Socials>
    </div>
  );
}
