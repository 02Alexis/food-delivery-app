import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { restaurantsTypes } from "../types/userTypes";

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

const actionGetRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANT_GET,
    payload: {
      restaurants: restaurants,
    },
  };
};
