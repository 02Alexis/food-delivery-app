import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductPage.scss";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/restaurantActions";

function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const platoSeleccionado = useSelector(
    (store) => store.restaurantsStore.platoSeleccionado
  );
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(
    []
  );
  const [quantity, setQuantity] = useState(1);
  const [precioBase, setPrecioBase] = useState(0);
  const [precio, setPrecio] = useState(platoSeleccionado.precio);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckboxChange = (event, ingrediente) => {
    const ingredientePrecio = platoSeleccionado.ingredientes[ingrediente];
    const isChecked = event.target.checked;

    if (isChecked) {
      setIngredientesSeleccionados([...ingredientesSeleccionados, ingrediente]);
      setPrecioBase(precioBase + ingredientePrecio);
    } else {
      const updatedIngredientes = ingredientesSeleccionados.filter(
        (selectedIngrediente) => selectedIngrediente !== ingrediente
      );
      setIngredientesSeleccionados(updatedIngredientes);
      setPrecioBase(precioBase - ingredientePrecio);
    }
  };

  const ingredientesList = platoSeleccionado?.ingredientes
    ? Object.entries(platoSeleccionado.ingredientes).map(([clave, valor]) => (
        <li key={clave}>
          <label onChange={(e) => handleCheckboxChange(e, clave)}>
            <input
              type="checkbox"
              value={clave}
              checked={ingredientesSeleccionados.includes(clave)}
              onChange={(e) => handleCheckboxChange(e, clave)}
            />
            {`${clave}: ${valor}`}
          </label>
        </li>
      ))
    : null;

  return (
    <div className="productPage">
      <img
        className="dishes"
        src={platoSeleccionado.imagen}
        alt={platoSeleccionado.nombre}
      />
      <h1>{platoSeleccionado.nombre}</h1>
      <p>{platoSeleccionado.descripcion}</p>
      <p className="gray">Additional Ingredients</p>
      <ul className="ingredientesList">{ingredientesList}</ul>
      <p className="gray">
        Selected Ingredients: {ingredientesSeleccionados.join(", ")}
      </p>

      <div className="buttons">
        <div className="quantity-section">
          <button className="quantity-btn" onClick={handleDecrease}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="add-section" onClick={() => {
          dispatch(addToCart(platoSeleccionado.imagen, platoSeleccionado.nombre, precioBase + platoSeleccionado.precio));
          navigate(`/ordes`)
        }}>
          <button className="add-btn">Add</button>
          {/* <span className="price">Base Price: {precioBase}</span> */}
          <span className="price">
            {precioBase + platoSeleccionado.precio}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
