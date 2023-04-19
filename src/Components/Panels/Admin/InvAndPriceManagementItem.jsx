const InvAndPriceManagementItem = () => {
  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4"> روغن سرخ کردنی سمن - 1.35 کلیویی</td>
      <td className="w-40 px-6 py-4">
        <input
          className="w-40 border-2 border-black outline-0 rounded px-1"
          type="number"
          min="0"
        />
      </td>
      <td className="w-40 px-6 py-4">
        <input
          className="w-40 border-2 border-black outline-0 rounded px-1"
          type="number"
          min="0"
        />
      </td>
    </tr>
  );
};

export default InvAndPriceManagementItem;
