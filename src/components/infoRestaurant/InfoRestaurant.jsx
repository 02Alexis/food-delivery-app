import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "./InfoRestaurant.scss";

function InfoRestaurant() {
  return (
    <>
      <Link to="/home/">
        <MdKeyboardArrowLeft />
      </Link>

      <div className="infoRestaurant">
        aqui va el restaurante que seleccionastes
      </div>
    </>
  );
}

export default InfoRestaurant;
