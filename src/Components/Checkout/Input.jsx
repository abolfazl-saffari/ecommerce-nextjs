const Input = ({ label, id, type, placeholder }) => {
  return (
    <div className="w-full mb-6 z-0">
      <label htmlFor={id} className="text-lg text-black">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
