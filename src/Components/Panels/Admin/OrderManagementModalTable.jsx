import OrderManagementModalTableItem from "./OrderManagementModalTableItem";

const OrderManagementModalTable = () => {
  return (
    <div className="max-h-16 overflow-auto md:max-h-36">
      <table className="w-full text-base text-right whitespace-nowrap text-gray-500">
        <thead className="text-white uppercase bg-slate-800 ">
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
