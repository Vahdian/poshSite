import React from 'react'
import Gallery from './galleryComponent/Gallery'
import back from "../../assets/back.png";

export default function Media() {
  return (
    <div> <div
    className="absolute top-0 left-0 ml-2 mt-2 text-4xl clickable"
  >
    <img src={back} alt="" />
  </div><Gallery/></div>
  )
}

