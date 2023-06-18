//-funcion sincrona crea el objeto action
//-funcion asincrona hace la peticion, interatua con la API-DB, cuando eso suceda con exito, dispara la funcion sincrona
//la funcion creadora de los actions
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { auth } from "../../Firebase/firebaseConfig";
  import { userTypes } from "../types/userTypes";
  
  // hace la peticion o llama el metodo de 'firestore' que nos permite crear nuevo usuario
  export const registerActionAsync = ({ email, password, name, avatar }) => {
    return async (dispatch) => {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
        });
        const { accessToken } = user.auth.currentUser;
        console.log(user);
        dispatch(registerActionSync({ email, name, avatar, accessToken }, null));
      } catch (error) {
        console.log("error de registro de usuario ",error);
        dispatch(
          registerActionSync({}, { code: error.code, message: error.message })
        );
      }
    };
  };
  
  // funcion que va a retornar la propiedad 'type' y la propiedad 'payload' con la que se estara modificando
  //el esrado
  const registerActionSync = (newUser, error) => {
    return {
      type: userTypes.CREATE_USER,
      payload: {
        user: newUser,
        error: error,
      },
    };
  };
  
  export const logoutActionAsync = () => {
    return async (dispatch) => {
      let errors = null;
      try {
        await signOut(auth);
      } catch (error) {
        console.log(error);
        errors = {
          error: true,
          code: error.code,
          message: error.message,
        };
      } finally {
        dispatch(logoutActionSync(errors));
      }
    };
  };
  
  const logoutActionSync = (error) => {
    return {
      type: userTypes.LOGOUT_USER,
      payload: error,
    };
  };
  
  //informacion que se requiere para hacer login
  //esta funcion asyn retorna una funcion que necesita un parametro 'dispatch' y se estara consultando el servicio
  //para que el usurio inicie session usando 'firebaseAutentication' invocamos el metodo 'signInWithEmailAndPassword', el cual requiere tres parametros, la constante 'auth' y el 'email' y 'password'
  export const loginActionAsync = (email, password) => {
    return async (dispatch) => {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
  
        const { displayName, accessToken, photoURL } = user.auth.currentUser;
  
        const userLogged = {
          email,
          name: displayName,
          avatar: photoURL,
          accessToken,
        };
        dispatch(loginActionSync(userLogged))
      } catch (error) {
        console.log("error de inicio de sesion", error);
      }
    };
  };
  
  export const loginActionSync = (user) => {
    return {
      type: userTypes.LOGGIN_USER,
      payload: user,
    };
  };
  