import React from 'react'
import { Link } from 'react-router-dom';
import x from "../../assets/x.png";

export default function XComponent({route}) {
  return (
    <div className="absolute top-16 ml-2 mt-2 text-4xl clickable">
        <Link to={`/${route}`}>
        <img src={x} alt=""/>
        </Link>
      </div>
  )
}
