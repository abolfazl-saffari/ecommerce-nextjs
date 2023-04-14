import { Fragment } from "react";
import Button from "@/Components/UI/Button";
import OrderManagementItem from "./OrderManagementItem";
import RadioInputs from "./RadioInputs";
import SortingArrowToggle from "./SortingArrowToggle";

const OrdersManagement = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row mb-12 justify-between items-center">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت سفارش ها</h2>
        <RadioInputs />
      </div>
      <div className="relative mx-auto overflow-x-auto shadow-md sm:rounded-lg mb-24 md:mb-10">
        <table className="w-full text-base text-right text-gray-500 dark:text-gray-400 whitespace-nowrap">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                نام کاربر
              </th>
              <th scope="col" className="px-6 py-3">
                مجموع مبلغ
              </th>
              <SortingArrowToggle
                scope="col"
                className="px-6 py-3 text-center flex justify-center items-center gap-2"
              >
                زمان ثبت سفارش
              </SortingArrowToggle>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
            <OrderManagementItem />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default OrdersManagement;
