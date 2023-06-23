import React, { useRef, useState } from "react";
import { payment } from "../../services/data";

function PaymentButton() {
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
    <div className="filterFoods">
      <h1 className="filterFoods__title">Payment</h1>

      <div
        className="filterFoods__carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <button className="yelow">Casch</button>
        {payment.map((item) => (
          <button key={item.id}>
            <img src={item.img} alt={item.service} />
            {item.service}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaymentButton;
