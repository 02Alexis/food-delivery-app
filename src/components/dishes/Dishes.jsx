import React, { useEffect } from "react";
import { MdKeyboardArrowLeft, MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Dishes.scss";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantDishes } from "../../redux/actions/restaurantActions";

function Dishes() {
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

      <div>
        {platos.length === 0 ? (
          <p>No hay platos disponibles.</p>
        ) : (
          <>
            <h2>Platos disponibles:</h2>
            <div>
              {platos.map((plato) => (
                <div key={plato.id}>
                  <img src={plato.imagen} alt={plato.nombre} />
                  <p>{plato.nombre}</p>
                </div>
                
                
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dishes;
