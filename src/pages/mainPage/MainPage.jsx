import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";
import { totalExpenses, totalMonth } from "../../utils/calculationsMainPage";
import { useParams } from "react-router-dom";
import CurrentDateComponent from "./components/CurrentDateComponent";
import BillsCard from "./components/BillsCard";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const date = new Date();
  const month = date.getMonth();
  const lastMonth = (obtainedMonth) => {
    if (obtainedMonth === 0) {
      return 12;
    } else {
      return obtainedMonth;
    }
  };
  console.log(lastMonth(month));
  const thisYear = date.getYear() + 1900;

  const [expenses, setExpenses] = useState(1000);
  const [selectedUser, setSelectedUser] = useState();

  const { id } = useParams();

  const fetchExpense = () => {
    const API = "http://localhost:7000/expenses";
    fetch(API, {
      body: JSON.stringify({ month: lastMonth(month), year: thisYear }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  };

  const fetchUser = () => {
    const API = "http://localhost:7000/user/" + id;
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSelectedUser(data));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchUser(), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchExpense(), []);

  const newExpense = () => {
    navigate("/new-monthly-expense/" + id);
  };

  console.log(selectedUser);

  return (
    <>
      <div className="headerMainPage">
        <div>
          <CurrentDateComponent></CurrentDateComponent>
          {selectedUser && <h1>Welcome, {selectedUser.username}</h1>}
        </div>
        <div className="iconHistory">
          <FontAwesomeIcon icon={faClockRotateLeft} className="button" />
          {selectedUser && selectedUser.tenantType === 1 && (
            <FontAwesomeIcon
              icon={faPlus}
              className="button"
              onClick={newExpense}
            />
          )}
        </div>
      </div>
      <BillsCard expenses={expenses} selectedUser={selectedUser} />
      <div className="container resultContainer">
        <div className="total">
          <div>BILLS</div> {totalExpenses(expenses)}€
        </div>
        <div className="total">
          <div>TOTAL</div>
          {expenses &&
            selectedUser &&
            totalMonth(expenses, selectedUser.tenantType)}
          €
        </div>
      </div>
    </>
  );
}
