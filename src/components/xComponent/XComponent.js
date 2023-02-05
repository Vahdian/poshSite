import React from "react";
import { Link } from "react-router-dom";
import x from "../../assets/x.png";
import useWindowSize from "../../hooks/useWindowSize";

export default function XComponent({ route }) {
  const width = useWindowSize();
  return (
    <>
      {width > 900 ? (
        <div className="absolute top-16 ml-2 mt-2 text-4xl clickable">
          <Link to={`/${route}`}>
            <img src={x} alt="" />
          </Link>
        </div>
      ) : (
        <div className="absolute bottom-28 ml-2 mt-2 text-4xl clickable">
          <Link to={`/${route}`}>
            <img src={x} alt="" className="w-8" />
          </Link>
        </div>
      )}
    </>
  );
}
