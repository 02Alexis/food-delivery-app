import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { buttonsTypes } from "../types/userTypes";

const collectionName = "buttons";

export const actionGetButtonsAsync = () => {
  return async (dispatch) => {
    const buttonsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(buttonsCollection);
    const buttons = [];
    try {
      querySnapshot.forEach((doc) => {
        buttons.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetButtonsSync(buttons));
    }
  };
};


const actionGetButtonsSync = (buttons) => {
    return {
      type: buttonsTypes.BUTTON__GET,
      payload: {
        buttons: buttons,
      },
    };
  };