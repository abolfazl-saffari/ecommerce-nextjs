import Anchor from "./Anchor";

const OrderManagementModalTableItem = ({
  title,
  price,
  inventory,
  category,
  subCategory,
  id,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4">
        <Anchor
          href={`/${category}/${subCategory}/${id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          {title}
        </Anchor>
      </td>
      <td className="text-center px-6 py-4">{formattedPrice}</td>
      <td className="text-center px-6 py-4">{inventory}</td>
    </tr>
  );
};

export default OrderManagementModalTableItem;
