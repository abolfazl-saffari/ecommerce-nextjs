import { useRouter } from "next/router";
import { Fragment } from "react";
import FailResult from "./FailResult";
import SuccessResult from "./SuccessResult";

const PaymentResult = () => {
  const { query } = useRouter();

  return (
    <Fragment>
      <h2 className="text-3xl font-black mb-10">نتیجه پرداخت</h2>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        {query.result === "true" ? <SuccessResult /> : <FailResult />}
      </div>
    </Fragment>
  );
};

export default PaymentResult;
