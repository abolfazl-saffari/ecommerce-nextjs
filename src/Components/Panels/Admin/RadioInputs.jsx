import { Fragment } from "react";

const RadioInputs = () => {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-5 items-center">
      <div className="flex items-center">
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-xl font-medium text-black"
        >
          سفارش های تحویل شده
        </label>
        <input
          checked
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100"
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-xl font-medium text-black"
        >
          سفارش های در انتظار ارسال
        </label>
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100"
        />
      </div>
    </div>
  );
};

export default RadioInputs;
