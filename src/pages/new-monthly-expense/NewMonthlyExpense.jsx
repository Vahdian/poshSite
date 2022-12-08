import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function NewMonthlyExpense() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    setData(formData);
    sendData(data);
  };

  const sendData = (data) => {
    const API = "http://localhost:7000/create-expense";
    console.log(data);
    fetch(API, {
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) =>
        data.register ? NavigateToData() : errorModal(data.message)
      );
  };

  const NavigateToData = () => {
    const currentUserId = id;
    navigate("/costs/" + currentUserId);
  };

  const errorModal = (message) => {
    console.log(message);
  };

  return (
    <>
      <h1>Create Expense</h1>

      <div className="container">
        <h4>Time to update the bills buddy!</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputField"
            {...register("electricity")}
            placeholder="Electricity"
          />
          <input
            className="inputField"
            {...register("gas")}
            placeholder="Gas"
          />
          <input
            className="inputField"
            {...register("water")}
            placeholder="Water"
          />
          <input
            className="inputField"
            {...register("year")}
            placeholder={new Date().getFullYear()}
          />
          <select className="inputField" {...register("month")}>
            {" "}
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
          <input
            className="inputField"
            {...register("other")}
            placeholder="Other expenses"
          />
          <input type="submit" value="Create" className="logInButton" />
        </form>
      </div>
    </>
  );
}
