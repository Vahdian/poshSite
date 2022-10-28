import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faDroplet,
  faGasPump,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";
import { dataUser } from "../../utils/dataMock.js";
import { consumptionPercentages } from "../../utils/calculationsMainPage";

export default function MainPage() {
  const [electricity, setElectricity] = useState(true);
  const [gas, setGas] = useState(true);
  const [water, setWater] = useState(true);
  const [rent, setRent] = useState(true);

  const data = dataUser;
  console.log(dataUser);

  const showElectricity = () => {
    setElectricity(!electricity);
  };

  const showGas = () => {
    setGas(!gas);
  };

  const showWater = () => {
    setWater(!water);
  };

  const showRent = () => {
    setRent(!rent);
  };

  return (
    <>
      <div className="mainTable">
        <div className="box">
          <div>
            {electricity ? (
              <FontAwesomeIcon
                icon={faBolt}
                className="button"
                onClick={showElectricity}
              />
            ) : (
              <div className="button">
                <FontAwesomeIcon icon={faBolt} />
                <div onClick={showElectricity}>{data.electricity}€</div>
              </div>
            )}
          </div>
          <div>
            {gas ? (
              <FontAwesomeIcon
                icon={faGasPump}
                className="button"
                onClick={showGas}
              />
            ) : (
              <div className="button">
                <FontAwesomeIcon icon={faGasPump} />
                <div onClick={showGas}>{data.gas}€</div>
              </div>
            )}
          </div>
          <div>
            {water ? (
              <FontAwesomeIcon
                icon={faDroplet}
                className="button"
                onClick={showWater}
              />
            ) : (
              <div className="button">
                <FontAwesomeIcon icon={faDroplet} />
                <div onClick={showWater}>{data.water}€</div>
              </div>
            )}
          </div>
          <div>
            {rent ? (
              <FontAwesomeIcon
                icon={faHouse}
                className="button"
                onClick={showRent}
              />
            ) : (
              <div className="button">
                <FontAwesomeIcon icon={faHouse} />
                <div onClick={showRent}>{data.rent}€</div>
              </div>
            )}
          </div>
        </div>
        <div className="box">
          <div className="button">
            {consumptionPercentages.percentageElectricity}%
          </div>
          <div className="button">{consumptionPercentages.percentageGas}%</div>
          <div className="button">
            {consumptionPercentages.percentageWater}%
          </div>
          <div className="button">{consumptionPercentages.percentageRent}%</div>
        </div>
      </div>
    </>
  );
}
