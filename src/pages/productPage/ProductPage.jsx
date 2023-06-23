import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./ProductPage.scss"

function ProductPage() {
  const platoSeleccionado = useSelector((store) => store.restaurantsStore.platoSeleccionado);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);

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

  const ingredientesList = platoSeleccionado?.ingredientes ? Object.entries(platoSeleccionado.ingredientes).map(([clave, valor]) => (
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
  )) : null;

  return (
    <div className='productPage'>
      <img className='dishes' src={platoSeleccionado.imagen} alt={platoSeleccionado.nombre} />
      <h1>{platoSeleccionado.nombre}</h1>
      <p>{platoSeleccionado.descripcion}</p>
      <p>Additional Ingredients</p>
      <ul>{ingredientesList}</ul>
      <p>Selected Ingredients: {ingredientesSeleccionados.join(', ')}</p>
    </div>
  );
}

export default ProductPage;
