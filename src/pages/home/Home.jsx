import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";

function Home() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log("usuario ingresado ", user);

  return (
    <div>
      <h1>home</h1>

      <div>
        <img src={user?.avatar} alt={user?.name} />
        <h1>{user?.name}</h1>
      </div>

      <button onClick={() => dispatch(logoutActionAsync())}>
        Cerrar Sesion
      </button>
    </div>
  );
}

export default Home;
