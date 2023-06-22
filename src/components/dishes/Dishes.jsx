import React, { useEffect } from "react";
import "./Dishes.scss";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantDishes } from "../../redux/actions/restaurantActions";

function Dishes() {
  const { selectedRestaurant, platos } = useSelector(
    (store) => store.restaurantsStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Obtén los platos del restaurante seleccionado
    if (selectedRestaurant && selectedRestaurant.id) {
      dispatch(getRestaurantDishes(selectedRestaurant.id));
    }
  }, [selectedRestaurant, dispatch]);

  return (
    <>
      <div className="cards">
        {platos.length === 0 ? (
          <p>No hay platos disponibles.</p>
        ) : (
          <>
            {platos.map((plato) => (
              <div className="pizza-card" key={plato.id}>
                <div className="image">
                  <img src={plato.imagen} alt={plato.nombre} />
                </div>
                <div className="details">
                  <p className="name">{plato.nombre}</p>
                  <p className="price">$ {plato.precio}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Dishes;
