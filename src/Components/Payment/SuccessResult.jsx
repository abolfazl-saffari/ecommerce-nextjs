import { Fragment } from "react";
import ResultDescription from "./ResultDescription";

const SuccessResult = () => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-60 h-60 text-green-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <ResultDescription>
        با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس
        گرفته خواهد شد
      </ResultDescription>
    </Fragment>
  );
};

export default SuccessResult;
