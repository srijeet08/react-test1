import React from "react";
import Title from "./Title";
import "./CartItem.scss";

const CartItem = itemData => {
  return (
    <>
      <div className="item">
        <h4>Subtotal (1 item): Rs. {itemData[0].productPrice}</h4>
        <div className="item-list">
          <div class="item-image">
            <img src={itemData[0].productImage} alt="cart item" />
          </div>
          <div className="item-details">
            <Title text={itemData[0].productName} />
            <div className="green-text">{itemData[0].inStock}</div>
            <div className="producer">By {itemData[0].producer}</div>
            <div className="price">Rs. {itemData[0].productPrice}</div>
          </div>
          <div class="Quantity-editor">
            <button>-</button>
            <button>{itemData[0].quantity}</button>
            <button>+</button>
          </div>
          <div className="remove-item">
            <button>remove from cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
