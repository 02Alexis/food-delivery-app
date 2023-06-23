import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetRestaurantsAsync } from "../../redux/actions/restaurantActions";
import "./Home.scss";
import DashboardFooter from "../../components/dashboardFooter/DashboardFooter";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Ubication from "../../components/ubication/Ubication";
import FilterFoods from "../../components/filterFoods/FilterFoods";
import { getRestaurantById } from "../../redux/actions/restaurantActions";
import Promo from "../../components/promo/Promo";
import { ToastContainer } from "react-toastify";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurants } = useSelector((store) => store.restaurantsStore);

  useEffect(() => {
    dispatch(actionGetRestaurantsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="home">
        <Ubication />
        <Promo />
        <FilterFoods />
        {restaurants && restaurants.length ? (
          restaurants.map((restaurant, index) => (
            <div key={index} className="container">
              <img
                onClick={() => {
                  dispatch(getRestaurantById(restaurant.id));
                  navigate(`/restaurant/${restaurant.id}`);
                }}
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
                      className={rating === 6 ? "star red" : "star yellow"}
                    />
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
      
      <ToastContainer />
    </>
  );
}

export default Home;
