import OrderManagementModalTableItem from "./OrderManagementModalTableItem";

const OrderManagementModalTable = () => {
  return (
    <div className="max-h-44 overflow-auto md:max-h-56">
      <table className="w-full text-base text-right whitespace-nowrap text-gray-500">
        <thead className="uppercase text-white bg-slate-800 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              کالا
            </th>
            <th scope="col" className="text-center px-6 py-3">
              قمیت
            </th>
            <th scope="col" className="text-center px-6 py-3">
              تعداد
            </th>
          </tr>
        </thead>
        <tbody>
          <OrderManagementModalTableItem />
          <OrderManagementModalTableItem />
          <OrderManagementModalTableItem />
          <OrderManagementModalTableItem />
          <OrderManagementModalTableItem />
          <OrderManagementModalTableItem />
          <OrderManagementModalTableItem />
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagementModalTable;
