import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faDroplet,
  faGasPump,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";
import { allUsers, dataUser } from "../../utils/dataMock.js";
import {
  consumptionPercentages,
  individualCosts,
  totalMonth,
  userRent,
} from "../../utils/calculationsMainPage";

export default function MainPage() {
  const [electricity, setElectricity] = useState(true);
  const [gas, setGas] = useState(true);
  const [water, setWater] = useState(true);
  const [rent, setRent] = useState(true);
  const [selectedUser, setSelectedUser] = useState("");
  const [percentagesUser, setPercentagesUser] = useState({});

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

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
    setPercentagesUser(consumptionPercentages(selectedUser));
  };

  return (
    <>
      <div className="myScreen">
        <select
          value={selectedUser}
          onChange={handleChange}
          className="mySelect"
        >
          {allUsers.map((users) => (
            <option key={users.value} value={users.value}>
              {users.text}
            </option>
          ))}
        </select>
      </div>
      <div className="mainTable">
        <div className="box">
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
        <div className="box">
          {electricity ? (
            <div className="button">
              <div onClick={showElectricity}>
                {selectedUser
                  ? individualCosts(selectedUser).electricity
                  : dataUser.electricity}
                €
              </div>
            </div>
          ) : (
            <div className="button" onClick={showElectricity}>
              {percentagesUser.percentageElectricity}%
            </div>
          )}

          {gas ? (
            <div className="button">
              <div onClick={showGas}>
                {selectedUser
                  ? individualCosts(selectedUser).gas
                  : dataUser.gas}
                €
              </div>
            </div>
          ) : (
            <div className="button" onClick={showGas}>
              {percentagesUser.percentageGas}%
            </div>
          )}
          {water ? (
            <div className="button">
              <div onClick={showWater}>
                {selectedUser
                  ? individualCosts(selectedUser).water
                  : dataUser.water}
                €
              </div>
            </div>
          ) : (
            <div className="button" onClick={showWater}>
              {percentagesUser.percentageWater}%
            </div>
          )}
          {rent ? (
            <div className="button">
              <div onClick={showRent}>
                {selectedUser ? userRent(selectedUser) : dataUser.totalRent}€
              </div>
            </div>
          ) : (
            <div className="button" onClick={showRent}>
              {percentagesUser.percentageRent}%
            </div>
          )}
        </div>
      </div>
      <h1 className="total">
        TOTAL:{" "}
        {selectedUser ? individualCosts(selectedUser).total : totalMonth()}€
      </h1>
    </>
  );
}
