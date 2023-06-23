import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { platosTypes, restaurantsTypes } from "../types/userTypes";

const collectionName = "restaurant";
const collectionNamePlatos = "platos";

export const actionGetRestaurantsAsync = () => {
  return async (dispatch) => {
    const restaurantsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(restaurantsCollection);
    const restaurants = [];
    try {
      querySnapshot.forEach((doc) => {
        restaurants.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetRestaurantsSync(restaurants));
    }
  };
};

const actionGetRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANT_GET,
    payload: {
      restaurants: restaurants,
    },
  };
};

export const getRestaurantDishes = (idRestaurant) => {
  return async (dispatch) => {
    const platosCollection = collection(dataBase, collectionNamePlatos);
    const querySnapshot = await getDocs(query(platosCollection, where("idRestaurantes", "==", idRestaurant)));
    const platos = [];
    try {
      querySnapshot.forEach((doc) => {
        platos.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      dispatch(actionGetRestaurantDishes(platos));
    } catch (error) {
      console.error(error);
    }
  };
};


const actionGetRestaurantDishes = (platos) => {
  return {
    type: restaurantsTypes.GET_RESTAURANT_DISHES,
    payload: platos,
  };
};


export const getRestaurantById = (id) => {
  return async (dispatch) => {
    const restaurantsCollection = collection(dataBase, collectionName);
    const documentRef = doc(restaurantsCollection, id);
    let restaurante = {};
    try {
      const querySnapshot = await getDoc(documentRef);
      restaurante = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetRestaurantByIdSync(restaurante));
    }
  };
};

const actionGetRestaurantByIdSync = (restaurant) => {
  return {
    type: restaurantsTypes.RESTAURANT_SELECTED,
    payload: restaurant,
  };
};

export const getDishDetails = (dishId) => {
  return async (dispatch) => {
    const platosCollection = collection(dataBase, collectionNamePlatos);
    const documentRef = doc(platosCollection, dishId);
    let plato = {};
    try {
      const querySnapshot = await getDoc(documentRef);
      plato = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetDishDetailsSync(plato));
    }
  };
};

const actionGetDishDetailsSync = (plato) => {
  return {
    type: platosTypes.PLATOS_GET,
    payload: plato,
  };
};


export const searchRestaurants = (searchTerm) => {
  return (dispatch, getState) => {
    const { restaurants } = getState().restaurantsStore;

    // Realizamos la búsqueda de restaurantes por nombre
    const searchResults = restaurants.filter((restaurant) =>
      restaurant.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch({
      type: restaurantsTypes.SEARCH_RESTAURANTS,
      payload: searchResults,
    });
  };
};
