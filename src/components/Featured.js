import React from "react";
import Card from "./Card";

export default function Featured({cards}) {
  return (
    <section className="featured">
      <h2 className="featured__title">Featured Products</h2>
      <div className="featured__container">
      {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </div>
    </section>
  );
}
