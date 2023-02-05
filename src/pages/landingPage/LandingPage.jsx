import React, { useState } from "react";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import BackButton from "../../components/backButtonComponent/BackButton";
import Socials from "../../components/socialsComponent/Socials";
import LandingPageComponent from "./LandingPageComponent/LandingPageComponent";

export default function LandingPage() {
  const [navigate, setNavigate] = useState(false);
  const [reset, setReset] = useState(false);

  const activateReset = () => {
    setReset(!reset);
    console.log(reset);
  };

  return (
    <div className="flex justify-center items-center">
      {navigate && <BackButton route={"/"} onClick={activateReset} />}
      <Socials />
      <LandingPageComponent reset={reset} setNavigate={setNavigate} />
      <AboutComponent nav={navigate} />
    </div>
  );
}
