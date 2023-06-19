import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineHome,
  MdSearch,
  MdOutlineHistory,
  MdOutlinePersonOutline,
} from "react-icons/md";
import "./DashboardFooter.scss";

const DashboardFooter = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleSearchClick = () => {
    // navigate("/search"); aqui ira la accion para ir a la pagina de busqueda, que no se te olvide
  };
  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <footer className="footer">
        <div className="footerHome">
          <MdOutlineHome
            onClick={handleHomeClick}
            className="footerHome__iconHome"
          />
        </div>

        <div className="footerSearch">
          <MdSearch className="footerSearch__iconSearch" />
        </div>

        <div className="footerHistory">
          <MdOutlineHistory className="footerHistory__iconHistory" />
        </div>

        <div className="footerPerson">
          <MdOutlinePersonOutline 
          onClick={handleDashboardClick}className="footerPerson__iconPerson" />
        </div>
      </footer>
    </>
  );
};

export default DashboardFooter;
