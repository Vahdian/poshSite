import React from "react";
import back from "../../assets/back.png";
import useWindowSize from "../../hooks/useWindowSize";
import x from "../../assets/x.png";

export default function BackButtonReset({ onClick }) {
  const width = useWindowSize();
  return (
    <>
      {width > 900 ? (
        <div
          className="absolute top-0 left-0 ml-2 mt-2 text-4xl clickable z-20"
          onClick={onClick}
        >
          <img src={back} alt="" />
        </div>
      ) : (
        <div
          className="fixed bottom-0 mt-2 mb-2 text-sm clickable z-2 bottom-back"
          onClick={onClick}
        >
          <img src={x} alt="" className="w-8" />
        </div>
      )}
    </>
  );
}
