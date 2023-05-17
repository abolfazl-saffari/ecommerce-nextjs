import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/redux/actions/productsAction";
import Button from "@/Components/UI/Button";
import InvAndPriceManagementItem from "./InvAndPriceManagementItem";
import Pagination from "@/Components/Pagination/Pagination";

const InvAndPriceProductsManagement = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [invAndPriceChanges, setInvAndPriceChanges] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store).products;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (invAndPriceChanges.length === 0) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [invAndPriceChanges]);

  const productsChangesClickHandler = () => {
    setInvAndPriceChanges([]);
  };

  return (
    <Fragment>
      <div className="flex flex-col justify-between items-center mb-12 md:flex-row">
        <h2 className="text-center text-3xl mb-5 md:mb-0">
          مدیریت موجودی و قیمت ها
        </h2>
        <Button
          onClick={productsChangesClickHandler}
          disabled={isButtonDisabled}
          className={`w-full px-12 py-4 bg-green-600 md:w-auto disabled:bg-gray-300`}
        >
          ذخیره
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
        <table className="w-full text-base text-right whitespace-nowrap">
          <thead className="uppercase text-white bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                کالا
              </th>
              <th scope="col" className="text-center px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="text-center px-6 py-3">
                موجودی
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <InvAndPriceManagementItem
                invAndPriceChanges={invAndPriceChanges}
                setInvAndPriceChanges={setInvAndPriceChanges}
                key={product.id}
                {...product}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </Fragment>
  );
};

export default InvAndPriceProductsManagement;
