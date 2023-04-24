import { useState } from "react";

const InvAndPriceManagementItem = ({ onSaveChanges }) => {
  const [isInventoryEdited, setIsInventoryEdited] = useState(false);
  const [isPriceEdited, setIsPriceEdited] = useState(false);

  const inventoryInputClickHandler = () => {
    onSaveChanges();
    setIsInventoryEdited((preState) => {
      return !preState;
    });
  };
  const priceInputClickHandler = () => {
    onSaveChanges();
    setIsPriceEdited((preState) => {
      return !preState;
    });
  };

  return (
    <tr className="h-[4.5rem] border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4"> روغن سرخ کردنی سمن - 1.35 کلیویی</td>
      <td className="w-40 px-6 py-4">
        {isInventoryEdited ? (
          <input
            className="w-40 text-center border-2 outline-0 rounded px-1 pt-1 border-black"
            type="number"
            min="0"
            defaultValue="150000"
          />
        ) : (
          <p
            onClick={inventoryInputClickHandler}
            className="w-40 text-center cursor-pointer"
          >
            150000
          </p>
        )}
      </td>
      <td className="w-40 px-6 py-4">
        {isPriceEdited ? (
          <input
            className="w-40 text-center border-2 outline-0 rounded px-1 pt-1 border-black"
            type="number"
            min="0"
            defaultValue="150"
          />
        ) : (
          <p
            onClick={priceInputClickHandler}
            className="w-40 text-center cursor-pointer"
          >
            150
          </p>
        )}
      </td>
    </tr>
  );
};

export default InvAndPriceManagementItem;
