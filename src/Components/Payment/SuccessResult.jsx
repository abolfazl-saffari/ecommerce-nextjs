import { Fragment } from "react";
import ResultDescription from "./ResultDescription";
import CheckIcon from "../Icons/CheckIcon";

const SuccessResult = () => {
  return (
    <Fragment>
      <CheckIcon />
      <ResultDescription>
        با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس
        گرفته خواهد شد
      </ResultDescription>
    </Fragment>
  );
};

export default SuccessResult;
