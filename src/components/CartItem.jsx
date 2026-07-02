import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {

  const {
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  return (
    <div className="cart-item">

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="cart-details">

        <h3>{item.title}</h3>

        <p>${item.price}</p>

        <p>Quantity: {item.quantity}</p>

        <div className="cart-buttons">

          <button
            onClick={() => decreaseQty(item.id)}
          >
            -
          </button>

          <button
            onClick={() => increaseQty(item.id)}
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;