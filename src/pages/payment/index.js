import Button from "@/Components/UI/Button";

const Payment = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-fit"
        src="https://rayanpay.com/wp-content/uploads/2021/09/Untitled-1-1024x554.jpg"
      />
      <div className="absolute left-1/3 md:left-2/4  bottom-2.5 flex justify-center gap-3">
        <Button className="min-w-full bg-yellow-600 py-4">انصراف</Button>
        <Button className="min-w-full bg-green-600 py-4">پرداخت</Button>
      </div>
    </div>
  );
};

export default Payment;
