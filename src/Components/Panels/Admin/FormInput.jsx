const FormInput = ({ id, type, name, autocomplete, label }) => {
  return (
    <div className="mb-3">
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="relative block w-full outline-0 rounded-sm p-1.5 mt-2"
        id={id}
        name={name}
        type={type}
        autocomplete={autocomplete}
        required
      />
    </div>
  );
};

export default FormInput;
