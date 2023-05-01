import { Fragment } from "react";
import ResultDescription from "./ResultDescription";
import CrossIcon from "../Icons/CrossIcon";

const FailResult = () => {
  return (
    <Fragment>
      <CrossIcon />
      <ResultDescription>
        پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است
      </ResultDescription>
    </Fragment>
  );
};

export default FailResult;
