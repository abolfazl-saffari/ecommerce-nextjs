const Anchor = ({ className, children, active }) => {
  return (
    <a
      className={`${
        active ? "text-white" : "text-blue-500"
      } text-sm hover:underline cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default Anchor;
