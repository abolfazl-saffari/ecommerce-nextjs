import { useSelector } from "react-redux";

const CartCountBadge = () => {
  const count = useSelector((store) => store).cart.totalItems;

  return (
    <span className="w-5 h-5 absolute flex items-center justify-center text-xs -right-3 -bottom-2 rounded-md text-white bg-red-800">
      {count}
    </span>
  );
};

export default CartCountBadge;
