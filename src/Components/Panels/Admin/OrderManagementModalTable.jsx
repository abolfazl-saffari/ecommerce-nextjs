import OrderManagementModalTableItem from "./OrderManagementModalTableItem";

const OrderManagementModalTable = () => {
  return (
    <div className="max-h-16 md:max-h-36 overflow-auto">
      <table className="w-full text-base text-right text-gray-500 dark:text-gray-400 whitespace-nowrap">
        <thead className="text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              تصویر
            </th>
            <th scope="col" className="px-6 py-3">
              نام کالا
            </th>
            <th scope="col" className="px-6 py-3">
              دسته بندی
            </th>
          </tr>
        </thead>
        <tbody>
          <OrderManagementModalTableItem />
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagementModalTable;
