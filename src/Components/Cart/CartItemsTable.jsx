import CartItem from "./CartItem";

const CartItemsTable = () => {
  return (
    <div className="relative w-11/12 mx-auto overflow-x-auto shadow-md sm:rounded-lg mb-24 md:mb-10">
      <table className="w-full text-base text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              کالا
            </th>
            <th scope="col" className="px-6 py-3">
              قیمت
            </th>
            <th scope="col" className="px-6 py-3">
              تعداد
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <CartItem />
          <CartItem />
          <CartItem />
        </tbody>
      </table>
    </div>
  );
};

export default CartItemsTable;
