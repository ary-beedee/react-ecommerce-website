import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {

  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <div className="bill-summary">

            <h2>Bill Summary</h2>

            <p>Total Items: {cart.length}</p>

            <h2>Total Price: ${total.toFixed(2)}</h2>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;
