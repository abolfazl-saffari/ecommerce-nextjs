import { useState, useEffect, useRef } from "react";
import Anchor from "./Anchor";

const InvAndPriceManagementItem = ({
  id,
  title,
  price,
  inventory,
  category,
  subCategory,
  invAndPriceChanges,
  setInvAndPriceChanges,
}) => {
  const [isInventoryEdited, setIsInventoryEdited] = useState(false);
  const [isPriceEdited, setIsPriceEdited] = useState(false);
  const inputPriceRef = useRef(null);
  const inputInvRef = useRef(null);
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);
  const [priceTrigger, setPriceTrigger] = useState(false);
  const [invTrigger, setInvTrigger] = useState(false);

  useEffect(() => {
    if (isInventoryEdited === true) {
      inputInvRef.current.focus();
    }
  }, [isInventoryEdited]);
  useEffect(() => {
    if (isPriceEdited === true) {
      inputPriceRef.current.focus();
    }
  }, [isPriceEdited]);
  useEffect(() => {
    if (invAndPriceChanges.length === 0) {
      setIsInventoryEdited(false);
      setIsPriceEdited(false);
    }
  }, [invAndPriceChanges]);

  const inventoryInputClickHandler = () => {
    setIsInventoryEdited((preState) => {
      return !preState;
    });
  };
  const priceInputClickHandler = () => {
    setIsPriceEdited((preState) => {
      return !preState;
    });
  };

  const priceValueChangeHandler = (e) => {
    const changedProduct = {
      id: id,
      changedParams: { price: e.target.value },
    };

    if (e.target.value === price) {
      return setInvAndPriceChanges((prevState) => {
        return prevState.filter((product) => product.id !== changedProduct.id);
      });
    }
    setInvAndPriceChanges((prevState) => {
      if (prevState.find((product) => product.id === changedProduct.id)) {
        return prevState.map((product) =>
          product.id === changedProduct.id
            ? {
                ...product,
                changedParams: {
                  ...product.changedParams,
                  price: e.target.value,
                },
              }
            : { ...product }
        );
      }
      return prevState.concat(changedProduct);
    });
  };
  const inventoryValueChangeHandler = (e) => {
    const changedProduct = {
      id: id,
      changedParams: { inventory: e.target.value },
    };

    if (e.target.value === inventory) {
      return setInvAndPriceChanges((prevState) => {
        return prevState.filter((product) => product.id !== changedProduct.id);
      });
    }
    setInvAndPriceChanges((prevState) => {
      if (prevState.find((product) => product.id === changedProduct.id)) {
        return prevState.map((product) =>
          product.id === changedProduct.id
            ? {
                ...product,
                changedParams: {
                  ...product.changedParams,
                  inventory: e.target.value,
                },
              }
            : { ...product }
        );
      }
      return prevState.concat(changedProduct);
    });
  };

  const ESCKeyDownPriceUserHandler = (e) => {
    if (e.code === "Escape") {
      setIsPriceEdited((preState) => {
        return !preState;
      });
    }
  };

  const ESCKeyDownInvUserHandler = (e) => {
    if (e.code === "Escape") {
      setIsInventoryEdited((preState) => {
        return !preState;
      });
    }
  };

  return (
    <tr className="h-[4.5rem] border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <td className="px-6 py-4">
        <Anchor href={`/${category}/${subCategory}/${id}`}>{title}</Anchor>
      </td>
      <td className="w-40 px-6 py-4">
        {isPriceEdited ? (
          <input
            ref={inputPriceRef}
            className="w-40 text-center border-2 outline-0 rounded px-1 pt-1 border-black"
            type="number"
            min="0"
            defaultValue={price}
            onKeyDown={ESCKeyDownPriceUserHandler}
            onChange={priceValueChangeHandler}
          />
        ) : (
          <p
            onClick={priceInputClickHandler}
            className="w-40 text-center cursor-pointer"
          >
            {formattedPrice} ريال
          </p>
        )}
      </td>
      <td className="w-40 px-6 py-4">
        {isInventoryEdited ? (
          <input
            ref={inputInvRef}
            className="w-40 text-center border-2 outline-0 rounded px-1 pt-1 border-black"
            type="number"
            min="0"
            defaultValue={inventory}
            onKeyDown={ESCKeyDownInvUserHandler}
            onChange={inventoryValueChangeHandler}
          />
        ) : (
          <p
            onClick={inventoryInputClickHandler}
            className="w-40 text-center cursor-pointer"
          >
            {inventory}
          </p>
        )}
      </td>
    </tr>
  );
};

export default InvAndPriceManagementItem;
