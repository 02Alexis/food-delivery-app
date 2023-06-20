import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineHome,
  MdSearch,
  MdOutlineHistory,
  MdOutlinePersonOutline,
} from "react-icons/md";
import classnames from "classnames";
import "./DashboardFooter.scss";

const DashboardFooter = () => {
    const [activeIcon, setActiveIcon] = React.useState("");
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleSearchClick = () => {
    // navigate("/search"); 
    navigate("/search");
  };
  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  
  useEffect(() => {
    // Lógica para establecer el icono activo cuando cambia la ruta actual
    const currentPath = window.location.pathname;
    if (currentPath === "/home") {
      setActiveIcon("home");
    } else if (currentPath === "/search") {
      setActiveIcon("search");
    } else if (currentPath === "/dashboard") {
      setActiveIcon("dashboard");
    } else if (currentPath === "/history") {
        setActiveIcon("history");
    }
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footerHome">
          <MdOutlineHome
            onClick={handleHomeClick}
            className={classnames("footerHome__iconHome", { active: activeIcon === "home"})}
          />
        </div>

        <div className="footerSearch">
          <MdSearch
            onClick={handleSearchClick}
            className={classnames("footerSearch__iconSearch",  {active: activeIcon === "search" })} />
        </div>

        <div className="footerHistory">
          <MdOutlineHistory
          onClick={handleHistoryClick} className={classnames("footerHistory__iconHistory", {active: activeIcon === "history"})} />
        </div>

        <div className="footerPerson">
          <MdOutlinePersonOutline 
          onClick={handleDashboardClick} className={classnames("footerPerson__iconPerson", { active: activeIcon === "dashboard" })} />
        </div>
      </footer>
    </>
  );
};

export default DashboardFooter;
