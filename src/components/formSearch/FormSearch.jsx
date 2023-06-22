import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRestaurants } from "../../redux/actions/restaurantActions";
import { MdSearch } from "react-icons/md";
import "./FormSearch.scss";

function FormSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { restaurants, searchResults } = useSelector(
    (store) => store.restaurantsStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRestaurants(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRestaurants(searchTerm));
  };

  return (
    <>
      <div className="search-bar-container">
        <div className="search">
          <form onSubmit={handleSearch}>
            <MdSearch className="search__icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a dish"
            />
          </form>
        </div>
      </div>

      <div>
        <div>
          {searchResults.length > 0 ? (
            searchResults.map((restaurant, index) => (
              <div key={index}>
                <h3>{restaurant.nombre}</h3>
                {/* Mostrar más detalles del restaurante si es necesario */}
              </div>
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FormSearch;
