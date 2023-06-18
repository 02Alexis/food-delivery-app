import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { MdSignalCellularAlt, MdWifi, MdOutlineBatteryFull } from "react-icons/md";
import './Layout.scss';

function Layout() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <div className="mobile">
        <div className="mobile__menu--time">{formattedTime}</div>
        <div className="mobile__menu-icons">
          <MdSignalCellularAlt />
          <MdWifi />
          <MdOutlineBatteryFull />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
