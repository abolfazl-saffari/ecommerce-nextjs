const DateInput = () => {
  return (
    <div className="w-full mb-6">
      <label
        htmlFor="delivery_date"
        className="peer-focus:font-medium text-lg text-black"
      >
        تاریخ تحویل :
      </label>
      <input
        type="date"
        name="delivery_date"
        id="delivery_date"
        className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
        defaultValue="2023-04-12"
        required
      />
    </div>
  );
};

export default DateInput;
