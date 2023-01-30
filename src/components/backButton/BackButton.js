import React from 'react'
import { Link } from 'react-router-dom';
import back from "../../assets/back.png";

export default function BackButton({route}) {
  return (
    <div className="absolute top-0 left-0 ml-2 mt-2 text-4xl clickable">
        <Link to={`/${route}`}>
        <img src={back} alt=""/>
        </Link>
      </div>
  )
}
