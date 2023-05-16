const OrderManagementItem = ({
  onShowModal,
  userInfo,
  totalPrice,
  cart,
  OrderDelivered,
  OrderRegistrationTime,
  deliveryRegistrationTime,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(totalPrice);

  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4">
        {userInfo.name} {userInfo.lName}
      </td>
      <td className="flex items-center px-6 py-4">{formattedPrice} ريال</td>
      <td className="text-center px-6 py-4">{userInfo.deliveryDate}</td>
      <td className="text-center px-6 py-4">
        <a
          href="#"
          onClick={() => {
            onShowModal({
              userInfo,
              OrderRegistrationTime,
              OrderDelivered,
              deliveryRegistrationTime,
              cart,
            });
          }}
          className="font-medium text-blue-600 hover:underline"
        >
          بررسی سفارش
        </a>
      </td>
    </tr>
  );
};

export default OrderManagementItem;
