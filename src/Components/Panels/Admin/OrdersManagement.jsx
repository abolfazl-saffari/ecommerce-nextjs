import { Fragment } from "react";
import OrderManagementItem from "./OrderManagementItem";
import RadioInputs from "./RadioInputs";
import SortingArrowToggle from "./SortingArrowToggle";

const OrdersManagement = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-between mb-12 items-center md:flex-row">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت سفارش ها</h2>
        <RadioInputs />
      </div>
      <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
        <table className="w-full text-base text-right whitespace-nowrap">
          <thead className="uppercase text-white bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                نام کاربر
              </th>
              <th scope="col" className="px-6 py-3">
                مجموع مبلغ
              </th>
              <SortingArrowToggle
                scope="col"
                className="flex justify-center items-center text-center gap-2 px-6 py-3"
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
