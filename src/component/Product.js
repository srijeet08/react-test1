import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import Title from "./Title";
import { toast } from "react-toastify";
import GlobalContext from "../utils/utils-context";

import "./Product.scss";
import "./HomePage.scss";
import "react-toastify/dist/ReactToastify.css";

let cartData = [];
const Product = () => {
  const params = useParams();
  const id = params.id;
  const context = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(1);

  const productData = data.find(product => {
    return product.productId === id;
  });
  // const [cartData, setCartData] = useState([]);
  const handleChange = e => {
    setQuantity(e.target.value);
  };
  let quantityOptions = [];
  for (let i = 1; i <= productData.inStock; i++) {
    quantityOptions.push(<option value={i}>{i}</option>);
  }
  const cartNotification = (productData, quantity) => {
    const prodData = [{ ...productData, quantity }];
    cartData.push(prodData);
    context.setState({
      ...context.state,
      cartItem: cartData
    });

    // context.setState(prevState => ({
    //     ...prevState,
    //     cartData: productData,
    //     itemQuantity: quantity
    // }));
    toast("Items Added to Cart!");
  };

  return (
    <div className="product-detail-page main-wrapper">
      <div className="flex-grid">
        <div className="product-image">
          <img
            src={require("./../Images" + productData.productImage)}
            alt="productImage"
          />
        </div>
        <div className="product-Detail">
          <div>
            <Title text={productData.productName} />
            <h4>
              by <span className="red-text">{productData.producer}</span>
            </h4>
            <h3>₹ {productData.productPrice}</h3>
            {productData.inStock > 0 ? (
              <>
                <h3 className="green-text">In stock</h3>
                <span>Quantity : </span>
                <select name="quantity" id="quantity" onChange={handleChange}>
                  {quantityOptions}
                </select>
              </>
            ) : (
              <h3 className="red-text">Out of Stock</h3>
            )}
            <button
              type="submit"
              name="add_to_cart"
              className="button-submit"
              onClick={() => cartNotification(productData, quantity)}
            >
              Add To Cart
            </button>
            <ul>
              {productData.productDescription.map(desc => {
                return <li>{desc.descText}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
