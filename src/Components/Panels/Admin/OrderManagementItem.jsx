const OrderManagementItem = ({ onShowModal }) => {
  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4">ابوالفضل صفاری</td>
      <td className="px-6 py-4">2000000</td>
      <td className="text-center px-6 py-4">1399/1/5</td>
      <td className="text-center px-6 py-4">
        <a
          href="#"
          onClick={onShowModal}
          className="font-medium text-blue-600 hover:underline"
        >
          بررسی سفارش
        </a>
      </td>
    </tr>
  );
};

export default OrderManagementItem;
