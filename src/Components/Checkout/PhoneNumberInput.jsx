import { forwardRef } from "react";

const PhoneNumberInput = ({}, ref) => {
  return (
    <div className="w-full mb-6">
      <label htmlFor="phone_number" className="text-lg text-black">
        تلفن همراه :
        <span className="ms-3 text-gray-400">جهت هماهنگی ارسال سفارش</span>
      </label>
      <input
        ref={ref}
        type="tel"
        name="phone_number"
        id="phone_number"
        className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
        placeholder="09023547080"
        required
      />
    </div>
  );
};

export default forwardRef(PhoneNumberInput);
