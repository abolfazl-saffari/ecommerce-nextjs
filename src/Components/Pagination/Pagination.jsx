import Link from "next/link";

const Pagination = () => {
  return (
    <nav
      aria-label="Page navigation example"
      className="ltr w-full flex justify-center"
    >
      <ul className="w-full flex justify-center list-style-none rounded-md p-2 bg-slate-800 sm:w-fit">
        <li className="flex-1 text-center sm:flex-grow-0 ">
          <Link
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            قبلی
          </Link>
        </li>
        <li>
          <Link
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            1
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            3
          </Link>
        </li>
        <li className="flex-1 text-center sm:flex-grow-0 ">
          <Link
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            بعدی
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
