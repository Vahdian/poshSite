import {
  faBolt,
  faDroplet,
  faGasPump,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  consumptionPercentages,
  individualCost,
  userRent,
} from "../../../utils/calculationsMainPage";

export default function BillsCard({ expenses, selectedUser }) {
  const [electricity, setElectricity] = useState(true);
  const [gas, setGas] = useState(true);
  const [water, setWater] = useState(true);
  const [rent, setRent] = useState(true);

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
    <div>
      {" "}
      <div className="mainTable">
        <div className="box1">
          <div>
            <FontAwesomeIcon icon={faBolt} className="button" />
          </div>
          <div>
            <FontAwesomeIcon icon={faGasPump} className="button" />
          </div>
          <div>
            <FontAwesomeIcon icon={faDroplet} className="button" />
          </div>
          <div>
            <FontAwesomeIcon icon={faHouse} className="button" />
          </div>
        </div>
        <div className="box2">
          {electricity ? (
            <div className="button">
              <div onClick={showElectricity}>
                {selectedUser && individualCost(expenses.electricity)}€
              </div>
            </div>
          ) : (
            <div className="button" onClick={showElectricity}>
              {expenses &&
                consumptionPercentages(selectedUser, expenses, "electricity")}
              %
            </div>
          )}

          {gas ? (
            <div className="button">
              <div onClick={showGas}>
                {selectedUser && individualCost(expenses.gas)}€
              </div>
            </div>
          ) : (
            <div className="button" onClick={showGas}>
              {expenses &&
                consumptionPercentages(selectedUser, expenses, "gas")}
              %
            </div>
          )}
          {water ? (
            <div className="button">
              <div onClick={showWater}>
                {selectedUser && individualCost(expenses.water)}€
              </div>
            </div>
          ) : (
            <div className="button" onClick={showWater}>
              {expenses &&
                consumptionPercentages(selectedUser, expenses, "water")}
              %
            </div>
          )}
          {rent ? (
            <div className="button">
              <div onClick={showRent}>
                {selectedUser && userRent(selectedUser.tenantType)}€
              </div>
            </div>
          ) : (
            <div className="button" onClick={showRent}>
              {expenses &&
                consumptionPercentages(selectedUser, expenses, "rent")}
              %
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
