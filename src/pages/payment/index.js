import Link from "next/link";
import Button from "@/Components/UI/Button";

const Payment = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-fit"
        src="https://rayanpay.com/wp-content/uploads/2021/09/Untitled-1-1024x554.jpg"
      />
      <div className="flex justify-center gap-3 absolute left-1/3 bottom-2.5 md:left-2/4">
        <Link href="/cart/checkout/paymentResult">
          <Button className="min-w-full p-4 bg-green-600">پرداخت</Button>
        </Link>
        <Link href="/cart/checkout/paymentResult">
          <Button className="min-w-full p-4 bg-yellow-600">انصراف</Button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
