import Anchor from "./Anchor";

const InvAndPriceManagementItem = () => {
  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4"> روغن سرخ کردنی سمن - 1.35 کلیویی</td>
      <td className="w-40 px-6 py-4">
        <input className="w-40 px-1 outline-0 rounded" type="number" min="0" />
        {/* <Anchor>2000</Anchor> */}
      </td>
      <td className="w-40 px-6 py-4">
        <input className="w-40 px-1 outline-0 rounded" type="number" min="0" />
        {/* <Anchor>200</Anchor> */}
      </td>
    </tr>
  );
};

export default InvAndPriceManagementItem;
