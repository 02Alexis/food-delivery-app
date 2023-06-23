import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ProductPage.scss";

function ProductPage() {
  const platoSeleccionado = useSelector(
    (store) => store.restaurantsStore.platoSeleccionado
  );
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(
    []
  );
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckboxChange = (event, ingrediente) => {
    if (event.target.checked) {
      setIngredientesSeleccionados([...ingredientesSeleccionados, ingrediente]);
    } else {
      const updatedIngredientes = ingredientesSeleccionados.filter(
        (selectedIngrediente) => selectedIngrediente !== ingrediente
      );
      setIngredientesSeleccionados(updatedIngredientes);
    }
  };

  const ingredientesList = platoSeleccionado?.ingredientes
    ? Object.entries(platoSeleccionado.ingredientes).map(([clave, valor]) => (
        <li key={clave}>
          <label>
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

        <div className="add-section">
          <button className="add-btn">Add</button>
          <span className="price">{platoSeleccionado.precio}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
