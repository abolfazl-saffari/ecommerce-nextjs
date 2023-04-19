import { Fragment } from "react";
import Button from "@/Components/UI/Button";
import InvAndPriceManagementItem from "./InvAndPriceManagementItem";

const InvAndPriceProductsManagement = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-between items-center mb-12 md:flex-row">
        <h2 className="text-center text-3xl mb-5 md:mb-0">
          مدیریت موجودی و قیمت ها
        </h2>
        <Button
          className={`w-full px-12 py-4 bg-green-600 ${"bg-blue-600"} md:w-auto`}
        >
          ذخیره
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
        <table className="w-full text-base text-right whitespace-nowrap">
          <thead className="uppercase text-white bg-slate-800">
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
