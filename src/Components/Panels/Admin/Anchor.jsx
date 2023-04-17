import Link from "next/link";

const Anchor = ({ className, children, active, href }) => {
  return (
    <Link
      href={href}
      className={`${
        active ? "text-white" : "text-blue-500"
      } text-sm hover:underline cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
