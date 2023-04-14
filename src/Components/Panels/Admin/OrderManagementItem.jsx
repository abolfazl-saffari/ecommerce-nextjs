const OrderManagementItem = () => {
  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">ابوالفضل صفاری</td>
      <td className="px-6 py-4">2000000</td>
      <td className="px-6 py-4 text-center">1399/1/5</td>
      <td className="px-6 py-4 text-center">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 underline"
        >
          بررسی سفارش
        </a>
      </td>
    </tr>
  );
};

export default OrderManagementItem;
