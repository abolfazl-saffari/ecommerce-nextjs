import CartItem from "./CartItem";

const CartItemsTable = ({ cart }) => {
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
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              subCategory={item.subCategory}
              inventory={item.inventory}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemsTable;
