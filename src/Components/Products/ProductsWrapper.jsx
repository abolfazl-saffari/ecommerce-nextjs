import Link from "next/link";

const ProductsWrapper = ({ children, title, Sidebar }) => {
  return (
    <div
      className={`col-span-6 ${
        Sidebar ? "mb-0" : "mb-11"
      } lg:col-span-5 lg:mr-5`}
    >
      <h2 className="w-fit text-2xl border-b-2 mb-3 border-slate-900">
        <Link href="/tools">{title}</Link>
      </h2>
      <div
        className={
          Sidebar
            ? "grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2"
            : "grid gap-x-5 gap-y-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ProductsWrapper;
