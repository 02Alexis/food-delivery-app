import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./Ordes.scss";
import Ubication from "../../components/ubication/Ubication";
import PaymentButton from "../../components/paymentButton/PaymentButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Ordes() {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.restaurantsStore.cart);

  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const calcularPrecioTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * cantidad;
    });
    return total;
  };

  const handleOrder = () => {
    navigate("/home");
    toast.success("¡Éxito!");
  };

  return (
    <>
      <div className="orders">
        <div className="orders__title">
          <MdKeyboardArrowLeft
            onClick={() => {
              navigate(`/productPage/:id`);
            }}
            className="iconArrow icon"
          />
          <div class="texto">New Order</div>
        </div>

        <Ubication />
        <PaymentButton />

        {cart.map((item, index) => (
          <div key={index} className="file">
            <img className="image" src={item.image} alt={item.name} />

            <div className="cantidad">
              <button className="boton" onClick={decrementarCantidad}>
                -
              </button>
              <span>{cantidad}</span>
              <button className="boton" onClick={incrementarCantidad}>
                +
              </button>
            </div>
            <div className="contenido">
              <p className="nombre">{item.name}</p>
              <p className="precio">$ {item.price}</p>
            </div>
          </div>
        ))}

        <div className="products">
          <div className="products__name">Products</div>
          <div className="products__total">{calcularPrecioTotal()}</div>
        </div>

        <div className="order-button-container">
          <button className="order-button" onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Ordes;
