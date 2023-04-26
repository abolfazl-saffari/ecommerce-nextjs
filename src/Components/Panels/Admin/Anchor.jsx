import Link from "next/link";

const Anchor = ({ className, children, active, href }) => {
  return (
    <Link
      href={href}
      className={`text-sm cursor-pointer ${
        active ? "text-white" : "text-blue-500"
      } hover:underline ${className}`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
