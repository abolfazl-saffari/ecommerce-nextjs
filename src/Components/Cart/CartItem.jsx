import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/actions/cartAction";
import Anchor from "../Panels/Admin/Anchor";

const CartItem = ({ id, title, price, category, subCategory, inventory }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeFromCart(id, inventory));
  };

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
        <p
          onClick={removeItemHandler}
          className="font-medium text-blue-600 cursor-pointer hover:underline"
        >
          حذف
        </p>
      </td>
    </tr>
  );
};

export default CartItem;
