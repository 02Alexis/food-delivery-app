import React, { useRef, useState } from 'react'
import "./FilterButton.scss"

function FilterButton() {
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

  return (<>
    <div className="filterButton">

      <div className="filterButton__carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
        <button className="yelow">All</button>
        <button>Fast Food</button>
        <button>Pizza</button>
        <button>Pizza</button>
      </div>
    </div>
  </>
  )
}

export default FilterButton