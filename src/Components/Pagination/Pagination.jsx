const Pagination = () => {
  return (
    <nav
      aria-label="Page navigation example"
      className="ltr w-full flex justify-center"
    >
      <ul className="w-full flex justify-center list-style-none rounded-md p-2 bg-slate-800 sm:w-fit">
        <li className="flex-1 text-center sm:flex-grow-0 ">
          <a
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            قبلی
          </a>
        </li>
        <li>
          <a
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            1
          </a>
        </li>
        <li aria-current="page">
          <a
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            2
          </a>
        </li>
        <li>
          <a
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            3
          </a>
        </li>
        <li className="flex-1 text-center sm:flex-grow-0 ">
          <a
            className="relative block rounded text-sm px-3 py-1.5 bg-transparent text-white hover:bg-white hover:text-black"
            href="#"
          >
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
