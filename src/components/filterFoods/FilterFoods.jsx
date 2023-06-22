import React, { useRef, useState } from "react";
import "./FilterFoods.scss";
import { category } from "../../services/data";

function FilterFoods() {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.clientX);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
  
      const carousel = carouselRef.current;
      const walk = (event.clientX - startX) * 2; // Ajusta la velocidad de desplazamiento
  
      carousel.scrollLeft += walk;
      setStartX(event.clientX);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };

  return (
    <>
      <div className="filterFoods">
        <div className="filterFoods__title">Restaurants and cafes</div>

        <div className="filterFoods__carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          <button className="yelow">All</button>
          {category.map((item) => (
            <button key={item.id}>
              <img src={item.img} alt={item.name} />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilterFoods;
