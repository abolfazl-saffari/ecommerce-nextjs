import CartCountBadge from "./CartCountBadge";
import CartIcon from "./CartIcon";

const CartIconWrapper = () => {
  return (
    <div className="relative flex items-center gap-2">
      <CartIcon />
      <CartCountBadge />
    </div>
  );
};

export default CartIconWrapper;
