const RadioInputs = () => {
  return (
    <div className="flex flex-col items-center gap-1 md:flex-row md:gap-5">
      <div className="flex items-center">
        <label
          htmlFor="default-radio-1"
          className="text-xl font-medium ml-2 text-black"
        >
          سفارش های تحویل شده
        </label>
        <input
          className="w-4 h-4 text-blue-600 bg-gray-100"
          name="default-radio"
          checked
          id="default-radio-1"
          type="radio"
          value=""
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="default-radio-2"
          className="text-xl font-medium ml-2 text-black"
        >
          سفارش های در انتظار ارسال
        </label>
        <input
          className="w-4 h-4 text-blue-600 bg-gray-100"
          name="default-radio"
          checked
          id="default-radio-2"
          type="radio"
          value=""
        />
      </div>
    </div>
  );
};

export default RadioInputs;
