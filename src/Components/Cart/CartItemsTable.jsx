import CartItem from "./CartItem";

const CartItemsTable = () => {
  return (
    <div className="w-11/12 relative mx-auto overflow-x-auto shadow-md mb-24 sm:rounded-lg md:mb-10">
      <table className="w-full text-base text-right">
        <thead className="uppercase bg-slate-800 text-white">
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
