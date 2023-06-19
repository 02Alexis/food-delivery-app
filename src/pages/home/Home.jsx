import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";
import "./Home.scss";
import DashboardFooter from "../../components/dashboardFooter/DashboardFooter";

function Home() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log("usuario ingresado ", user);

  return (
    <>
      <div className="home">
        <h1>home</h1>
        <h2 className="dashboard__name">{user?.name}</h2>
      </div>
      <DashboardFooter />
    </>
  );
}

export default Home;
