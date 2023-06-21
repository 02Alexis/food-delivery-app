import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./InfoRestaurant.scss"

function InfoRestaurant() {
  return (
    <>
    <Link to="/home/">
    <MdKeyboardArrowLeft />
    </Link>

    <div>aqui va el restaurante que seleccionastes</div>
    </>
  )
}

export default InfoRestaurant

// import React, { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { getRestaurantById } from "../../redux/actions/restaurantActions";
// import { Link, useParams } from "react-router-dom";
// import "./InfoRestaurant.scss";
// import { useDispatch, useSelector } from "react-redux";

// function InfoRestaurant() {
//   const dispatch = useDispatch();
//   const [selectedRestaurant, setSelectedRestaurant] = useState("");
//   const {id} = useParams();
//   const { selectedRestaurant } = useSelector((store) => store.restaurantsStore);

  
//   useEffect(() => {
//     dispatch(getRestaurantById(id))   
//   }, [])
  

//   return (
//     <>
//       <Link to="/home">
//         <MdKeyboardArrowLeft />
//       </Link>

//       <div className="infoRestaurant">
//         aqui va el restaurante que seleccionastes {selectedRestaurant.nombre}
//       </div>
//     </>
//   );
// }

// export default InfoRestaurant;
