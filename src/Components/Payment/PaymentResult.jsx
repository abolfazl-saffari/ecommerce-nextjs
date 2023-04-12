import FailResult from "./FailResult";
import SuccessResult from "./SuccessResult";

const PaymentResult = () => {
  const result = false;

  return (
    <div>
      <h2 className="text-3xl font-black mb-10">نتیجه پرداخت</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
        {result ? <SuccessResult /> : <FailResult />}
      </div>
    </div>
  );
};

export default PaymentResult;
