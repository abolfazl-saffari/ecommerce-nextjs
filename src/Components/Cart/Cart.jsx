import Link from "next/link";
import { Fragment } from "react";
import Button from "../UI/Button";
import CartItemsTable from "./CartItemsTable";

const Cart = () => {
  return (
    <Fragment>
      <h2 className="text-4xl mb-14">سبد خرید</h2>
      <CartItemsTable />
      <div className="w-11/12 mx-auto flex flex-col text-center gap-5 md:flex-row md:justify-between md:items-center md:gap-0">
        <h4 className="text-3xl">
          جمع:<span className="ms-5"> 1035000 تومان</span>
        </h4>
        <Link href="cart/checkout">
          <Button className="w-full px-12 py-4 bg-green-600">
            نهایی کردن سبد خرید
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Cart;
