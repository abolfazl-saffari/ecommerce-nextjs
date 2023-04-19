import Anchor from "./Anchor";

const OrderManagementModalTableItem = () => {
  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4">
        <Anchor>روغن سرخ کردنی سمن - 1.35 کلیویی</Anchor>
      </td>
      <td className="px-6 py-4">200000</td>
      <td className="px-6 py-4">200</td>
    </tr>
  );
};

export default OrderManagementModalTableItem;
