import React, { useEffect, useState } from "react";
import "./Dishes.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantDishes,
  getDishDetails,
} from "../../redux/actions/restaurantActions";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

function Dishes() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedRestaurant, platos } = useSelector(
    (store) => store.restaurantsStore
  );

  useEffect(() => {
    // Obtén los platos del restaurante seleccionado
    if (selectedRestaurant && selectedRestaurant.id) {
      dispatch(getRestaurantDishes(selectedRestaurant.id));
    }
  }, [selectedRestaurant, dispatch, searchTerm]);

  return (
    <>
      <div className="search-bar">
        <MdSearch className="search__icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a dish"
        />
      </div>

      <div className="cards">
        {platos.length === 0 ? (
          <p>No hay platos disponibles.</p>
        ) : (
          <>
            {platos
              .filter((plato) =>
                plato.nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((plato) => (
                <div className="pizza-card" key={plato.id}>
                  <div className="image">
                    <img
                      onClick={() => {
                        dispatch(getDishDetails(plato.id));
                        navigate(`/productPage/${plato.id}`);
                      }}
                      src={plato.imagen}
                      alt={plato.nombre}
                    />
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
