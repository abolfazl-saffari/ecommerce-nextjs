import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTotalPrice } from "@/redux/actions/cartAction";
import Button from "../UI/Button";
import CartItemsTable from "./CartItemsTable";
import Anchor from "../Panels/Admin/Anchor";

const Cart = () => {
  const { cart } = useSelector((store) => store).cart;
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (current, product) => current + product.inventory * product.price,
    0
  );
  const formattedPrice = new Intl.NumberFormat("en-US").format(totalPrice);

  return (
    <Fragment>
      <h2 className="text-4xl mb-14">سبد خرید</h2>
      {cart.length > 0 ? (
        <div>
          <CartItemsTable cart={cart} />
          <div className="w-11/12 mx-auto flex flex-col text-center gap-5 md:flex-row md:justify-between md:items-center md:gap-0">
            <h4 className="text-3xl">
              جمع:<span className="ms-5"> {formattedPrice} ریال</span>
            </h4>
            <Anchor href="cart/checkout">
              <Button
                onClick={() => {
                  dispatch(addTotalPrice(totalPrice));
                }}
                className="w-full px-12 py-4 bg-green-600"
              >
                نهایی کردن سبد خرید
              </Button>
            </Anchor>
          </div>
        </div>
      ) : (
        <div className="text-center text-3xl">
          <p>سبد خرید شما خالی است.</p>
          <Anchor href="/">بازگشت به خانه</Anchor>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
