import CartCountBadge from "./CartCountBadge";
import CartIcon from "./CartIcon";

const CartIconWrapper = () => {
  return (
    <div className="flex items-center gap-2 relative">
      <CartIcon />
      <CartCountBadge />
    </div>
  );
};

export default CartIconWrapper;
