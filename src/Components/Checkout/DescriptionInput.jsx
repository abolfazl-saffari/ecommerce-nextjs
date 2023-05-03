import { forwardRef } from "react";

const DescriptionInput = ({}, ref) => {
  return (
    <div className="w-full mb-6">
      <label htmlFor="address" className="text-lg text-black">
        آدرس :
      </label>
      <textarea
        ref={ref}
        name="address"
        id="address"
        rows="4"
        className="w-full block text-sm rounded-lg resize-none mt-3 py-4 px-2 border text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
        placeholder="تهران یافت آباد"
        required
      ></textarea>
    </div>
  );
};

export default forwardRef(DescriptionInput);
