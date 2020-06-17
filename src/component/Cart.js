import React, { useContext, useEffect, useMemo } from "react";
import Title from "./Title";
import GlobalContext from "../utils/utils-context";
import CartItem from "./CartItem";

const Cart = () => {
  const context = useContext(GlobalContext);

  // useEffect(() => {
  //     const itemData = context.state.cartItem;
  //     console.log("itemData", itemData);

  //     itemData.forEach(text => {
  //         console.log("text",text)
  //         return <h1> text </h1>
  //     });

  // },[context.state.cartItem]);
  const item = useMemo(() => {
    return context.state.cartItem.map(text => <CartItem {...text} />);
  }, []);

  return (
    <>
      <Title text={"Cart"} />
      <div className="itemContainer">{item}</div>
      {/* <h4>Subtotal (1 item): Rs. {itemData[0].productPrice}</h4>
        <div className="item-list">
            <div class="item-image">
                <img src={itemData[0].productImage} alt="cart item"/>
            </div>
            <div className="item-details">
                <Title text={itemData[0].productName}></Title>
                <div className="green-text">{itemsInCart[0].inStock}</div>
                <div className="producer">By {itemsInCart[0].producer}</div>
                <div className="price">Rs. {itemsInCart[0].productPrice}</div>
            </div>
            <div class="Quantity-editor">
                <button>-</button>
                <button>{itemsInCart[0].itemQuantity}</button>
                <button>+</button>
            </div>
            <div className="remove-item">
                <button>remove from cart</button>
            </div>
        </div> */}
    </>
  );
};
export default Cart;
