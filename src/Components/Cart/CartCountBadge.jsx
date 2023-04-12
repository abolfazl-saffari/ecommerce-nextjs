const CartCountBadge = ({ count = 0 }) => {
  return (
    <span className="w-5 h-5 flex items-center justify-center absolute -right-3 -bottom-2 bg-red-800 text-white text-xs rounded-md">
      {count}
    </span>
  );
};

export default CartCountBadge;
