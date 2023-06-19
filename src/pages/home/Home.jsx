import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetRestaurantsAsync } from "../../redux/actions/restaurantActions";
import "./Home.scss";
import DashboardFooter from "../../components/dashboardFooter/DashboardFooter";
import { MdStarRate } from "react-icons/md";

function Home() {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((store) => store.restaurantsStore);
  console.log("restaurante ", restaurants);

  useEffect(() => {
    dispatch(actionGetRestaurantsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="home">
        {restaurants && restaurants.length ? (
          restaurants.map((restaurant, index) => (
            <div key={index} className="container">
              <img
                className="container__img"
                src={restaurant.imagen}
                alt={restaurant.nombre}
              />
              <div className="details">
                <p className="details__name">{restaurant.nombre}</p>
                <div className="details__start">
                  {restaurant.calificacion.map((rating, index) => (
                    <MdStarRate
                    key={index}
                    className={rating === 6 ? "star red" : "star yellow"} />
                  ))}
                </div>
                <p className="details__worktime">
                  Work Time {restaurant.horario.join(" - ")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <DashboardFooter />
    </>
  );
}

export default Home;
