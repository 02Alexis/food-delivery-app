import { addDoc, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { restaurantsTypes } from "../types/userTypes";
import {restaurantsReducer} from '../reducers/restaurantsReducers'

const collectionName = "restaurant";

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

export const getRestaurantById = (id) => {
  return async (dispatch) => {
    const restaurantsCollection = collection(dataBase, collectionName);
    const documentRef = doc(restaurantsCollection, id);
    let restaurante={};
    try {      
      const querySnapshot = await getDoc(documentRef);
      restaurante = {
        id: querySnapshot.id,
        ...querySnapshot.data()
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

const actionGetRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANT_GET,
    payload: {
      restaurants: restaurants,
    },
  };
};

export const searchRestaurants = (searchTerm) => {
  return (dispatch, getState) => {
    const { restaurants } = getState().restaurantsStore;

    // Realizar la búsqueda de restaurantes por nombre
    const searchResults = restaurants.filter((restaurant) =>
      restaurant.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch({
      type: restaurantsTypes.SEARCH_RESTAURANTS,
      payload: searchResults,
    });
  };
};