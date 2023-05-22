import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addOrder } from "@/redux/actions/ordersAction";
import { clearCart } from "@/redux/actions/cartAction";
import Button from "@/Components/UI/Button";
import { decreasingProductInventory } from "@/redux/actions/productsAction";

const Payment = () => {
  const { cart: order } = useSelector((store) => store);
  const dispatch = useDispatch();
  const router = useRouter();
  const payClickHandler = () => {
    const date = new Date();
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    const todayDate = [year, month, day].join("-");

    Promise.all([
      dispatch(
        addOrder({
          ...order,
          OrderDelivered: false,
          OrderRegistrationTime: todayDate,
        })
      ),
      ...order.cart.map((item) => {
        return dispatch(
          decreasingProductInventory(
            item.id,
            +(item.totalProductInv - item.inventory)
          )
        );
      }),
    ]);
    dispatch(clearCart());
    router.push("/cart/checkout/paymentResult?result=true");
  };
  const refuseClickHandler = () => {
    router.push("/cart/checkout/paymentResult?result=false");
  };

  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-fit"
        src="https://rayanpay.com/wp-content/uploads/2021/09/Untitled-1-1024x554.jpg"
      />
      <div className="flex justify-center gap-3 absolute left-1/3 bottom-2.5 md:left-2/4">
        <Button
          onClick={payClickHandler}
          className="min-w-full p-2 bg-green-600"
        >
          پرداخت
        </Button>
        <Button
          onClick={refuseClickHandler}
          className="min-w-full p-2 bg-yellow-600"
        >
          انصراف
        </Button>
      </div>
    </div>
  );
};

export default Payment;
