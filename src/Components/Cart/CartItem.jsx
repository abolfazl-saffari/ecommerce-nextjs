import Anchor from "../Panels/Admin/Anchor";

const CartItem = () => {
  return (
    <tr className="border-t-2 bg-gray-300 border-slate-800 hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap text-black"
      >
        <Anchor
          href="/tools/shovel/15"
          className="font-medium text-blue-600 hover:underline"
        >
          روغن سرخ کردنی سمن - 1.35 کلیویی
        </Anchor>
      </th>
      <td className="px-6 py-4">100000</td>
      <td className="px-6 py-4">500</td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          حذف
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
