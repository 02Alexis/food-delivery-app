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
            <div className="calificacion">
                  {restaurantsStore.selectedRestaurant.calificacion.map((rating, index) => (
                    <MdStarRate
                      key={index}
                      className={rating === 6 ? "star white" : "star yellow"}
                    />
                  ))}
                </div>
          </div>
        </div>
      )}

      {platos && platos.length > 0 && (
        <div>
          {/* Renderiza los platos relacionados con el restaurante seleccionado */}
          {platos.map((plato) => (
            <div key={plato.id}>
              <p>{plato.nombre}</p>
              <p>{plato.descripcion}</p>
              {/* ...otros campos */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default InfoRestaurant;

// import React, { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { getRestaurantById } from "../../redux/actions/restaurantActions";
// import { Link, useParams } from "react-router-dom";
// import "./InfoRestaurant.scss";
// import { useDispatch, useSelector } from "react-redux";

// function InfoRestaurant() {
//   const dispatch = useDispatch();
//   const [selectedRestaurant, setSelectedRestaurant] = useState("");
//   const {id} = useParams();
//   const { selectedRestaurant } = useSelector((store) => store.restaurantsStore);

//   useEffect(() => {
//     dispatch(getRestaurantById(id))
//   }, [])

//   return (
//     <>
//       <Link to="/home">
//         <MdKeyboardArrowLeft />
//       </Link>

//       <div className="infoRestaurant">
//         aqui va el restaurante que seleccionastes {selectedRestaurant.nombre}
//       </div>
//     </>
//   );
// }

// export default InfoRestaurant;
