import { Fragment } from "react";

const ProductsWrapper = ({ children, title }) => {
  return (
    <div className="mb-11">
      <h2 className="w-fit text-2xl mb-3 border-b-2  border-slate-900">
        <a href="#">{title}</a>
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
        {children}
      </div>
    </div>
  );
};

export default ProductsWrapper;
