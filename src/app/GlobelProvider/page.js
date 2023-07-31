import { CartProvider }  from "../context/CartContext/page";

export function GlobalProvider({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}

