import { Fragment, useState } from "react";
import Button from "@/Components/UI/Button";
import ProductManagementItem from "./ProductManagementItem";
import SortingArrowToggle from "./SortingArrowToggle";
import ProductManagementModal from "./ProductManagementModal";

const ProductsManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [descending, setDescending] = useState(true);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  const changeSlopingHandler = () => {
    setDescending((preState) => {
      return !preState;
    });
  };

  return (
    <Fragment>
      <ProductManagementModal
        showModal={showModal}
        onHideModal={hideModalHandler}
      />
      <div className="flex flex-col justify-between items-center mb-12 md:flex-row">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت کالا</h2>
        <Button
          onClick={showModalHandler}
          className="w-full px-12 py-4 bg-green-600 md:w-auto"
        >
          افزودن کالا
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
        <table className="w-full text-base text-right whitespace-nowrap">
          <thead className="uppercase text-white bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                نام کالا
              </th>
              <SortingArrowToggle
                scope="col"
                className="flex gap-2 select-none cursor-pointer px-6 py-3"
                descending={descending}
                onSlopingHandler={changeSlopingHandler}
              >
                دسته بندی
              </SortingArrowToggle>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
            <ProductManagementItem onShowModal={showModalHandler} />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ProductsManagement;
