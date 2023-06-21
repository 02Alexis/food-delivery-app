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
        // doc.data() is never undefined for query doc snapshots
        restaurants.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetRestaurantsSync(restaurants));
    }
  };
};

// export const getRestaurantById = (id) => {
//   return async (dispatch) => {
//     const restaurantsCollection = collection(dataBase, collectionName);
//     const documentRef = doc(restaurantsCollection, id);
//     let querySnapshot;
//     try {      
//       querySnapshot = await getDoc(documentRef);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       dispatch(actionGetRestaurantByIdSync(querySnapshot));
//     }
//   };
// };

// const actionGetRestaurantByIdSync = (querySnapshot) => {
//   return {
//     type: restaurantsTypes.RESTAURANT_SELECTED,
//     payload: querySnapshot,
//   };
// };

const actionGetRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANT_GET,
    payload: {
      restaurants: restaurants,
    },
  };
};

// export const actionFilterRestaurantsAsync = (searchParam, searchValue) => {
//   return async (dispatch) => {
//     const restaurantsCollection = collection(dataBase, collectionName);
//     const q = query(restaurantsCollection, where(searchParam, "==", searchValue));
//     const restaurants = [];
//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         restaurants.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(actionFilterRestaurantsSync(restaurants));
//     }
//   };
// };

// const actionFilterRestaurantsSync = (restaurants) => {
//   return {
//     type: restaurantsTypes.RESTAURANT_FILTERED,
//     payload: {
//       restaurants: restaurants,
//     },
//   };
// };