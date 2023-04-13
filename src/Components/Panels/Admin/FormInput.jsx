const FormInput = ({ id, type, name, autocomplete, label }) => {
  return (
    <div className="mb-3">
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autocomplete={autocomplete}
        required
        className="relative block w-full p-1.5 mt-2 outline-0 rounded-sm"
      />
    </div>
  );
};

export default FormInput;
