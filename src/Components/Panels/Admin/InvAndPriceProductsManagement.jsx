import { Fragment } from "react";
import Button from "@/Components/UI/Button";
import InvAndPriceManagementItem from "./InvAndPriceManagementItem";

const InvAndPriceProductsManagement = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row mb-12 justify-between items-center">
        <h2 className="text-3xl text-center mb-5 md:mb-0">
          مدیریت موجودی و قیمت ها
        </h2>
        <Button
          className={`w-full px-12 py-4 md:w-auto bg-green-600 ${"bg-blue-600"}`}
        >
          ذخیره
        </Button>
      </div>
      <div className="relative mx-auto overflow-x-auto shadow-md sm:rounded-lg mb-24 md:mb-10">
        <table className="w-full text-base text-right text-gray-500 dark:text-gray-400 whitespace-nowrap">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                کالا
              </th>
              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="px-6 py-3">
                موجودی
              </th>
            </tr>
          </thead>
          <tbody>
            <InvAndPriceManagementItem />
            <InvAndPriceManagementItem />
            <InvAndPriceManagementItem />
            <InvAndPriceManagementItem />
            <InvAndPriceManagementItem />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default InvAndPriceProductsManagement;
