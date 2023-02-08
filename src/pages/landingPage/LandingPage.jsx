import React, { useState } from "react";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import BackButtonReset from "../../components/backButtonResetComponent/BackButtonReset";
import Socials from "../../components/socialsComponent/Socials";
import LandingPageComponent from "./LandingPageComponent/LandingPageComponent";

export default function LandingPage() {
  const [navigate, setNavigate] = useState(false);
  const [reset, setReset] = useState(false);

  const activateReset = () => {
    console.log(reset);
    setReset(!reset);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Socials />
      <LandingPageComponent reset={reset} setNavigate={setNavigate} />
      <AboutComponent nav={navigate} />
      {navigate && (
        <div onClick={activateReset}>
          <BackButtonReset />
        </div>
      )}
    </div>
  );
}
