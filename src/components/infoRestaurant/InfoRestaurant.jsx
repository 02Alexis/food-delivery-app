import React, { useEffect } from "react";
import { MdKeyboardArrowLeft, MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import "./InfoRestaurant.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPlatosRestaurantsAsync } from "../../redux/actions/platosActions";

function InfoRestaurant() {
  const dispatch = useDispatch();
  const { platos, restaurantsStore } = useSelector((store) => store);

  useEffect(() => {
    if (restaurantsStore.selectedRestaurant) {
      dispatch(
        getPlatosRestaurantsAsync(restaurantsStore.selectedRestaurant.id)
      );
    }
  }, [dispatch, restaurantsStore.selectedRestaurant]);

  return (
    <>
      <Link to="/home/">
        <MdKeyboardArrowLeft className="iconArrow" />
      </Link>

      {restaurantsStore.selectedRestaurant && (
        <div className="contenedor">
          <img
            className="restaurant"
            src={restaurantsStore.selectedRestaurant.imagen}
            alt=""
          />
          <div className="contenido">
            <h1>{restaurantsStore.selectedRestaurant.nombre}</h1>
            <p>{restaurantsStore.selectedRestaurant.comentarios}</p>
            {/* <div className="calificacion">
              {restaurantsStore.selectedRestaurant.calificacion.map(
                (rating, index) => (
                  <MdStarRate
                    key={index}
                    className={rating === 6 ? "star white" : "star yellow"}
                  />
                )
              )}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRestaurant;