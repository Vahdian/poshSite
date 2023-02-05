import React from "react";
import "./Gallery.css";
export default function Gallery({ images }) {
  const photos = images;
  return (
    <div className="flex justify-center items-center h-screen flex-col mt-20 mb-12 ">
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gallery overflow-scroll">
        {photos.map((photo, i) => (
          <div className="enlarge" key={i}>
            <img src={photo.link} className="imageGallery resize" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
