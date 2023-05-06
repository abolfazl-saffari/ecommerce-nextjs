import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/actions/cartAction";
import Button from "../UI/Button";

const ProductActions = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [disableBtb, setDisableBtn] = useState(false);
  const { cart } = useSelector((store) => store).cart;
  const dispatch = useDispatch();

  const cartItemFinder = cart.find((item) => item.id === product.id);
  const maxInventory =
    product.inventory - (cartItemFinder && cartItemFinder.inventory);

  const amountHandler = (e) => {
    setAmount(+e.target.value);
    disableButtonHandler(e.target.max, e.target.value);
  };

  const disableButtonHandler = (max, value) => {
    if (max === value) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  };

  const totalSubmitHandler = (e) => {
    e.preventDefault();

    const changeInv = { ...product, inventory: amount };
    dispatch(addToCart(changeInv));
  };

  return (
    <form onSubmit={totalSubmitHandler} className="flex items-center gap-5">
      {+product.inventory === 0 ? (
        <p className="text-xl font-bold text-red-700">ناموجود</p>
      ) : (
        <Fragment>
          <input
            value={amount}
            onChange={amountHandler}
            type="number"
            id="small-input"
            className="w-14 rounded-lg border py-3 px-2 bg-gray-50 text-gray-900 border-gray-400 sm:text-xs"
            min="1"
            max={isNaN(maxInventory) ? product.inventory : maxInventory}
          />
          <Button
            disabled={disableBtb}
            type={"submit"}
            className={`px-4 bg-green-600`}
          >
            افزودن به سبد خرید
          </Button>
        </Fragment>
      )}
    </form>
  );
};

export default ProductActions;
