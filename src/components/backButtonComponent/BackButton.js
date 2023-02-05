import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import useWindowSize from "../../hooks/useWindowSize";
import x from "../../assets/x.png";

export default function BackButton({ route, onClick }) {
  const width = useWindowSize();
  return (
    <>
      {width > 900 ? (
        <div className="absolute top-0 left-0 ml-2 mt-2 text-4xl clickable z-20">
          <Link to={`/${route}`}>
            <img src={back} alt="" />
          </Link>
        </div>
      ) : (
        <div className="fixed bottom-0 ml-2 mt-2 mb-2 text-sm clickable z-2 bottom-back">
          <Link to={`/${route}`}>
            <img src={x} alt="" className="w-8" />
          </Link>
        </div>
      )}
    </>
  );
}
