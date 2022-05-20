import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Navbar />
      <h1 className="text-center text-white mt-5">Welcome to 4Geeks</h1>
      <h3 className="text-center text-danger mt-5">Enjoy the experience !!!</h3>
    </div>
  );
};
