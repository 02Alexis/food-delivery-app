import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";
import "./Dashboard.scss";
import DashboardFooter from "../../components/dashboardFooter/DashboardFooter";

function Dashboard() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log("usuario ingresado ", user);

  return (
    <>
      <div className="dashboard">
        <img src={user?.avatar} alt={user?.name} className="dashboard__image" />

        <h2 className="dashboard__name">{user?.name}</h2>

        <div className="dashboard__edit">
          <a href="#">Account edit</a>
        </div>

        <div className="dashboard__logout">
          <button onClick={() => dispatch(logoutActionAsync())}>Logout</button>
        </div>

        <div className="dashboard__payment">
          <a href="#">Payment</a>
        </div>

        <div className="dashboard__language">
          <a href="#">Language</a>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
}

export default Dashboard;
