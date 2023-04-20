const Button = ({ className, children, onClick }) => {
  return (
    <button
      className={`${className} rounded font-semibold border py-2 text-white border-white hover:text-white hover:bg-slate-800 hover:border-transparent`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
