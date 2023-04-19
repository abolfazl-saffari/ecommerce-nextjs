import { Fragment } from "react";
import Button from "@/Components/UI/Button";
import ProductManagementItem from "./ProductManagementItem";
import SortingArrowToggle from "./SortingArrowToggle";

const ProductsManagement = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-between items-center mb-12 md:flex-row">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت کالا</h2>
        <Button className="w-full bg-green-600 px-12 py-4 md:w-auto">
          افزودن کالا
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
        <table className="w-full text-base text-right whitespace-nowrap">
          <thead className="uppercase text-white bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                نام کالا
              </th>
              <SortingArrowToggle scope="col" className="flex gap-2 px-6 py-3">
                دسته بندی
              </SortingArrowToggle>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
            <ProductManagementItem />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ProductsManagement;
