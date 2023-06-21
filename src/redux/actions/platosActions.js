import { getDocs, query, where, collection } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { platosTypes } from "../types/userTypes";

const collectionName = "platos";
const platosCollection = collection(dataBase, collectionName);

export const getPlatosRestaurantsAsync = (searchParam, searchValue) => {
  return async (dispatch) => {
    const q = query(platosCollection, where(searchParam, "==", searchValue));

    const platos = [];

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        platos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getPlatosRestaurantSync(platos));
    }
  };
};

const getPlatosRestaurantSync = (platos) => {
  return {
    type: platosTypes.PLATOSRESTAURANTE_GET,
    payload: platos,
  };
};
