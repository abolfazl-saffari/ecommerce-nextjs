const Button = ({ className, children, onClick }) => {
  return (
    <button
      className={`${className} hover:bg-slate-800 text-white font-semibold hover:text-white py-2 border border-white hover:border-transparent rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
