
import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  clearCart,
} from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <h2>My Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <h3>{item.name}</h3>

            <p>₦{item.price.toLocaleString()}</p>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₦{totalPrice.toLocaleString()}</h3>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
