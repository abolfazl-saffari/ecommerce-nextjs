import Button from "../UI/Button";
import CartItemsTable from "./CartItemsTable";

const Cart = () => {
  return (
    <div className="min-h-[80vh] my-6">
      <h2 className="text-4xl mb-14">سبد خرید</h2>
      <CartItemsTable />
      <div className="w-11/12 mx-auto flex flex-col gap-5 md:flex-row md:justify-between md:items-center md:gap-0">
        <h4 className="text-3xl">
          جمع:<span className="ms-5"> 1035000 تومان</span>
        </h4>
        <Button className="bg-green-600 px-12 py-4">نهایی کردن سبد خرید</Button>
      </div>
    </div>
  );
};

export default Cart;
