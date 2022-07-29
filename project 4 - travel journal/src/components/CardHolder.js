import React from "react";
import Card from "./Card";
import data from "../data/data";

function CardHolder() {
  const allCards = data;
  const cards = allCards.map((cardDetail) => {
    return <Card key={cardDetail.id} cardData={cardDetail} />;
  });
  return <div className="card-holder">{cards}</div>;
}

export default CardHolder;
