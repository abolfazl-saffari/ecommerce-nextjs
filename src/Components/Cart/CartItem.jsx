const CartItem = () => {
  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          روغن سرخ کردنی سمن - 1.35 کلیویی
        </a>{" "}
      </th>
      <td className="px-6 py-4">100000</td>
      <td className="px-6 py-4">500</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          حذف
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
