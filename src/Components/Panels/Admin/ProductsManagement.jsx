import { Fragment } from "react";
import Button from "@/Components/UI/Button";
import ProductManagementItem from "./ProductManagementItem";
import SortingArrowToggle from "./SortingArrowToggle";

const ProductsManagement = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row mb-12 justify-between items-center">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت کالا</h2>
        <Button className="w-full px-12 py-4 md:w-auto bg-green-600">
          افزودن کالا
        </Button>
      </div>
      <div className="relative mx-auto overflow-x-auto shadow-md sm:rounded-lg mb-24 md:mb-10">
        <table className="w-full text-base text-right text-gray-500 dark:text-gray-400 whitespace-nowrap">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                نام کالا
              </th>
              <SortingArrowToggle scope="col" className="px-6 py-3 flex gap-2">
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
