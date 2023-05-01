import Anchor from "../Panels/Admin/Anchor";

const CartItem = ({ id, title, price, category, subCategory, inventory }) => {
  return (
    <tr className="border-t-2 bg-gray-300 border-slate-800 hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap text-black"
      >
        <Anchor
          href={`/${category}/${subCategory}/${id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          {title}
        </Anchor>
      </th>
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4">{inventory}</td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          حذف
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
