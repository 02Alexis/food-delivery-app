import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PublicRoute from "./PublicRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { loginActionSync } from "../redux/actions/userActions";
import Dashboard from "../pages/dashboard/Dashboard";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import Search from "../pages/search/Search";
import RestaurantPage from "../pages/restaurantPage/RestaurantPage";
import OrdersHistory from "../pages/ordersHistory/OrdersHistory";
import ProductPage from "../pages/productPage/ProductPage";
import Ordes from "../pages/ordes/Ordes";
import Spinner from 'react-bootstrap/Spinner';

function AppRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          const logged = {
            email: userLogged.auth.currentUser.email,
            name: userLogged.auth.currentUser.displayName,
            avatar: userLogged.auth.currentUser.photoURL,
            accessToken: userLogged.auth.currentUser.accessToken,
          };
          dispatch(loginActionSync(logged));
        }
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });
  }, [user, dispatch]);

  if (loading) {
    return <Spinner animation="grow" variant="success" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute isAutentication={isLoggedIn} />}>
            <Route path="splashScreen" element={<SplashScreen />} />
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoute isAutentication={isLoggedIn} />}>
            <Route path="home" element={<Home />} />
            <Route path="restaurant/:id" element={<RestaurantPage />} />
            <Route path="productPage/:id" element={<ProductPage />} />
            <Route path="ordes" element={<Ordes />} />
            <Route path="search" element={<Search />} />
            <Route path="history" element={<OrdersHistory />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
