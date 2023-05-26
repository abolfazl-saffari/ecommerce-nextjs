const RadioInputs = ({ ordersStatus, onOrdersStatusChange }) => {
  return (
    <div className="flex flex-col items-center gap-1 select-none md:flex-row md:gap-5">
      <div className="flex items-center">
        <label
          htmlFor="default-radio-1"
          className="text-xl font-medium cursor-pointer ml-2 text-black"
        >
          سفارش های تحویل شده
        </label>
        <input
          className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100"
          onChange={onOrdersStatusChange}
          checked={ordersStatus === "sent" ? true : false}
          name="orders_status"
          id="default-radio-1"
          type="radio"
          value="sent"
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="default-radio-2"
          className="text-xl font-medium cursor-pointer ml-2 text-black"
        >
          سفارش های در انتظار ارسال
        </label>
        <input
          className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100"
          onChange={onOrdersStatusChange}
          checked={ordersStatus === "in_progress" ? true : false}
          name="orders_status"
          id="default-radio-2"
          type="radio"
          value="in_progress"
        />
      </div>
    </div>
  );
};

export default RadioInputs;
