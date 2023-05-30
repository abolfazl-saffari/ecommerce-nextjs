const FormInput = ({ id, type, name, autocomplete, label, register }) => {
  return (
    <div className="mb-3">
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="relative block w-full ltr outline-0 rounded-sm p-1.5 mt-2"
        {...register(name, {
          required: true,
        })}
        id={id}
        name={name}
        type={type}
        autoComplete={autocomplete}
        required
      />
    </div>
  );
};

export default FormInput;
