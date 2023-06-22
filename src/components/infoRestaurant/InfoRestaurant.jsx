import React, { useEffect } from "react";
import { MdKeyboardArrowLeft, MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import "./InfoRestaurant.scss";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantDishes } from "../../redux/actions/restaurantActions";

function InfoRestaurant() {
  const { selectedRestaurant, platos } = useSelector((store) => store.restaurantsStore);
  const dispatch = useDispatch();

  useEffect(() => {
    // Obtén los platos del restaurante seleccionado
    if (selectedRestaurant && selectedRestaurant.id) {
      dispatch(getRestaurantDishes(selectedRestaurant.id));
    }
  }, [selectedRestaurant, dispatch]);

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
          {/* <div className="calificacion">
            {selectedRestaurant.calificacion.map((calificacion, index) => (
              <MdStarRate
                key={index}
                className={calificacion === 6 ? "star white" : "star yellow"}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default InfoRestaurant;
