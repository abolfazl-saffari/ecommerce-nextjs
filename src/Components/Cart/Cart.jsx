import CartCountBadge from "./CartCountBadge";
import CartIcon from "./CartIcon";

const Cart = () => {
  return (
    <div className="flex items-center gap-2 relative">
      <CartIcon />
      <CartCountBadge />
    </div>
  );
};

export default Cart;
