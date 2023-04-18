import { Fragment } from "react";
import FailResult from "./FailResult";
import SuccessResult from "./SuccessResult";

const PaymentResult = () => {
  const result = false;

  return (
    <Fragment>
      <h2 className="text-3xl font-black mb-10">نتیجه پرداخت</h2>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        {result ? <SuccessResult /> : <FailResult />}
      </div>
    </Fragment>
  );
};

export default PaymentResult;
