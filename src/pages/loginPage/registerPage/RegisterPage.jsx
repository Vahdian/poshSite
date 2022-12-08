import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    setData(formData);
    sendData(data);
  };

  const sendData = (data) => {
    const { tenantType } = data;
    const tenantNumber = Number(tenantType);
    const newData = { ...data, ...{ tenantType: tenantNumber } };
    const API = "http://localhost:7000/create-user";
    fetch(API, {
      body: JSON.stringify(newData),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) =>
        data.register ? NavigateToData(data) : errorModal(data.message)
      );
  };

  const NavigateToData = (data) => {
    const currentUserId = data.id;
    navigate("/costs/" + currentUserId);
  };

  const errorModal = (message) => {
    console.log(message);
  };

  return (
    <>
      <h1>Welcome!</h1>

      <div className="container">
        <h4>In order to start we just need to know...</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputField"
            {...register("username")}
            placeholder="Username"
          />
          <input
            className="inputField"
            {...register("email")}
            placeholder="E-mail"
          />
          <input
            className="inputField"
            {...register("name")}
            placeholder="Full name"
          />
          <input
            className="inputField"
            {...register("password")}
            placeholder="password"
            type="password"
          />
          <select className="inputField" {...register("tenantType")}>
            {" "}
            <option value={3}>Room</option>
            <option value={2}>Room & Office</option>
            <option value={1}>Room & Studio</option>
          </select>
          <input type="submit" value="Register" className="logInButton" />
        </form>
      </div>
    </>
  );
}
