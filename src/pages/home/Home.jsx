import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../../redux/actions/userActions";
import "./Home.scss";
import DashboardFooter from "../../components/dashboardFooter/DashboardFooter";

function Home() {
  

  return (
    <>
      <div className="home">
        <h1>home</h1>
        <h2 className="dashboard__name"></h2>
      </div>
      <DashboardFooter />
    </>
  );
}

export default Home;
