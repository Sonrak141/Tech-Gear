import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./CartItems.css";

function CartItems() {
  const { cart } = useContext(CartContext);
 
  
  console.log(cart);
  let total = 0;
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.item.id} className="contenedorCart">
            <img src={item.item.imagen} alt="imagen prod" className="imgCart" />
            <div className="cartProductText">
              <h2>{item.item.productName}</h2>
              <div>
              <ItemCount stock={5} initial={item.cant} />
                <h5>{item.item.precio * item.cant}</h5>
              </div>
            </div>
          </div>
        );
      })}
      {cart.map((item) => {
        total = item.item.precio * item.cant + total;
        return null;
      })}
      <h2>Prescio Total: ${total}</h2>
      {console.log(total)}
    </div>
  );
}

export default CartItems;
