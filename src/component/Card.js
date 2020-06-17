import React from "react";

import "./Card.scss";

const Card = ({
  productId,
  productImage,
  productName,
  productPrice,
  onView
}) => {
  return (
    <>
      <div className="card" onClick={() => onView(productId)}>
        <img src={require("../Images" + productImage)} alt="imageNew" />
        <div>{productName}</div>
        <div>{productPrice}</div>
      </div>
    </>
  );
};

export default Card;
