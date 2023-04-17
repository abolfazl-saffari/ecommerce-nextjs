import { Fragment } from "react";
import ResultDescription from "./ResultDescription";

const FailResult = () => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-60 h-60 text-red-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <ResultDescription>
        پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است
      </ResultDescription>
    </Fragment>
  );
};

export default FailResult;
