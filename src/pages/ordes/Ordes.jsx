import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./Ordes.scss";
import Ubication from "../../components/ubication/Ubication";
import PaymentButton from "../../components/paymentButton/PaymentButton";
import { useNavigate } from "react-router-dom";

function Ordes() {
  const navigate = useNavigate();
  return (
    <div className="orders">
      <MdKeyboardArrowLeft
        onClick={() => {
          navigate(`/productPage/:id`);
        }}
        className="iconArrow"
      />
      <Ubication />
      <PaymentButton />
    </div>
  );
}

export default Ordes;
