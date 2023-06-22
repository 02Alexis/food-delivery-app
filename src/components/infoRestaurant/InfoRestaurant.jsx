import React, { useEffect } from "react";
import { MdKeyboardArrowLeft, MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import "./InfoRestaurant.scss";
import { useDispatch, useSelector } from "react-redux";

function InfoRestaurant() {
  const { selectedRestaurant } = useSelector((store) => store.restaurantsStore);

  return (
    <>
      <Link to="/home/">
        <MdKeyboardArrowLeft className="iconArrow" />
      </Link>

      <div className="contenedor">
        <img src={selectedRestaurant.imagen} alt={selectedRestaurant.nombre} />
        <div className="contenido">
          <h1>{selectedRestaurant.nombre}</h1>
          <p>{selectedRestaurant.comentarios}</p>
          <div className="calificacion">
            {selectedRestaurant.calificacion.map((calificacion, index) => (
              <MdStarRate
                key={index}
                className={calificacion === 6 ? "star white" : "star yellow"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoRestaurant;
